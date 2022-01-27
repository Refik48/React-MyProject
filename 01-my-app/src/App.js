import React from "react";
import Clock1 from "./components/clock1/Clock1";
import Clock2 from "./components/clock2/Clock2";
import Hello from "./components/hello/Hello";
import Jsx from "./components/jsx/Jsx";
import Props from "./components/props/Props";
import ExternalStyle from "./components/style/ExternalStyle";
import InlineStyle from "./components/style/InlineStyle";
import InternalStyle from "./components/style/InternalStyle";
import Test from "./components/test/Test";

function App() {
  return (
    <div>
      {/* Merhaba Dunya (App)
      <Hello />
      <Test />
      <Jsx />
      <InlineStyle />
      <InternalStyle />
      <ExternalStyle /> */}
      {/* <Clock1 /> */}
      {/* <Props ad="Refik" soyad="Gulak" />
      <Props ad="Faik" soyad="Gulak" />
      <Props ad="Sefik" soyad="Gulak" />
      <Props ad="Azra" soyad="Gulak" />
      <Props ad="Selma" soyad="Gulak" /> */}
      <Clock2 yaziRengi="yellow" zeminRengi="navy" />
      <Clock2 yaziRengi="red" zeminRengi="yellow" />
      <Clock2 yaziRengi="white" zeminRengi="black" />
      <Clock2 yaziRengi="rgba(81,207,226)" zeminRengi="#304031" />
    </div>
  );
}

export default App;
