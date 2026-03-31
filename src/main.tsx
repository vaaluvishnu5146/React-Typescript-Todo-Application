import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.tsx";
import "./style.css";
import Orders from "./pages/Orders.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Orders message="" />
  </StrictMode>
);
