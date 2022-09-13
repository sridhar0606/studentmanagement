import React from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleChangePage = (obj) => {
    alert(JSON.stringify(obj));
    if (obj === 0) {
      navigate("/staffs");
    } else if (obj === 1) {
      navigate("/courses");
    } else {
      navigate("/students");
    }
  };

  return (
    <div className="Home">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="home-head">School Management</h2>
          </div>
        </div>
      </div>
      <div className="Home-card">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <a href="javascript:void(0)" onClick={() => handleChangePage(0)}>
                <div className="card card1">
                  <div className="card-body">
                    <h5 className="card-title">Staffs</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href="javascript:void(0)" onClick={() => handleChangePage(1)}>
                <div className="card card1">
                  <div className="card-body ">
                    <h5 className="card-title">Courses</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href="javascript:void(0)" onClick={() => handleChangePage(2)}>
                <div className="card card1">
                  <div className="card-body">
                    <h5 className="card-title">Students</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default (Home);
