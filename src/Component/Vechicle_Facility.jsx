import React from "react";
import "./Vechicle_facility.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import busImage1 from "../images/bus.png";
import navigatebefore from "../images/navigate.svg";
import navigatenext from "../images/navigatenext.svg";

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
        <img src={busImage1} className="bus-image" alt="bus-image" />
      </div>
    </>
  );
}

export default VechicleFacility;
