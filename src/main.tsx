import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Signup from "./forms/Signup.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Signup />
  </StrictMode>
);
