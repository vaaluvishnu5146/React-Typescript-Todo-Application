import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeInit } from "../.flowbite-react/init";
import { BrowserRouter } from "react-router";
import App from "./App";
import "./todo.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeInit />
      <App />
    </BrowserRouter>
  </StrictMode>
);
