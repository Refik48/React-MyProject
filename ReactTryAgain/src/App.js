import Jsx from "./components/jsx/Jsx";
import ExternalStyle from "./components/style/externalStyle";
import InlineStyle from "./components/style/InlineStyle";
import InternalStyle from "./components/style/InternalStyle";

function App() {
  return (
    <div className="App">
      Merhaba Dunya
      <Jsx />
      <InlineStyle />
      <InternalStyle/>
      <ExternalStyle/>
    </div>
  );
}

export default App;
