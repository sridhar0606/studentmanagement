const Student = require('../models/student_model.js')
const multer = require('multer')
const fs = require('fs');
const path = require("path");


const storage = multer.diskStorage({
   destination: "./public/uploads/",
   filename: function(req, file, cb){
      cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
   }
});

const upload = multer({
   storage: storage,
   limits:{fileSize: 1000000},
}).single("myImage");


Createstudent = (req, res) => {
    const body = req.body
    console.log(body)


  upload(req, res, (err) => {
      console.log("Request ---", req.body);
      console.log("Request file ---", req.file);
   
      if(!err){

        console.log("dfg",req.file.filename)

            var collection = {
                  Name: req.body.name,
                   Email: req.body.email,
                    Dob:req.body.dob,
                    BloodGroup: req.body.blood ,
                    FatherName: req.body.father ,
                    MotherName: req.body.mother ,
                    Address: req.body.address,
                    Profile:req.file.filename ,
                    Course:req.body.cource ,
                    Staff: req.body.staff
                  }

     const student = new Student(collection)

     if (!student) {
         return res.status(400).json({ success: false, error: err })
           }

     student
         .save()
         .then(() => {
             return res.status(200).json({message:"Registration success " })
           })
         .catch(error => {
            return res.status(400).json({
                 error,
                 message: 'Registration un success!',
             })
        })




      }else{
   console.log("err",err)
         return res.status(400).json({
                 err,
                 message: 'Registration un success!',
             })
      }
  
   });


}






module.exports = {
    Createstudent,
 
}