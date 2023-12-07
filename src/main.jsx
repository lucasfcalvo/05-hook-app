import React from "react";
import ReactDOM from "react-dom/client";
import { HooksApp } from "./HooksApp";
import { BrowserRouter } from "react-router-dom";
import { MainApp } from "./09-UseContext/MainApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <MainApp />

    {/* <HooksApp /> */}

    {/* </React.StrictMode> */}
  </BrowserRouter>
);
