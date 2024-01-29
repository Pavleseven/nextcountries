import React from "react";
import Headerinput from "../components/Headerinput";
import "../styles/header.css";
import Headerselect from "../components/Headerselect";
import Link from "next/link";
import Navigation from "../components/Navigation";
import NavSlider from "../components/NavSlider";
function Header({ scrollToElement }) {
  return (
    <div className="header">
      <h1 className="text-5xl font-medium tracking-wide">
        Places in the World
      </h1>

      <Navigation scrollToElement={scrollToElement} />
    </div>
  );
}

export default Header;
