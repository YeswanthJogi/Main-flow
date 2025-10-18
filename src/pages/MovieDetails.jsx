import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../api.js";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      const data = await getMovieDetails(Number(id));
      setMovie(data);
    };
    loadMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details container">
      <img src={movie.poster_path} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>{movie.release_date}</p>
      <p>⭐ {movie.vote_average}</p>
      <p>{movie.overview}</p>
      <p className="genres">Genres: {movie.genres.join(", ")}</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}

export default MovieDetails;
