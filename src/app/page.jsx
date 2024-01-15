"use client";

import React, { useState, useEffect } from "react";
import Header from "./ui/Header";
import Main from "./ui/Main";
import { getCountries } from "./helper";
import { ApplicationProvider } from "./context";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountries(setCountries);
  }, []);
  return (
    <ApplicationProvider value={{ countries, setCountries }}>
      <div>
        <Header />
        <Main />
      </div>
    </ApplicationProvider>
  );
}

export default App;
