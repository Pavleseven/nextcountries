import React from "react";
import TestimonialCard from "./TestimonialCard";
import "../styles/testimonials.css";

function Testimonials() {
  return (
    <div className="testimonials bg-emerald-800">
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </div>
  );
}

export default Testimonials;
