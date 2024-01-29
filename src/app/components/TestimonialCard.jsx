import Image from "next/image";
import React from "react";

function TestimonialCard() {
  return (
    <div className="testimonial-card">
      <Image
        src="/images/quotesopen.png"
        height={100}
        width={100}
        alt="quote"
      />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ad
        ratione, unde quae nostrum sed, labore tempora architecto deleniti
        error, odit voluptatum dolor! Ut, consequuntur! Repellat minus fugit
        fugiat iusto nam, aut ipsum natus amet.
      </p>
      <Image
        src="/images/quotesclose.png"
        height={100}
        width={100}
        alt="quote"
      />
      <h2>testimonial placeholder name</h2>
    </div>
  );
}

export default TestimonialCard;
