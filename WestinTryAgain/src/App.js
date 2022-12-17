import React from "react";
import Preloader from "./components/Preloader.js";
import Header from "./components/Header";
import Banner from "./components/Banner.js";
import About from "./components/About.js";
import Services from "./components/Services.js";

const App = () => {
  return (
    <div>
      <Preloader />
      <Header />
      <Banner />
      <About />
      <Services />
    </div>
  );
};

export default App;
