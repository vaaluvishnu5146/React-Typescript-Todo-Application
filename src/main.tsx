import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import ActionItems from "./pages/ActionItems.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ActionItems />
  </StrictMode>
);
