import { useState } from "react";
import { hamsterExchange } from "./images";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Test Bot</h1>

      <div className="card">
        <p>count is {count}</p>
      </div>

      <div className="card">
        <img
          src={hamsterExchange}
          onClick={() => setCount((count) => count + 1)}
          className="inlineImage"
        />
      </div>

      <p className="read-the-docs">
        Click on the hamster logos to increase the count
      </p>
    </>
  );
}

export default App;
