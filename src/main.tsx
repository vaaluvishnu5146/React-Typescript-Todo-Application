import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./todo.css";
import { ThemeInit } from "../.flowbite-react/init";
import Counter from "./componentsv1/Counter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeInit />
    <Counter />
  </StrictMode>
);
