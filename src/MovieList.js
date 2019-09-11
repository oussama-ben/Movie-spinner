import React from 'react'
import MovieCard from './MovieCard'
import Hoc from './Hoc';


const MovieList = ({x}) => {
  return(
     <div className="movie-list">
        {x.map(el => <MovieCard key={el.id} el={el} />)}
        
      </div>
)
          }

export default Hoc(MovieList);