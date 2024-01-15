"use client";
import React, { useContext, useEffect, useState } from "react";

import Maincard from "../components/Maincard";
import "../styles/main.css";
import { appContext } from "../context";

function Main() {
  const { countries } = useContext(appContext);
  return (
    <div className="main-container">
      {countries?.map((country) => {
        return <Maincard country={country} key={country.name.common} />;
      })}
    </div>
  );
}

export default Main;
