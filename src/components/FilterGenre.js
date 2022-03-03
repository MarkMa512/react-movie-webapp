// ['Action', 'Adventure', 'Animation', 'Comedy', 'Fantasy']
import React, { useEffect } from 'react';

function FilterGenre({ movies, setFiltered, activeGenre, setActiveGenre }) {
  // removed parameter: uniq_genre
  // console.log(movies);
  useEffect(
    () => {  // modify the state here
      if (activeGenre === 'all') {
        setFiltered(movies);
        return;
      }
      const filtered = movies.filter(
        (movie) => movie.genre.includes(activeGenre)
      );
      setFiltered(filtered);
    }, [activeGenre]
  );
  return (
    <div className="filter-container">
      <button className={activeGenre === "all" ? "active" : ""} onClick={() => setActiveGenre('all')} >All Genre</button>
      {/* 
      Error: Cannot update a component (`App`) while rendering a different component (`FilterGenre`). To locate the bad setState() call inside `FilterGenre`,
      {
        uniq_genre.map(genre => (
          <button key={genre} className={activeGenre === { genre } ? "active" : ""}
            onClick={(setActiveGenre(genre))}>
            {genre}
          </button>

        ))} */}
      <button className={activeGenre === "Action" ? "active" : ""} onClick={() => setActiveGenre('Action')} >Action</button>
      <button className={activeGenre === "Adventure" ? "active" : ""} onClick={() => setActiveGenre('Adventure')} >Adventure</button>
      <button className={activeGenre === "Animation" ? "active" : ""} onClick={() => setActiveGenre('Animation')} >Animation</button>
      <button className={activeGenre === "Comedy" ? "active" : ""} onClick={() => setActiveGenre('Comedy')} >Comedy</button>
      <button className={activeGenre === "Fantasy" ? "active" : ""} onClick={() => setActiveGenre('Fantasy')} >Adventure</button>
    </div >
  );
}

export default FilterGenre; 