import React from 'react';
import { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import api from '../api/index.js'
function Staffs() {
  const navigate = useNavigate();

  const [staffname, setStaffname] = useState("");
  const [staffemail, setStaffemail] = useState("");
  const [staffnumber, setStaffnumber] = useState("");
  const [staffdob, setStaffdob] = useState("");
  const [successmsg, setSuccessmsg] = useState(false);
  const [phoneerror, setPhoneerror] = useState(false);
  const [arraylist, setArraylist] = useState([]);


useEffect(() => {

  api.StaffCollection().then (res => {
      alert(JSON.stringify(res))
    setArraylist(res.data.data)
     })

  },[]);



  const handleChange = (e, obj) => {
    if (obj === "staffname") {
      setStaffname(e.target.value);
    } else if (obj === "staffemail") {
      setStaffemail(e.target.value);
    } else if (obj === "phonenumber") {
      if (e.target.value.length < 10 || e.target.value.length > 10) {
        setPhoneerror(true);
        setStaffnumber(e.target.value);
      } else {
        setPhoneerror(false);
        setStaffnumber(e.target.value);
      }
    } else {
      setStaffdob(e.target.value);
    }
  };
  const HandleSubmit = (e) => {
    e.preventDefault();

    const record ={
        name:staffname,
        email: staffemail,
        mobile:staffnumber,
        dob:staffdob
    }

   api.Createstaff(record).then (res => {
        alert("update Successful")
        alert(JSON.stringify(res))
  
     })
   
  };
  const handlePageChange = () => {
    navigate("/");
  };
  return (
    <div class="Home">
      {console.log("nnnnn", arraylist)}
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="home-head">Staffs Registration</h2>
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
                  <b>Staff Name:</b>
                </label>
                <input
                  type="text"
                  class="form-control animate-focus"
                  id="name"
                  value={staffname}
                  placeholder="Enter your name"
                  autocomplete="off"
                  onChange={(e) => handleChange(e, "staffname")}
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
                  value={staffemail}
                  placeholder="Enter Your Email"
                  autocomplete="off"
                  onChange={(e) => handleChange(e, "staffemail")}
                  required
                />
              </div>
              <div class="form-group">
                <label class="lable-name">
                  <b>Phone Number:</b>
                </label>
                <input
                  type="text"
                  class="form-control animate-focus"
                  id="phonenumber"
                  value={staffnumber}
                  placeholder="Enter Your Phoneneumber"
                  autocomplete="off"
                  onChange={(e) => handleChange(e, "phonenumber")}
                  required
                />
                {phoneerror === true ? (
                  <>
                    <p style={{ color: "red" }}>*Phonenumber error</p>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div class="form-group">
                <label class="lable-name">
                  <b>DOB:</b>
                </label>
                <input
                  type="date"
                  class="form-control animate-focus"
                  id="dob"
                  value={staffdob}
                  placeholder="Enter Your Email"
                  autocomplete="off"
                  onChange={(e) => handleChange(e, "staffdob")}
                  required
                />
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
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">DOB</th>
                </tr>
              </thead>
              <tbody>
                {arraylist.map((list, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td>{list.Name}</td>
                        <td>{list.Email}</td>
                        <td>{list.Mobile}</td>
                        <td>{list.Dob}</td>
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

export default (Staffs);
