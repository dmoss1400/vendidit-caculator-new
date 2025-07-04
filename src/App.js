import React, { useState } from "react";

function App() {
  // State for input, result, selected platform, and selected category
  const [input, setInput] = useState("");  // Tracks the user input
  const [result, setResult] = useState("");  // Tracks the result of the calculation
  const [selectedPlatform, setSelectedPlatform] = useState("HiBid");  // Tracks the selected platform
  const [selectedCategory, setSelectedCategory] = useState("Metals");  // Tracks the selected product category

  // Platform data with buyer’s premium (you can add more details for each platform)
  const platformData = {
    HiBid: { name: "HiBid", buyerPremium: 12 },
    Vendidit: { name: "Vendidit", buyerPremium: 10 },
    Proxibid: { name: "Proxibid", buyerPremium: 15 },
    LiveAuctioneers: { name: "LiveAuctioneers", buyerPremium: 15 },
    Invaluable: { name: "Invaluable", buyerPremium: 18 },
    Bidsquare: { name: "Bidsquare", buyerPremium: 14 },
  };

  // Category data (each category can have a list of items, here we show simple categories)
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
          <button key={category} onClick={() => handleCategoryChange(category)} style={{ margin: "5px" }}>
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
        <p>Selected Platform: {platformData[selectedPlatform].name}
