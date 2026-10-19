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
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={handleAdd}>Add!</button>
    </div>
  );
}
