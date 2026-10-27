import { useState } from "react";

export function MovieManager() {
  const [movies, setMovies] = useState([]);
  const [inputText, setInputText] = useState("");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const visibleMovies = movies.filter((m) => {});
  function addMovie() {
    if (!inputText.trim()) {
      return;
    } else
      setMovies((prev) => [
        ...prev,
        {
          id: Math.max(0, ...prev.map((t) => t.id)) + 1,
          title: inputText.trim(),
          favorite: false,
        },
      ]);
    setInputText("");
  }

  function deleteMovie(id) {
    setMovies((prev) => prev.filter((m) => m.id !== id));
  }
  function addFavorite(id) {
    setMovies((prev) =>
      prev.map((f) => (f.id === id ? { ...f, favorite: !f.favorite } : f)),
    );
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
          {m.favorite === true ? <p>Like</p> : <p>Not Like</p>}
          <button onClick={() => deleteMovie(m.id)}>Delete</button>
          <button onClick={() => addFavorite(m.id)}>Like!</button>
        </div>
      ))}
    </div>
  );
}
