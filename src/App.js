import React, { useState } from "react";
import "./App.css";
import Calculator from "./Calculator";
import Logo from './Logo';


function App() {
  const [result, setResult] = useState("");

  const handleClick = (button) => {
    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else if (button === "CE") {
      backspace();
    } else {
      setResult(result + button);
    }
  };

  const calculate = () => {
    try {
      setResult((eval(result) || "") + "");
    } catch (e) {
      setResult("error");
    }
  };

  const reset = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <Calculator result={result} handleClick={handleClick} />
    </div>
  );
}

export default App;
