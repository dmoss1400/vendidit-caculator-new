import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");  // Tracks the user input
  const [result, setResult] = useState("");  // Tracks the result of the calculation

  const handleClick = (value) => {
    setInput(input + value);  // Adds value (number or operator) to the input
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));  // Evaluates the input as a mathematical expression
    } catch (error) {
      setResult("Error");  // If there's an error, show "Error"
    }
  };

  const handleClear = () => {
    setInput("");  // Clears the input field
    setResult("");  // Clears the result
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px", maxWidth: "300px", margin: "auto" }}>
      <h1>Vendidit Calculator</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}  // Updates input state as user types
          placeholder="Enter calculation"
          style={{ width: "100%", padding: "10px", fontSize: "18px", marginBottom: "10px" }}
        />
        <button onClick={handleClear} style={{ margin: "5px" }}>Clear</button>
        <button onClick={handleCalculate} style={{ margin: "5px" }}>Calculate</button>
      </div>

      <div>
        <p>Result: {result}</p>
      </div>

      <div>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
        
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
}

export default App;
