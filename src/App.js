import React, { useState } from "react";

function App() {
  // State for calculation input, result, selected platform, and selected category
  const [input, setInput] = useState("");  // Tracks the user input
  const [result, setResult] = useState("");  // Tracks the result of the calculation
  const [selectedPlatform, setSelectedPlatform] = useState("HiBid");  // Tracks the selected platform
  const [selectedCategory, setSelectedCategory] = useState("Metals");  // Tracks the selected product category

  // Platform data with buyer’s premium (Example for simplicity)
  const platformData = {
    HiBid: { name: "HiBid", buyerPremium: 12 },
    Vendidit: { name: "Vendidit", buyerPremium: 10 },
    Proxibid: { name: "Proxibid", buyerPremium: 15 },
    LiveAuctioneers: { name: "LiveAuctioneers", buyerPremium: 15 },
    Invaluable: { name: "Invaluable", buyerPremium: 18 },
    Bidsquare: { name: "Bidsquare", buyerPremium: 14 },
  };

  // Category data (can be extended with specific product data for each category)
  const categoryData = {
    Metals: ["Gold", "Silver", "Platinum"],
    Autos: ["Cars", "Motorcycles", "Trucks"],
    Tools: ["Hand Tools", "Power Tools", "Machinery"],
  };

  // Handles clicking numbers or operators
  const handleClick = (value) => {
    setInput(input + value);  // Adds value (number or operator) to the input
  };

  // Calculates the result when "Calculate" is pressed
  const handleCalculate = () => {
    try {
      setResult(eval(input));  // Evaluates the input as a mathematical expression
    } catch (error) {
      setResult("Error");  // If there's an error, show "Error"
    }
  };

  // Clears the input and result when "Clear" is pressed
  const handleClear = () => {
    setInput("");  // Clears the input
    setResult("");  // Clears the result
  };

  // Handles the platform change (HiBid, Vendidit, etc.)
  const handlePlatformChange = (platform) => {
    setSelectedPlatform(platform);
  };

  // Handles the category change (Metals, Autos, Tools, etc.)
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Vendidit Calculator</h1>

      {/* Category Toggle */}
      <div>
        {Object.keys(categoryData).map((category) => (
          <button key={category} onClick={() => handleCategoryChange(category)}>
            {category}
          </button>
        ))}
      </div>

      {/* Display selected category */}
      <div>
        <p>Selected Category: {selectedCategory}</p>
        <p>Items in Category: {categoryData[selectedCategory].join(", ")}</p>
      </div>

      {/* Platform Toggle */}
      <div>
        {Object.keys(platformData).map((platform) => (
          <button
            key={platform}
            onClick={() => handlePlatformChange(platform)}
            style={{
              backgroundColor: selectedPlatform === platform ? "lightblue" : "white",
              padding: "5px 10px",
              margin: "5px",
            }}
          >
            {platformData[platform].name}
          </button>
        ))}
      </div>

      {/* Display selected platform and its details */}
      <div>
        <p>Selected Platform: {platformData[selectedPlatform].name}</p>
        <p>Buyer's Premium: {platformData[selectedPlatform].buyerPremium}%</p>
      </div>

      {/* Calculator Input Field */}
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}  // Update input state as user types
          placeholder="Enter calculation"
          style={{ width: "100%", padding: "10px", fontSize: "18px", marginBottom: "10px" }}
        />
        <button onClick={handleClear} style={{ margin: "5px" }}>Clear</button>
        <button onClick={handleCalculate} style={{ margin: "5px" }}>Calculate</button>
      </div>

      {/* Display the calculation result */}
      <div>
        <p>Result: {result}</p>
      </div>

      {/* Calculator Buttons */}
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

      {/* Display Platform Comparison Boxes (if needed) */}
      <div style={{ marginTop: "20px" }}>
        <h2>Platform Comparison</h2>
        {Object.keys(platformData).map((platform) => (
          <div
            key={platform}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: selectedPlatform === platform ? "lightgreen" : "lightgray",
            }}
          >
            <h3>{platformData[platform].name}</h3>
            <p>Buyer's Premium: {platformData[platform].buyerPremium}%</p>
            {/* You can add more details about each platform here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
