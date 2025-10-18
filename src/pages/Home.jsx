import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { fetchPopularMovies, searchMovies } from "../api.js";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchPopularMovies();
      setMovies(data);
      setLoading(false);
    };
    loadMovies();
  }, []);

  const handleSearch = async (query) => {
    setLoading(true);
    const results = await searchMovies(query);
    setMovies(results);
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Movie App</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : movies.length > 0 ? (
        <div className="grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}

export default Home;
