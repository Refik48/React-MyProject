import React from "react";
import Clock1 from "./components/clock1/Clock1";
import Hello from "./components/hello/Hello";
import Jsx from "./components/jsx/Jsx";
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
      <Clock1 />
    </div>
  );
}

export default App;
