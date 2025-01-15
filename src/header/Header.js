import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router";

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="wrapper-x">
      <div className="icon-wrap">
        <a className="" href="#">
          <img
            className="imgLogo"
            src="../home/newlogoImg.png"
            width="150px"
            height="60px"
            alt=""
          />
          <img
            className="textLogo"
            src="../home/newlogoWord.png"
            width="400px"
            height="60px"
            alt=""
          />
        </a>{" "}
        <img
          onClick={() => setMenu(!menu)}
          className="toggleMenue"
          height="30px"
          src="https://img.icons8.com/?size=100&id=8113&format=png&color=ffffff"
        />
      </div>

      <ul className={`${menu ? "openMenu" : "closeMenu"}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/where-to-buy">Where to Buy</Link>
        </li>
      </ul>
    </nav>
  );
}
