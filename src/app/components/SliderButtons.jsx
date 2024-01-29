"use client";
import React from "react";

import { fakeArray } from "../helper";
import Image from "next/image";
function SliderButtons({ currentSlide, setCurrentSlide }) {
  const handleNext = function () {
    if (currentSlide === fakeArray.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };
  //   setTimeout(() => {
  //     handleNext();
  //   }, 4000);
  const handlePrevious = function () {
    if (currentSlide === 0) {
      setCurrentSlide(fakeArray.length - 1);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };
  return (
    <div className="slider-wrapper">
      <button onClick={() => handlePrevious()}>
        <Image
          src="/images/previous.png"
          alt="prev-img"
          width={100}
          height={100}
        />
      </button>
      <button onClick={() => handleNext()}>
        <Image
          src="/images/next2.png"
          alt="prev-img"
          width={100}
          height={100}
        />
      </button>
    </div>
  );
}

export default SliderButtons;
