import "./App.css";

import { Bar } from "./components/Bar.js";
import { First } from "./components/First.js";
import {Second} from "./components/Second.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bar />
      </header>
      <main>
        <First />
        <br></br>
        <br></br>
        <Second />
      </main>
    </div>
  );
}

export default App;
