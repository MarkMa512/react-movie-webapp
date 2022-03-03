// I attempted in trying to imprve the re-usability of the code
// 
/**
 * Cannot update a component (`App`) while rendering a different component (`Filter`).
 */

import React from 'react';
import { useEffect } from 'react';

function Filter({ dataArray, category, setActiveCategory, activeCategory, setFiltered, movies }) {
    console.log(movies);
    console.log(activeCategory)
    setFiltered(movies);
    useEffect(() => {
        if (activeCategory === 'all') {
            setFiltered(movies); // if the acitve category  is all, display all types 
            return;
        }
        if (category === 'genre') {
            // if the active category is genre, display movies of active genre
            const filtered = movies.filter((movie) => movie.genre === activeCategory);
            console.log(filtered);
            setFiltered(filtered);
        }
        if (category === 'productionYear') {
            // of the active  category is year, display moviesof that year 
            const filtered = movies.filter((movie) => movie.productionYear === activeCategory);
            console.log(filtered);
            setFiltered(filtered);
        }

    }, [activeCategory]);
    // everytime run this function, acrtiveCatgory changes 

    return (
        <div className="filter-container">
            <button key='all' className={activeCategory === "all" ? "active" : ""}
                onClick={(setActiveCategory('all'))}>All {category} </button>
            {/* Dynamically generate the buttons from the dataArray (uniq_genre, uniq_year) passed in*/}
            {dataArray.map(item => (
                <button key={item} className={activeCategory === { item } ? "active" : ""}
                    onClick={(setActiveCategory(item))}>
                    {item}
                </button>
            ))}
        </div>
    )
}

export default Filter