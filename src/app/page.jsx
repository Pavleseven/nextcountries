"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "./ui/Header";
import Main from "./ui/Main";
import { getCountries } from "./helper";
import { ApplicationProvider } from "./context";
import NavSlider from "./components/NavSlider";
import About from "./components/About";
import Testimonials from "./components/Testimonials";

function App() {
  const [countries, setCountries] = useState([]);
  const divRef = useRef();

  const scrollToElement = () => {
    const { current } = divRef;
    if (current !== null) {
      current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    getCountries(setCountries);
  }, []);
  return (
    <ApplicationProvider value={{ countries, setCountries }}>
      <div>
        <Header scrollToElement={scrollToElement} />
        <NavSlider />
        <About divRef={divRef} />
        <Testimonials />
      </div>
    </ApplicationProvider>
  );
}

export default App;
