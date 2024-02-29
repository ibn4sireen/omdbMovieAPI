import React from 'react'
import aot from '../imgs/aot.jpg'
import '../Stlyes/CardStyles.css'

const Card = ({movie}) => {
    return (
        <div className="movie_card">
            <div className="img_poster_div">
                <img src={movie.Poster} alt="" className="img_poster_img" />
            </div>
            <div className="img_poster_details">
                <h3 className="movie_title">Title: {movie.Title}</h3>
                <h5 className='movie_year'>Release: {movie.Year}</h5>
                <button>Information</button>
            </div>
        </div>

    )
}
export default Card
