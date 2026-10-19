import { useState } from "react";

export function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  function handleAdd() {
    if (title.trim() === "") {
      return;
    }
    onAdd(title.trim(), priority);
    setPriority("Medium");
    setTitle("");
  }

  return (
    <div className="form">
      <input
        className="form__input"
        type="text"
        value={title}
        placeholder="What needs to be done?"
        aria-label="Task title"
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <select
        className="form__select"
        value={priority}
        aria-label="Priority"
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button className="btn-primary" onClick={handleAdd}>
        Add task
      </button>
    </div>
  );
}
