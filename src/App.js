import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
// import Filter from "./components/Filter";
import FilterGenre from "./components/FilterGenre";
import FilterYear from "./components/FilterYear";

const MOVIE_API = "https://sometimes-maybe-flaky-api.gdshive.io"; // API key should not be stored as plain text here. 

function App() {
  // initiate movie to be filled that stores all the movies 
  // allowing ease of manipulation by allowing easy access to the original ones 
  // this also reduces the number of fetch request
  const [movies, setMovies] = useState([]);

  // use another state for the filtering function 
  const [filtered, setFiltered] = useState([]);

  // initialize the states to for the filtering function 
  const [activeGenre, setActiveGenre] = useState('all');
  const [activeYear, setActiveYear] = useState('all');

  // initiate 2 arrays to dynamically generate buttons for the filter funtion 
  const genre = [];
  const year = [];

  // fecth the data over from the API; fetch it once only
  useEffect(() => {
    fetchMovies();
  }, []);

  // define the function of fecthing data from API
  const fetchMovies = async () => {
    fetch(MOVIE_API)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setMovies(data);
        setFiltered(data);
      })
  };

  // console.log(movies); 
  // console.log(filtered);

  // populate genre and year from movie 
  movies.length > 0 && movies.map((movie) => genre.push(movie.genre)) && movies.map((movie) => year.push(movie.productionYear))

  // remove the duplicates
  const uniq_year = [...new Set(year)];
  const uniq_genre = [...new Set(genre)];

  // sort the year and genre
  uniq_genre.sort();
  uniq_year.sort();

  // console.log(uniq_genre);
  // console.log(uniq_year);

  return <>
    <div>

      {/* attempt to generate the filter component dynamically while 
      modifying the App.js   */}
      {/* <Filter
        dataArray={uniq_genre}
        category={'genre'}
        movies={movies} setFiltered={setFiltered}
        activeCategory={activeGenre} setActiveCategory={setActiveGenre} />
      <Filter
        dataArray={uniq_year}
        category={'productionYear'}
        movies={movies} setFiltered={setFiltered}
        activeCategory={activeYear} setActiveCategory={setActiveYear} /> */}
    </div>

    <div className="filter">
      <FilterGenre uniq_genre={uniq_genre} movies={movies} setFiltered={setFiltered}
        activeGenre={activeGenre} setActiveGenre={setActiveGenre} />

      <FilterYear uniq_year={uniq_year} movies={movies} setFiltered={setFiltered}
        activeYear={activeYear} setActiveYear={setActiveYear} />
    </div>



    {/* pass in the movies to generate moview components */}
    <div className="movie-container">
      {filtered.length > 0 &&
        filtered.map((movie) => <Movie key={movie.name} {...movie} />)}
    </div>
  </>
}

export default App; 