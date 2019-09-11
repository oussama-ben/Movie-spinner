import React from 'react'
import Rating from './Rating'

const MovieCard = ({el}) => {
  
    return (
        <div className="movie-card">
            <div className="movie-rating"><Rating count={el.rating} /></div>
            <div
                className="movie-image"
                style={{
                backgroundImage:
                    `url('${el.image}')`
                }}
            />
            <div className="movie-description">{el.title} - {el.year}</div>
            </div>
    )
}

export default MovieCard