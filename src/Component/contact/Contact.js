import React from "react";
import Navabr from "../navbar/Navbar";
import Footer from '../footer/Footer'
import './Contact.css';
const Contact = () => {
  return (
    <div>
      <Navabr />
      <div className="container-contact">
        <p>
          <b>Contact Us</b> <br />
          <span>
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          </span>
        </p>
        <div className="contact-details">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Contact Number" />
          <input type="text" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <a href="/" class="btn btn-1">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            Send
          </a>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Contact;
