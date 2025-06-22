import React, { useState } from "react";

function App() {
  // State for input and result
  const [input, setInput] = useState("");  // Keeps track of the input
  const [result, setResult] = useState("");  // Shows the result of the calculation

  // Handles clicking numbers or operators
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Calculates the result when "Calculate" is pressed
  const handleCalculate = () => {
    try {
      setResult(eval(input));  // Evaluates the input as a mathematical expression
    } catch (error) {
      setResult("Error");  // If there's an error (e.g., invalid input), show "Error"
    }
  };

  // Clears the input and result when "Clear" is pressed
  const handleClear = () => {
    setInput("");  // Clears the input
    setResult("");  // Clears the result
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px", maxWidth: "300px", margin: "auto" }}>
      <h1>Vendidit Calculator</h1>
      
      {/* Input field for entering numbers and operators */}
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}  // Update input state as user types
          placeholder="Enter calculation"
          style={{ width: "100%", padding: "10px", fontSize: "18px", marginBottom: "10px" }}
        />
        
        {/* Buttons to clear and calculate */}
        <button onClick={handleClear} style={{ margin: "5px" }}>Clear</button>
        <button onClick={handleCalculate} style={{ margin: "5px" }}>Calculate</button>
      </div>

      {/* Display the result */}
      <div>
        <p>Result: {result}</p>
      </div>

      {/* Calculator buttons for digits and operators */}
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

