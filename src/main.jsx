import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/_globals.scss";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
