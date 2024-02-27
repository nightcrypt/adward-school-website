import React from "react";
import "./Vechicle_facility.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import busImage1 from "../Assets/bus.png";
import navigatebefore from "../Assets/navigate.svg";
import navigatenext from "../Assets/navigatenext.svg";

function VechicleFacility() {
  return (
    <>
      <div>
        <div />
        <h1 className="vechicle-facility-heading">Vehicle Facility</h1>
      </div>
      <div>
        <p className="vechicle-facility-paragraph1">
          There are many variations of passages of Lorem Ipsum available, but the majority hThere are many variations of passages of Lorem Ipsum
        </p>
        <p className="vechicle-facility-paragraph2">
          available, but the majority h
        </p>
        <div className="icons">
          <img src={navigatebefore}className="left-icon" alt="Navigate-before"/>
       
          <img src={ navigatenext} className="right-icon" alt="Navigate-next"/>
        
        </div>
        <img src={busImage1} className="bus-image" alt="bus" />
      </div>
    </>
  );
}

export default VechicleFacility;
