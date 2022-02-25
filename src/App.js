import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

const MOVIE_API = "https://sometimes-maybe-flaky-api.gdshive.io"; // API key should not be stored as plain text here. 


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    fetch(MOVIE_API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, [])

  return <div className="movie-container">
    {movies.length > 0 &&
      movies.map((movie) => <Movie key={movie.name} {...movie} />)}
  </div>
}

export default App; 