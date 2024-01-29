"use client";
import Image from "next/image";
import React, { useState } from "react";

import "../styles/about.css";
import AccordionAbout from "./Accordion";
function About({ divRef }) {
  const [showText, setShowText] = useState(null);

  const handleClick = function (id) {
    if (showText !== id) {
      setShowText(id);
    } else {
      setShowText(null);
    }
  };

  return (
    <>
      <h3 className="about-heading text-emerald-700" ref={divRef}>
        About
      </h3>
      <div className="about" id="information">
        <Image
          src="/images/destinations.jpg"
          alt="destination-img"
          height={1000}
          width={1000}
        />
        <div className="about-content">
          <AccordionAbout
            setShowText={setShowText}
            showText={showText}
            id={1}
            cont="Asia"
            handleClick={handleClick}
          />
          <AccordionAbout
            setShowText={setShowText}
            showText={showText}
            id={2}
            cont="America"
            handleClick={handleClick}
          />
          <AccordionAbout
            setShowText={setShowText}
            showText={showText}
            id={3}
            cont="Europe"
            handleClick={handleClick}
          />
          <AccordionAbout
            setShowText={setShowText}
            showText={showText}
            id={4}
            cont="Austrlia"
            handleClick={handleClick}
          />
          <AccordionAbout
            setShowText={setShowText}
            showText={showText}
            id={5}
            cont="Africa"
            handleClick={handleClick}
          />
        </div>
      </div>
    </>
  );
}

export default About;
