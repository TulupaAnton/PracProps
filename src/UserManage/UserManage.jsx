import { useState } from "react";
import { UserCard } from "./UserCard";

export function UserManager() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alex", active: true, likes: 0 },
    { id: 2, name: "Max", active: false, likes: 0 },
    { id: 3, name: "Anna", active: true, likes: 0 },
  ]);

  function DeleteUser(id) {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  }
  function ToggleStatus(id) {
    setUsers((prev) =>
      prev.map((u) => {
        return u.id === id ? { ...u, active: !u.active } : u;
      }),
    );
  }
  const UserTotal = users.length;

  function addLike(id) {
    setUsers((prev) =>
      prev.map((u) => {
        return u.id === id ? { ...u, likes: u.likes + 1 } : u;
      }),
    );
  }
  function renameUser(id, newName) {
    setUsers((prev) =>
      prev.map((u) => {
        return u.id === id ? { ...u, name: newName } : u;
      }),
    );
  }

  return (
    <div>
      {users.map((u) => (
        <UserCard
          key={u.id}
          user={u}
          onToggle={() => ToggleStatus(u.id)}
          onDelete={() => DeleteUser(u.id)}
          onLike={() => addLike(u.id)}
          onRename={(newName) => renameUser(u.id, newName)}
        />
      ))}
      <p>{UserTotal}</p>
    </div>
  );
}
