import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { First } from "./1";
// import App from "./App.jsx";
// import TodoApp from "./TodoApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <First />
    {/* <App /> */}
    {/* <TodoApp /> */}
  </StrictMode>,
);
