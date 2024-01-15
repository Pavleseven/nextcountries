import React from "react";
import Headerinput from "../components/Headerinput";
import "../styles/header.css";
import Headerselect from "../components/Headerselect";
import Link from "next/link";
function Header() {
  return (
    <div className="header">
      <h1 className="text-5xl font-medium tracking-wide">Countries</h1>
      <div className="header-search">
        <Link
          href="/regions"
          className="text-3xl font-medium tracking-wide bg-gray-800	text-slate-400 p-2.5 rounded-md"
        >
          Regions
        </Link>
        <Headerinput />
      </div>
    </div>
  );
}

export default Header;
