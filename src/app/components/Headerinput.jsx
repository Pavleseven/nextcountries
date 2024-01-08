"use client";
import { useState } from "react";
import { headerSearch } from "../context";
function Headerinput() {
  const [searchCountry, setSearchCountry] = useState("");
  return (
    <>
      <headerSearch.Provider value={{ searchCountry, setSearchCountry }}>
        <input
          type="text"
          value={searchCountry}
          onChange={(e) => setSearchCountry(e.target.value)}
        />
      </headerSearch.Provider>
    </>
  );
}

export default Headerinput;
