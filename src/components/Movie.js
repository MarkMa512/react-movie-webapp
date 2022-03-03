import React from "react";
import Details from "./Details";
import { useState } from "react";
import "./Movie.css"
import parse from 'html-react-parser'

const IMG_PATH = "/movieIcons/";

function Movie({ name, productionYear, genre, synopsisShort, synopsis, image }) {
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
                    <h2>Overview</h2>
                    <p>{synopsisShort}</p>
                    <button className="details-botton" onClick={() => setDetailButtonStatus(true)}>Details</button>
                </div>
            </div >
            <Details trigger={detailButtonStatus} setTrigger={setDetailButtonStatus}>
                <h3>{name}</h3>
                <span>Production Year: {productionYear}</span>
                <br />
                <span>Genre: {genre}</span>
                <h3>Synopsis</h3>
                <span>{parse(synopsis)}</span> {/* the text has to be parsed for the html element to work properly*/}
            </Details>
        </>
    );
}

export default Movie; 