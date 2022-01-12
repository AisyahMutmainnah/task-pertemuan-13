//TODO 3: Import data students dari folder data/students.js
//code here
const student = require("../data/students")

//import model student
const Student = require("../models/Student");


//Buat class StudentController
//ini menggunakan res.json 
class StudentController {
    async index(req, res) {
       const students = await Student.all();

        const data = {
            message: "Menampilkan semua students",
            data: students,
       };

       res.json(data);
    }
    
        //TODO 4: Tampilkan data students
        //code here
        /*const data = {
            message: "Menampilkan semua students",
            data: students,
    };

    res.json(data);
    */
    


     async store(req, res) {
       // const { nama } = req.body;

        //jalankan method create dari Model Student
        //kirim data
        const student = await Student.create(req.body);  
        
        //TODO 5: Tambahkan data students
        //code here
        //student.push(nama)
        //const data = {
            const data = {
                message: "Menambahkan data student",
                data: student,
           };
    
           res.json(data); //req.body.nama utk menangkap data json yg diberikan
            //data: student,
    

    
}

    async update(req, res) {
        const { id } = req.params;
        //cek apakah id student ada
        const student = await Student.find(id);

        //console.log(student);
        
        // jika ada, lakukan update
        if (student) {
            const studentUpdated = await Student.update(id, req.body);

            const data = {
                message: "Mengupdate data student",
                data: studentUpdated,
            };

            res.json(data);
    
        }
        else {
            // jika tidak, kirim data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(404);
            res.json(data);
        }
    
        //TODO 6: Update data students
        //code here
       // student.splice(id,2,nama)
        //const data = {
        //message: `Mengedit data students id ${id}, nama ${nama}`,
        //data: [student],
    
     
    //res.json(data);
}

    async destroy(req, res) {
        const { id } = req.params;
        
        //cari id
        // jika ada, hapus data
        // jika tidak, kirim data tidak ada

        const student = await Student.find(id);

        if (student) {
            //hapus data
           await Student.delete(id);

           const data = {
               message: "Menghapud sata student"
           }
        }
        else {
            //data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }
        //TODO 7: Hapus data students
        //code here
        //student.splice(id,2)
        //const data = {
        //message: `Menghapus data students id ${id}`,
        //data: [student],
    

    res.json(data);
}

}


/*
//ini menggunakan res.send
class StudentController {
    index(req, res) {
        res.send("Menampilkan semua students");
    }

    store(req, res) {
        const { nama } = req.body;
        res.send("Menambahkan data students: " + nama); //req.body.nama utk menangkap data json yg diberikan
    }

    update(req, res) {
        const { id } = req.params;
        res.send(`Mengedit data students id: ${id}`);
    }

    destroy(req, res) {
        const { id } = req.params;
        res.send("Menghapus data students id: " + id);
    }
}

*/

//Membuat object StudentController
const object = new StudentController();

//Export object StudentController
module.exports = object;