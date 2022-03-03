// [2003, 2006, 2010, 2013, 2015, 2016, 2018]
import React, { useEffect } from 'react';

function FilterYear({ movies, setFiltered, activeYear, setActiveYear }) {
    console.log(movies);
    useEffect(
        () => {  // modify the state here
            if (activeYear === 'all') {
                setFiltered(movies);
                return;
            }
            const filtered = movies.filter(
                (movie) => movie.productionYear.toString().includes(activeYear)
            );
            setFiltered(filtered);
        }, [activeYear]);
    return (
        <div className="filter-container">
            <button className={activeYear === "all" ? "active" : ""} onClick={() => setActiveYear('all')} >All Years</button>
            <button className={activeYear === "2003" ? "active" : ""} onClick={() => setActiveYear('2003')} >2003</button>
            <button className={activeYear === "2006" ? "active" : ""} onClick={() => setActiveYear('2006')} >2006</button>
            <button className={activeYear === "2010" ? "active" : ""} onClick={() => setActiveYear('2010')} >2010</button>
            <button className={activeYear === "2013" ? "active" : ""} onClick={() => setActiveYear('2013')} >2013</button>
            <button className={activeYear === "2015" ? "active" : ""} onClick={() => setActiveYear('2015')} >2015</button>
            <button className={activeYear === "2016" ? "active" : ""} onClick={() => setActiveYear('2016')} >2016</button>
            <button className={activeYear === "2018" ? "active" : ""} onClick={() => setActiveYear('2018')} >2018</button>
        </div >
    );
}

export default FilterYear; 