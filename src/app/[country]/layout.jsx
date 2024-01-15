import React from "react";
import SCheader from "../components/SCheader";
import "../styles/singlecountry.css";
import SCfooter from "../components/SCfooter";
function layout({ children }) {
  return (
    <div className="single-country-layout">
      <SCheader />
      <div className="sc-main">{children}</div>
      <SCfooter />
    </div>
  );
}

export default layout;
