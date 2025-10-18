import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const posterUrl = movie.poster_path || "https://via.placeholder.com/500x750";

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="movie-card">
        <img src={posterUrl} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
        <p>⭐ {movie.vote_average}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
