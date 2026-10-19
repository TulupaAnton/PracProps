import { useState } from "react";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";

export function TaskManager() {
  const [tasks, setTasks] = useState([]);

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
  return (
    <div>
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
      <TaskForm onAdd={addTask} />
    </div>
  );
}
