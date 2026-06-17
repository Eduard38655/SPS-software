import { useState } from "react";
import AboutUS from "./components/AboutUs";
import OurValues from "./components/OurValues";
import OurValuesSction2 from "./components/OurValuesPart2";
import Products from "./components/Product";
function App() {
  return (
    <>
      <AboutUS />
      <OurValues />
      <OurValuesSction2 />
      <Products />
    </>
  );
}

export default App;
