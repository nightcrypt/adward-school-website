import React from "react";
import "./Teacher.css";
import "./Website.css";
import Imaget1 from "../Assets/Imaget1.jpg";
import Imaget2 from "../Assets/Imaget2.jpg";
import Imaget3 from "../Assets/Imaget3.jpg";
import Imaget4 from "../Assets/Imaget4.jpg";
import Image9Right from "../Assets/Image9Right.jpg";

export default function Teacher() {
  return (
    <div className="Teacher">
      <div className="About-container">
        <h2 className="Teacher-Heading"> Our Teachers</h2>
        <p className="Teacher-Text"> Ipsum available, but the majority h </p>
        <div className="Teacher-img">
          <div className="teacher-card">
            <div className="card">
              <img src={Imaget1} alt="Really Sorry"></img>
              <div className="card-body"> 
                <h5 className="card-title">Den Mark</h5>
              </div>
            </div>
            <div className="card">
              <img src={Imaget2} alt="Really Sorry"></img>
              <div className="card-body">
                <h5 className="card-title">Leena jorj</h5>
              </div>
            </div>
            <div className="card">
              <img src={Imaget3} alt="Really Sorry"></img>
              <div className="card-body">
                <h5 className="card-title">Magi Den</h5>
              </div>
            </div>
            <div className="card">
              <img src={Imaget4} alt="Really Sorry"></img>
              <div className="card-body">
                <h5 className="card-title">jonson mark</h5>
              </div>
             </div>
          </div>
        </div>
        <div className="about-bottom">
            <a className="button">
              <span>Read More</span>
              <img src={Image9Right} alt=" New Sorry" />
            </a>
          </div>
      </div>
    </div>
  );
}
