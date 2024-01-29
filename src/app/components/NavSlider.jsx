"use client";
import Image from "next/image";
import React, { useState } from "react";
import SliderButtons from "./SliderButtons";

function NavSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <>
      <div className="nav-container">
        <Image
          src="/images/egypt.jpg"
          alt="image of egypt"
          width={4000}
          height={2000}
          style={{ transform: `translateX(${100 * (0 - currentSlide)}%)` }}
          className="drop-shadow-lg brightness-100 transition-all duration-700"
        />
        <Image
          src="/images/brazil-amazon2.jpg"
          alt="image of egypt"
          width={4000}
          height={2000}
          style={{ transform: `translateX(${100 * (1 - currentSlide)}%)` }}
          className="transition-all duration-700"
        />
        <Image
          src="/images/paris.jpg"
          alt="image of egypt"
          width={4000}
          height={2000}
          style={{ transform: `translateX(${100 * (2 - currentSlide)}%)` }}
          className="transition-all duration-700"
        />
        <Image
          src="/images/sanfrancisco.jpg"
          alt="image of egypt"
          width={4000}
          height={2000}
          style={{ transform: `translateX(${100 * (3 - currentSlide)}%)` }}
          className="transition-all duration-700 "
        />
        <Image
          src="/images/seoul.jpg"
          alt="image of egypt"
          width={4000}
          height={2000}
          style={{ transform: `translateX(${100 * (4 - currentSlide)}%)` }}
          className="transition-all duration-700"
        />
        <Image
          src="/images/sydney3.jpg"
          alt="image of egypt"
          width={4000}
          height={2000}
          style={{ transform: `translateX(${100 * (5 - currentSlide)}%)` }}
          className="transition-all duration-700"
        />
      </div>
      <SliderButtons
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </>
  );
}

export default NavSlider;
