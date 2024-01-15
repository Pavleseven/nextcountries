import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

function Maincard({ country }) {
  return (
    <div className="main-card">
      <Image src={country.flags.svg} width={400} height={400} alt="flag" />
      <div className="main-card-content">
        <p>
          <span>Name: </span>
          {country.name.common}
        </p>
        <p>
          <span>Region: </span>
          {country.region}
        </p>
        <p>
          <span>Capital: </span>
          {country.capital}
        </p>
        <Link href={`/${country.name.common}`} className="main-card-link">
          More Info
        </Link>
      </div>
    </div>
  );
}

export default Maincard;
