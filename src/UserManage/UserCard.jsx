import { useState } from "react";

export function UserCard({ user, onDelete, onToggle, onLike, onRename }) {
  const [newName, setNewName] = useState("");
  function handleRename() {
    if (newName.trim() === "") {
      setNewName("");
    } else {
      onRename(newName.trim());
      setNewName("");
    }
  }
  return (
    <div>
      <h3>{user.name}</h3>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={() => handleRename()}>Rename user</button>
      {user.active ? <p>Active</p> : <p>Inactive</p>}
      <p>{user.likes}</p>
      <button onClick={onLike}>Like!</button>
      <button onClick={onToggle}>Toggle</button>
      <button onClick={onDelete}>Del</button>
    </div>
  );
}
