import React from "react";
import Details from "./Details";
import { useState } from "react";
import "./Movie.css"

const IMG_PATH = "/movieIcons/";

function Movie({ name, productionYear, genre, synopsisShort, image }) {
    const [detailButtonStatus, setDetailButtonStatus] = useState(false);

    return (
        <>
            <div className="movie" onClick={() => setDetailButtonStatus(true)}>
                <img src={IMG_PATH + image} alt={name}></img>
                <div className="movie-info">
                    <h3>{name}</h3>
                    <span>{productionYear}</span>
                    <span>{genre}</span>
                </div>
                <div className="movie-synopsis">
                    <h2>Synopsis</h2>
                    <p>{synopsisShort}</p>
                    <button className="details-botton" onClick={() => setDetailButtonStatus(true)}>Details</button>
                </div>
            </div >
            <Details trigger={detailButtonStatus} setTrigger={setDetailButtonStatus}>
                <h3>{name}</h3>
                <span>{productionYear}</span>
                <span>{genre}</span>
                <h3>Synopsis</h3>
                <p>{synopsisShort}</p>
            </Details>
        </>
    );
}


// const Movie = ({name, productionYear, genre, synopsisShort, image}) => (
//     <div className="movie">
//         <img src={IMG_PATH + image} alt={name}></img>
//         <div className="movie-info">
//             <h3>{name}</h3>
//             <span>{productionYear}</span>
//             <span>{genre}</span>
//         </div>
//         <div className="movie-synopsis">
//             <h2>Synopsis</h2>
//             <p>{synopsisShort}</p>
//             <button className="open-details">Details</button>
//         </div>

//         <Details trigger={false}>
//         </Details>
//     </div >
// );

export default Movie; 