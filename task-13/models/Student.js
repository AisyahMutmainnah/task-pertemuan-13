//import db
const db = require("../config/database");


//class model student
class Student {
    //method untuk query semua data
    static all() {
        //buat promise : 

        return new Promise((resolve, reject) => {

            //baru masukin query di dalamnya 

            const sql = "SELECT * FROM students";
            db.query(sql, (err, results) => {
           // console.log(results);
            resolve (results);
            });
        });

        /*query ke database
        const sql = "SELECT * FROM students";
        db.query(sql, function (err, results){
           // console.log(results);
            return results;
        }); */
    }

   /* static async create(data) {
        //return promise
        const id = await new Promise((reslove, reject) => {

            //insert db ke database

            const sql = 'INSERT INTO students SET ?'
            db.query(sql, data, (err, results) => {
                resolve(results, insertId);
            })
        })
       
        return new Promise((resolve, reject) => {
            //query select by id

            const sql = 'SELECT * FROM students WHERE id = ?'
            db.query(sql, id, (err, results) => {
                resolve(results)
            })
        })
    } */

    static async create(data) {
        //console.log(data);
        
        //promise 1 : insert data ke database
        const id  = await new Promise((resolve, reject) => {
            //insert data ke database
            const sql = "INSERT INTO students SET ?";
            db.query(sql, data, function (err, results) {
                resolve(results.insertId);
            });
        });
        
        //promise 2 : select data yang di insert
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM students WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }

    
    static find(id) {
        //lakukan promise, select by id
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM students WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }

    static async update(id, data) {
        //update data
         await new Promise((resolve, reject) => {
            //query untuk update data
            const sql = "UPDATE students SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                resolve(results);
            });
        });

        //select data by id
        const student = await this.find(id);
        return student;
    }

    static delete(id) {
        //query delete
        return new Promise((resolve, reject) => {
            //query sql
            const sql = "DELETE FROM * students WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }

}


//export class
module.exports = Student;

