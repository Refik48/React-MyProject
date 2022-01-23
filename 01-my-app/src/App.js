import React from "react";
import Hello from "./components/hello/Hello";
import Jsx from "./components/jsx/Jsx";
import InlineStyle from "./components/style/InlineStyle";
import InternalStyle from "./components/style/InternalStyle";
import Test from "./components/test/Test";

function App() {
  return (
    <div>
      Merhaba Dunya (App)
      <Hello />
      <Test />
      <Jsx />
      <InlineStyle />
      <InternalStyle />
    </div>
  );
}

export default App;
