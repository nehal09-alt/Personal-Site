import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
import "./styles/animations.css";

if (import.meta.env.DEV) {
  const originalWarn = console.warn;

  console.warn = (...args) => {
    const [firstArg] = args;
    const message = typeof firstArg === "string" ? firstArg : "";

    if (message.includes("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")) {
      return;
    }

    originalWarn(...args);
  };
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
