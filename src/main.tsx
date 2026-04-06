import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Login from "./forms/login.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Login />
  </StrictMode>
);
