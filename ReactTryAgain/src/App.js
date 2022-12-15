import React from "react";
import Clock2 from "./components/clock2/Clock2";

// import Clock1 from "./components/clock1/Clock1";
// import Props from "./components/props/Props";
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
      <ExternalStyle/>
      <Clock1/>
      <Props name="Refik" surname="Gulak" />
      <Props name="ESRA" surname="Gulak" />
      <Props name="azra" surname="Gulak" />
      <Props name="Faik" surname="Gulak" />
      <Clock1/> */}
      <Clock2 yaziRengi="yellow" zeminRengi="navy" />
      <Clock2 yaziRengi="whitw" zeminRengi="black" />
      <Clock2 yaziRengi="yellow" zeminRengi="red" />
    </div>
  );
}

export default App;
