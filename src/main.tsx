import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import TaskTracker from "./pages/TaskTracker.tsx";
import "./todo.css";
import { ThemeInit } from "../.flowbite-react/init";
import OtpScreen from "./componentsv1/OtpScreen";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeInit />
    <OtpScreen />
  </StrictMode>
);
