import React from "react";
import Preloader from "./components/Preloader.js";
import Header from "./components/Header";
import Banner from "./components/Banner.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Portfolio from "./components/Portfolio.js";
import Testimonal from "./components/Testimonal.js";

const App = () => {
  return (
    <div>
      <Preloader />
      <Header />
      <Banner />
      <About />
      <Services />
      <Portfolio/>
      <Testimonal/>
    </div>
  );
};

export default App;
