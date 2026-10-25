import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TaskManager } from "./TaskManager/taskManager";
// import { First } from "./1";
// import App from "./App.jsx";
// import { UserCard } from "./UserManage/UserCard.jsx";
import { UserManager } from "./UserManage/UserManage.jsx";
import { MovieManager } from "./favoritesMovie/MovieManager.jsx";
// import TodoApp from "./TodoApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <TaskManager /> */}
    {/* <First /> */}
    {/* <App /> */}
    {/* <UserManager /> */}
    {/* <TodoApp /> */}
    {/* <TaskManager /> */}
    <MovieManager />
  </StrictMode>,
);
