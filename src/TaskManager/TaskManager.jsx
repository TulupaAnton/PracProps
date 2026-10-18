import { useState } from "react";

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
  return (
    <div>
      {tasks.map((t) => (
        <div key={t.id}>
          <p>{t.text}</p>
          <p>{t.priority}</p>
        </div>
      ))}
    </div>
  );
}
