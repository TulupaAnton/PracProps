import { useState, useEffect } from "react";

export function TitleChange() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.trim().length === 0) {
      document.title = "MoviePage";
      return;
    }
    document.title = `Search: ${query}`;
  }, [query]);

  return (
    <div>
      <h2>Поиск фильмов</h2>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Название фильма"
      />
    </div>
  );
}
