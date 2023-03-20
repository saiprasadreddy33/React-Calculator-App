import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function clear() {
    setResult("");
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <div className="calculator">
      <div className="result">
        <p>{result}</p>
      </div>
      <div className="buttons">
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="+" onClick={handleClick}>
          +
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="-" onClick={handleClick}>
          -
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="*" onClick={handleClick}>
          *
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="C" onClick={clear}>
          C
        </button>
        <button name="/" onClick={handleClick}>
          /
        </button>
        <button name="CE" onClick={backspace}>
          CE
        </button>
        <button name="=" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
