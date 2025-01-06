import React from "react";
import "./Footer.css";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapLocation } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <div className="col-one">
        <div className="icon-text">
          <FaSquarePhoneFlip />
          <a href="tel:+19294173316">(929)-417-3316</a>
        </div>
        <div className="icon-text">
          <FaInstagramSquare />
          <a href="https://www.instagram.com/">aziza.asa.pelmeni</a>
        </div>
        <div className="icon-text">
          <FaFacebookSquare />
          <a href="https://www.facebook.com/">aispelmeni</a>
        </div>
        <div className="icon-text">
          <MdEmail />
          <a href="#">azizaa1809@gmail.com</a>
        </div>
        <div className="icon-text">
          <FaMapLocation />
          <a href="#">2115 65 th street, brooklyn NY 11204</a>
        </div>
      </div>

      <div className="col-two">
        <div className="icon-text">
          <img height="160px" src="../brooklyn.png" />
        </div>
      </div>

      <div className="col-three">
        <div className="icon-text">
          <a>
            "LOVE! Came across Brooklyn Dumpling Shop looking for late night
            bites in the city. This place didn’t disappoint... Really cool
            concept and all the dumplings are fresh. You can order your standard
            flavors or trying their funky ones such as Mac & Cheese or peanut
            butter and jelly. Staff was nice and there to help us order too.
            Check them out!"
          </a>
        </div>
      </div>
    </footer>
  );
}
