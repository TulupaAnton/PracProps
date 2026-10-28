import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

export function MovieManager() {
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem("movies");
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);
  const [inputText, setInputText] = useState("");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const visibleMovies = movies.filter((m) => {
    if (showFavoritesOnly) {
      return m.favorite;
    }
    return true;
  });
  const favoriteCount = movies.filter((m) => m.favorite === true).length;
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

      {visibleMovies.map((m) => (
        <MovieCard
          key={m.id}
          movie={m}
          onDelete={deleteMovie}
          onLike={addFavorite}
        ></MovieCard>
      ))}
      <button onClick={() => setShowFavoritesOnly((prev) => !prev)}>
        Show Favorite
      </button>
      <p>Count:{favoriteCount}</p>
    </div>
  );
}
