import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { applyTheme, getInitialTheme } from "./utils/theme";

// Apply the stored (or default dark) theme before first render to avoid a flash.
applyTheme(getInitialTheme());

const rootEl = document.getElementById("root");
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(<App />);
}