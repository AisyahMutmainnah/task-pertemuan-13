//import express
const express = require("express");


//buat object 
const app = express();

//definisikan port
app.listen(3000, function () {
  console.log("Server berjalan di: http://localhost:3000");
});


//pake router (import )
const router = require("./routes/api.js");

//menggunakan middleware
app.use(express.json()); //guna nya untuk mengubah data json mnjadi object agar terbaca oleh js
app.use(express.urlencoded());

//menggunakaan routing (router)
app.use(router); //use nya untuk menggunakan middleware yg merupakan perantara

