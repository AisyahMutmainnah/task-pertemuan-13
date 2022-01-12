 //import StudentController
 const StudentController = require("../controllers/StudentController")

//import express
const express = require("express");


//buat routing modular
const router = express.Router();

//definiskan routing
router.get("/", function (req, res) {  //awalnya ini app.get tapi diganti jadi router.get dan seterusnya
    res.send("Hello Express");
  });
  
  
//Routing untuk students
//nah disini index dll nya kita jadiin callback dan beda dari yang sebelumnya

router.get("/students", StudentController.index);

router.post("/students", StudentController.store);

router.put("/students/:id", StudentController.update);

router.delete("/students/:id", StudentController.destroy);

//nah router diatas jadinya mirip kayak laravel di pekan sebelumnya

//export routing
module.exports = router;

/* ini menggunakan callback secara tertulis
  router.get("/students", (req, res) => {
      StudentController.index(req, res);
  });
  
  router.post("/students", (req, res) => {
    StudentController.store(req, res);
  });

  router.put("/students/:id", (req, res) => {
    StudentController.update(req, res);
  });

  router.delete("/students/:id", (req, res) => {
    StudentController.destroy(req, res);
  });
  
  */






  /* router.post("/students", (req, res) => {
      res.send("Menambahkan data students");
  }); */
  
  
  /* router.put("/students/:id", (req, res) => {
    //destructing object 
        const { id } = req.params;
        res.send(`Mengedit data students id: ${id}`); //bisa pake backtik trs ${id}
  }); */
  
  
 

  