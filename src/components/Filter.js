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
            setFiltered(movies); // if the acitve category  is all, display all 
            return;
        }
        if (category === 'genre') {
            const filtered = movies.filter((movie) => movie.genre === activeCategory);
            console.log(filtered);
            setFiltered(filtered);
        }
        if (category === 'productionYear') {
            const filtered = movies.filter((movie) => movie.productionYear === activeCategory);
            console.log(filtered);
            setFiltered(filtered);
        }

    }, [activeCategory]);
    // everytime we  run this function, acrtiveCatgory changes 

    return (
        <div className="filter-container">
            <button key='all' className={activeCategory === "all" ? "active" : ""}
                onClick={(setActiveCategory('all'))}>All {category} </button>
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