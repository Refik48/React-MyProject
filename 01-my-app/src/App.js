import React from "react";
import BSClassic from "./components/boostrap-classic/BSClassic";
import BSReact from "./components/boostrap-react/BSReact";
import Clock1 from "./components/clock1/Clock1";
import Clock2 from "./components/clock2/Clock2";
import Hello from "./components/hello/Hello";
import Image from "./components/image/Image";
import Jsx from "./components/jsx/Jsx";
import Profile from "./components/profile/Profile";
import Props from "./components/props/Props";
import Shop from "./components/shop/Shop";
import State from "./components/state/State";
import ExternalStyle from "./components/style/ExternalStyle";
import InlineStyle from "./components/style/InlineStyle";
import InternalStyle from "./components/style/InternalStyle";
import Test from "./components/test/Test";

function App() {
  const avatarUrl =
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
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
      {/* <Clock2 yaziRengi="yellow" zeminRengi="navy" />
      <Clock2 yaziRengi="red" zeminRengi="yellow" />
      <Clock2 yaziRengi="white" zeminRengi="black" />
      <Clock2 yaziRengi="rgba(81,207,226)" zeminRengi="#304031" /> */}
      {/* <Profile
        avatar={avatarUrl}
        name="Ali Gel"
        location="Turkiye, Istanbul"
        shot="4"
        followers="25"
        following="45"
      /> */}
      {/* <Image /> */}
      {/* <BSClassic /> */}
      {/* <BSReact/> */}
      {/* <Shop /> */}
      <State/>
    </div>
  );
}

export default App;
