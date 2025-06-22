import React from "react";
import ReactDOM from "react-dom";
import App from "./App";  // Ensure this imports from App.js
import "./index.css";  // Optional, if you have styles (but not necessary for now)

ReactDOM.render(
  <React.StrictMode>
    <App />  {/* The App component should be rendered here */}
  </React.StrictMode>,
  document.getElementById("root")  // Renders the app inside the <div id="root"></div> in index.html
);
