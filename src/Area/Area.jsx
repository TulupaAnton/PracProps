import { useState, useEffect } from "react";

export function Area() {
  const [note, setNote] = useState(() => {
    const saved = localStorage.getItem("note");
    if (saved) {
      return saved;
    }
    return "";
  });

  useEffect(() => {
    localStorage.setItem("note", note);
  }, [note]);

  return (
    <div>
      <h2>My Notes</h2>

      <textarea value={note} onChange={(e) => setNote(e.target.value)} />

      <button onClick={() => setNote("")}>Clear</button>
    </div>
  );
}
