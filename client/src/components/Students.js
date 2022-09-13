import React from 'react';
import  { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from '../api/index.js'

function Students() {
  const navigate = useNavigate();

  const [staffname, setStaffname] = useState("");
  const [studentname, setStudentname] = useState("");
  const [studentemail, setStudentemail] = useState("");
  const [fathername, setFathername] = useState("");
  const [mothername, setMothername] = useState("");
  const [address, setAddress] = useState("");
  const [course, setCourse] = useState("");
  const [studentimage, setStudentimage] = useState(null);

  const [studentdob, setStudentdob] = useState("");
  const [studentbloodgroup, setStudentbloodgroup] = useState("");

  const [successmsg, setSuccessmsg] =useState(false);

  const [arraylist, setArraylist] = useState([]);
   
  const [coursecollection, setCoursecollection] = useState([]);

  const [staff, setStaff] = useState([]);



 
useEffect(() => {

  api.CourseCollection().then (res => {
      alert(JSON.stringify(res))
    setCoursecollection(res.data.data)
     })

  },[]);





  const handleChange = (e, obj) => {
    if (obj === "profile") {
   setStudentimage(e.target.files[0])

    } else if (obj === "studentname") {
      setStudentname(e.target.value);
    } else if (obj === "studentemail") {
      setStudentemail(e.target.value);
    } else if (obj === "studentdob") {
      setStudentdob(e.target.value);
    } else if (obj === "bloodgroup") {
      setStudentbloodgroup(e.target.value);
    } else if (obj === "fathername") {
      setFathername(e.target.value);
    } else if (obj === "mothername") {
      setMothername(e.target.value);
    } else if (obj === "address") {
      setAddress(e.target.value);
    } else if (obj === "coursename") {

     const data = JSON.parse(e.target.value)
   
     setCourse(e.target.value);
      setStaff(data.staff)

    } else if (obj === "staffname") {
      setStaffname(e.target.value);
    }


  };
  const HandleSubmit = (e) => {
    e.preventDefault();

  const formData = new FormData();
      
        formData.append('name', studentname);
        formData.append('email', studentemail);
       
        formData.append('dob', studentdob);
        formData.append('blood',studentbloodgroup);
          formData.append('father', fathername);
            formData.append('mother', mothername);
             formData.append('address',address);
              formData.append('cource',course);
               formData.append('staff', staffname);
                 formData.append('myImage',studentimage);

         const config = {
             headers: {
                 'content-type': 'multipart/form-data'
             }
         };

         console.log("ss",formData)

   api.Createstudent(formData).then (res => {
      
    if(res.status == 200 ){
      alert("register Successful")
      
       }
     })
   
     };

  const handlePageChange = () => {
    navigate("/");
  };
  return (

 
    <div class="Home">
      
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="home-head">Students Registration</h2>
            <button
              type="submit"
              class="convertbtn"
              style={{ float: "right" }}
              onClick={() => handlePageChange()}
            >
              Back
            </button>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-8" style={{ display: "block", margin: "0 auto" }}>
           
            <form
              class="login100-form validate-form text-left"
              onSubmit={(e) => HandleSubmit(e)}
            >
              {successmsg === true ? (
                <>
                  <div class="successmsg">
                    <p>You are successfully registered as a Students</p>
                  </div>
                </>
              ) : (
                ""
              )}

              <div class="form-group">
                <label class="lable-name">
                  <b>Student Profile:</b>
                </label>

                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  onChange={(e) => handleChange(e, "profile")}
                />
              </div>
              <div class="form-group">
                <label class="lable-name">
                  <b>Student Name:</b>
                </label>
                <input
                  type="text"
                  class="form-control animate-focus"
                  id="name"
                  value={studentname}
                  placeholder="Enter your name"
                  autocomplete="off"
                  onChange={(e) => handleChange(e, "studentname")}
                  required
                />
              </div>
              <div class="form-group">
                <label class="lable-name">
                  <b>Email:</b>
                </label>
                <input
                  type="email"
                  class="form-control animate-focus"
                  id="email"
                  value={studentemail}
                  placeholder="Enter Your Email"
                  autocomplete="off"
                  onChange={(e) => handleChange(e, "studentemail")}
                  required
                />
              </div>
              <div class="form-group">
                <label class="lable-name">
                  <b>DOB:</b>
                </label>
                <input
                  type="date"
                  class="form-control animate-focus"
                  id="dob"
                  value={studentdob}
                  placeholder="Enter Your Email"
                  autocomplete="off"
                  onChange={(e) => handleChange(e, "studentdob")}
                  required
                />
              </div>
              <div class="form-group">
                <label class="lable-name">
                  <b>Blood Group:</b>
                </label>
                <select
                  class="form-select form-control animate-focus"
                  aria-label="Default select example"
                  onChange={(e) => handleChange(e, "bloodgroup")}
                >
                  <option selected>Open this select menu</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
              <div class="form-group">
                <label class="lable-name">
                  <b>Father Name:</b>
                </label>
                <input
                  type="text"
                  class="form-control animate-focus"
                  id="fathername"
                  value={fathername}
                  placeholder="Enter  Fathername"
                  autocomplete="off"
                  onChange={(e) => handleChange(e, "fathername")}
                  required
                />
              </div>
              <div class="form-group">
                <label class="lable-name">
                  <b>Mother Name:</b>
                </label>
                <input
                  type="text"
                  class="form-control animate-focus"
                  id="mothername"
                  value={mothername}
                  placeholder="Enter  Mothername"
                  autocomplete="off"
                  onChange={(e) => handleChange(e, "mothername")}
                  required
                />
              </div>
              <div class="form-group">
                <label class="lable-name">
                  <b>Address:</b>
                </label>
                <textarea
                  class="form-control"
                  rows="5"
                  id="address"
                  value={address}
                  onChange={(e) => handleChange(e, "address")}
                >
                  {address}
                </textarea>
              </div>

              <div class="form-group">
                <label class="lable-name">
                  <b>Course Name:</b>
                </label>
                <select
                  class="form-select form-control animate-focus"
                  aria-label="Default select example"
                  value={course}
                  onChange={(e) => handleChange(e, "coursename")}
                >

                <option disabled selected hidden> Select Course </option>

                  {coursecollection.map((user,index)=>(
                   <option value ={JSON.stringify({"name":user.CourseName,"staff":user.StaffName})}>{user.CourseName}</option>
                      )
                    )}

                 
                </select>
              </div>

     <div class="form-group">
                <label class="lable-name">
                  <b>Staff Name:</b>
                </label>
                <select
                  class="form-select form-control animate-focus"
                  aria-label="Default select example"
                  onChange={(e) => handleChange(e, "bloodgroup")}
                >
                  <option disabled selected hidden> Select Staff </option>


                  {staff.length !=0 ?(
                     <>
                    {staff.map((user,index)=>(
                   <option value={user}>{user}</option>
                      )
                    )}
                    </>
                    ):(
              
    <option disabled selected hidden> First select course after staff open  </option>
                    )}
                  
             
                </select>
              </div>






              <div>
                <button type="submit" class="convertbtn">
                  Submit
                </button>
              </div>
            </form>


          </div>
        </div>
      </div>
 
     
      </div>
 

 
  );
}

export default (Students);
