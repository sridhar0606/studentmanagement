import React from 'react';
import { useState,useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import api from '../api/index.js'
import { Form } from 'react-bootstrap';


function Courses() {
  const navigate = useNavigate();


  const [course, setCourse] = useState("");
  const [staff, setStaff] = useState([]);

  const [successmsg, setSuccessmsg] = useState(false);
  const [arraylist, setArraylist] = useState([]);
 const [selectedstaff, setSelectedstaff] = useState([]);



 const getcource =()=>{
   api.CourseCollection().then (res => {
      alert(JSON.stringify(res))
    setArraylist(res.data.data)
     })
 }


useEffect(() => {

  api.StaffCollection().then (res => {
      alert(JSON.stringify(res))
    setStaff(res.data.data)
     })
   getcource();

  },[]);



  const handleChange = (e, obj) => {

   if(obj == "course"){
    setCourse(e.target.value);
   }else if(obj == "multi"){
   setSelectedstaff([].slice.call(e.target.selectedOptions).map(item => item.value))
    } 
  };


  const HandleSubmit = (e) => {
    e.preventDefault();
    const record ={
       coursname:course,
       staff:selectedstaff
      }

 api.Createcource(record).then (res => {
      
      if (res.staus == 200 ){

         alert("rr")
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
            <h2 class="home-head">Course Registration</h2>
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
                    <p>You are successfully registered as a staffs</p>
                  </div>
                </>
              ) : (
                ""
              )}
              <div class="form-group">
                <label class="lable-name">
                  <b>Course Name:</b>
                </label>
                <input
                  type="text"
                  class="form-control animate-focus"
                  id="name"
                  value={course}
                  placeholder="Enter course"
                  autocomplete="off"
                  onChange={(e) => handleChange(e, "course")}
                  required
                />
              </div>
              <div class="form-group">
                <label class="lable-name">
                  <b>Staff Name :</b>
                </label>

            
      <Form.Control as="select" multiple value={selectedstaff}
      onChange={(e) => handleChange(e,"multi")}>

        {staff.map((list, index) => {
                  return (
       <option value={list.Name}>{list.Name}</option>
                  )})}

        </Form.Control>

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
      <br />
      <div class="row">
        <div class="col-md-8" style={{ display: "block", margin: "0 auto" }}>
          <div class="table-responsive">
            <table class="table table-bordered" style={{ color: "#fff" }}>
              <thead>
                <tr>
                  <th scope="col">Course Name</th>
                  <th scope="col">Staff Name</th>
                </tr>
              </thead>
              <tbody>
                {arraylist.map((list, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td>{list.CourseName}</td>
                        <td>
                          {list.StaffName.map((list1, index1) => {
                            return <>{list1} , </>;
                          })}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default (Courses);
