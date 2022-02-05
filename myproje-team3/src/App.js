import Hello from "./components/hello/Hello";
import InlineStyle from "./components/style/InlineStyle";
import InternalStyle from "./components/style/InternalStyle";

function App() {
  return (
    <div className="App">
      {/* Merhaba Dunya
      <Hello /> */}
      <InlineStyle />
      <InternalStyle/>
    </div>
  );
}

export default App;
