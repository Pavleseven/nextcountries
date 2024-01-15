import React from "react";
import { singleCountry } from "../helper";
import Link from "next/link";
import Image from "next/image";

async function CountryPage({ params }) {
  const country = await singleCountry(params.country);

  return (
    <>
      <Link href="/">
        <Image src="/images/backimg.png" alt="back" width={35} height={35} />
      </Link>
      <div className="single-country-container">
        <div className="single-country-img">
          <Image
            src={country[0].flags?.svg}
            alt="country-img"
            width={800}
            height={800}
          />
        </div>
        <div className="single-country-text">
          <h2>{country[0].name?.common}</h2>
          <ul>
            <li>
              <span>Population: </span>
              {country[0].population}
            </li>
            <li>
              <span>Region: </span>
              {country[0].region}
            </li>
            <li>
              <span>Sub Region: </span>
              {country[0]?.subregion}
            </li>
            <li>
              <span>Capital: </span>
              {country[0].capital}
            </li>
            <li>
              <span>Top Level Domain: </span>
              {country[0]?.tld[0]}
            </li>
            {/* <li>
              <span>Currencies:</span>
              {country[0]?.currencies[Object.keys(country[0].currencies)[0]]}
            </li> */}
            <li>
              <span>Languages: </span>
              {country[0]?.languages[Object.keys(country[0].languages)[0]]}
            </li>
          </ul>
          {country[0]?.borders ? (
            <ul className="border-ul">
              <span>Border Countries:</span>
              {country[0]?.borders?.map((border, i) => {
                return <li key={i}>{border}</li>;
              })}
            </ul>
          ) : (
            <span>No Border Countries</span>
          )}
        </div>
      </div>
    </>
  );
}

export default CountryPage;
