import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/fonts/fontawesome_6.2.1/css/all.min.css";
import "./styles/common.css";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);
