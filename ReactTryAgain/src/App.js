import React from "react";
// import Clock2 from "./components/clock2/Clock2";
import Profile from "./components/profile/Profile";

// import Clock1 from "./components/clock1/Clock1";
// import Props from "./components/props/Props";
// import Jsx from "./components/jsx/Jsx";
// import ExternalStyle from "./components/style/externalStyle";
// import InlineStyle from "./components/style/InlineStyle";
// import InternalStyle from "./components/style/InternalStyle";

function App() {
  const avatarUrl =
    "https://images.unsplash.com/photo-1668210039927-82341df16e20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
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
      <Clock1/>
      <Clock2 yaziRengi="yellow" zeminRengi="navy" />
      <Clock2 yaziRengi="whitw" zeminRengi="black" />
      <Clock2 yaziRengi="yellow" zeminRengi="red" /> */}
      <div style={{display: "flex", justifyContent:"space-evenly"}}>
        <Profile
          avatar={avatarUrl}
          name="Ali Gel"
          location="Turkiye,Istanbul"
          shot="4"
          followers="25"
          following="45"
        />
        <Profile
          avatar="https://images.unsplash.com/photo-1601572420755-16a9f0677102?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          name="Mehmet Gel"
          location="Turkiye, Izmir"
          shot="43"
          followers="123"
          following="4545"
        />
      </div>
    </div>
  );
}

export default App;
