import { useState } from "react";

export function MovieManager() {
  const [movies, setMovies] = useState([]);
  const [inputText, setInputText] = useState("");
  const

  function addMovie() {
    setMovies((prev) => [
      ...prev,
      {
        id: Math.max(0, ...prev.map((t) => t.id)) + 1,
        title: inputText,
        favorite: false,
      },
    ]);
  }

  function deleteMovie(id) {
    setMovies((prev) => prev.filter((m) => m.id !== id));
  }
  function addFavorite(id){
    setMovies(prev=>)
  }
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={() => addMovie()}>Add</button>
      {movies.map((m) => (
        <div key={m.id}>
          <p>{m.title}</p>
          <button onClick={() => deleteMovie(m.id)}>Delete</button>
          <button onClick={() => addFavorite(m.id)}>Like!</button>
        </div>
      ))}
    </div>
  );
}
