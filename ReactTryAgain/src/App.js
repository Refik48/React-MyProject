import React from "react";
// import Clock1 from "./components/clock1/Clock1";
import Props from "./components/props/Props";
// import Jsx from "./components/jsx/Jsx";
// import ExternalStyle from "./components/style/externalStyle";
// import InlineStyle from "./components/style/InlineStyle";
// import InternalStyle from "./components/style/InternalStyle";

function App() {
  return (
    <div className="App">
      {/* Merhaba Dunya
      <Jsx />
      <InlineStyle />
      <InternalStyle/>
      <ExternalStyle/> */}
      {/* <Clock1/> */}
      <Props name="Refik" surname="Gulak" />
      <Props name="ESRA" surname="Gulak" />
      <Props name="azra" surname="Gulak" />
      <Props name="Faik" surname="Gulak" />
    </div>
  );
}

export default App;
