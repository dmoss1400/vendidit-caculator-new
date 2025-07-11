import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Optional, if you have styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")  // This must match <div id="root"></div> in index.html
);
