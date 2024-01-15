"use client";
import { useState } from "react";
import { headerSearch } from "../context";
import SubmitButton from "./SubmitButton";

function Headerinput() {
  const [searchCountryValue, setSearchCountry] = useState("");
  return (
    <>
      <headerSearch.Provider value={{ searchCountryValue, setSearchCountry }}>
        <input
          type="text"
          value={searchCountryValue}
          onChange={(e) => setSearchCountry(e.target.value)}
          className="header-input"
          placeholder="search for country"
        />
        <SubmitButton />
      </headerSearch.Provider>
    </>
  );
}

export default Headerinput;
