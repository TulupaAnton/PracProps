import { useState } from "react";

export function MovieManager() {
  const initialMovies = [
    { id: 1, title: "Interstellar", favorite: true },
    { id: 2, title: "Inception", favorite: false },
    { id: 3, title: "The Matrix", favorite: true },
  ];

  //   function de
  const [inputText, setInputText] = useState("");
  return (
    <div>
      {initialMovies.map((m) => (
        <p>{m.title}</p>
      ))}
    </div>
  );
}
