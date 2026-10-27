export function MovieCard({ movie, onDelete, onLike }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.favorite ? "favorite" : "not Favorite"}</p>
      <button onClick={() => onDelete(movie.id)}>Delete</button>
      <button onClick={() => onLike(movie.id)}>Like</button>
    </div>
  );
}
