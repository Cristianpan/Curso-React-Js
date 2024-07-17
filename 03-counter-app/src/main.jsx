import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
import "./styles.css";
import { FirstApp } from "./FirstApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FirstApp title="Cristian" subtitle="Bienvenido a mi página" /> */}
    <CounterApp
      value={0}
    />
  </React.StrictMode>
);
