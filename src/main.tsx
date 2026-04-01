import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Todo from "./pages/Todo.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Todo />
  </StrictMode>
);
