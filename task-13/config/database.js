//import myslql
const mysql = require("mysql");

//import dotenv
require("dotenv").config();


//buat koneksi: creatConnection
 const db = mysql.createConnection({
    //host, user, pass, database
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});


//connect ke db
db.connect(function(err) {
    if (err) {
        console.log("connection error" + err);
        return;
    }
    else {
        console.log("connection berhasil");
        return;
    }
});


//export db
module.exports = db;