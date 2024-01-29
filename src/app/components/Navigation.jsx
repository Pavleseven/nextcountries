import Link from "next/link";
import React from "react";

function Navigation({ scrollToElement }) {
  return (
    <div className="header-nav text-rose-600">
      <Link
        href="/regions"
        className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
      >
        Continents
      </Link>
      <Link
        href="/search"
        className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
      >
        Search
      </Link>
      <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
        Testimonials
      </p>
      <p
        className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
        onClick={() => scrollToElement()}
      >
        Information
      </p>
      <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
        Socials
      </p>
    </div>
  );
}

export default Navigation;
