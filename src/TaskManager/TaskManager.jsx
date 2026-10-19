import { useState } from "react";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { TaskStats } from "./TaskStats";
import "./TaskManager.css";

export function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((t) => {
    if (filter === "all") {
      return true;
    }
    if (filter === "completed") {
      return t.completed;
    }
    if (filter === "active") {
      return !t.completed;
    }
    return false;
  });
  function addTask(title, priority) {
    setTasks((prev) => [
      ...prev,
      {
        id: Math.max(0, ...prev.map((t) => t.id)) + 1,
        text: title,
        priority: priority,
        completed: false,
      },
    ]);
  }
  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }
  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((t) => {
        return t.id === id ? { ...t, completed: !t.completed } : t;
      }),
    );
  }
  const filters = [
    ["all", "All"],
    ["active", "Active"],
    ["completed", "Completed"],
  ];

  return (
    <main className="app">
      <h1 className="app__title">Tasks</h1>
      <TaskForm onAdd={addTask} />
      <div className="filters">
        {filters.map(([value, label]) => (
          <button
            key={value}
            className={`filters__btn${filter === value ? " filters__btn--active" : ""}`}
            onClick={() => setFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
      />
      <TaskStats tasks={tasks} />
    </main>
  );
}
