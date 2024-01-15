"use client";
import React, { useContext } from "react";
import { appContext, headerSearch } from "../context";
import { searchCountry } from "../helper";

function SubmitButton() {
  const { countries, setCountries } = useContext(appContext);
  const { searchCountryValue } = useContext(headerSearch);
  const handleClick = function () {
    if (!searchCountryValue) return;
    searchCountry(setCountries, searchCountryValue);
  };
  return (
    <button className="submit" onClick={() => handleClick()}>
      Search
    </button>
  );
}

export default SubmitButton;
