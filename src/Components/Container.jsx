import React, { useState, useEffect } from 'react'
import Cards from './Cards';
import Header from './Header'
import Card from './Card';

// Code for Search Refactor
const key = 'd8973918';
const searchMovies = async (title, callback) => {
  const animeUrl = `http://www.omdbapi.com/?apikey=${key}&s=${title}`;
  const response = await fetch(animeUrl);
  const data = await response.json();
  callback(data.Search)
  console.log(data.Search)
}

export default function Container() {
  // added lines
  //Header State
  const [searchTitle, setSearchTitle] = useState('');
  //Cards States
  const [movies, setMovies] = useState([]);
  // Use Effect hook to trigger fetch API
  useEffect(() => {
    searchMovies('lord', setMovies)
    console.log(movies.length);
  }, [])

  return (
    <div>
      <Header
        handleChange={(e) => setSearchTitle(e.target.value)}
        searchTitle={searchTitle}
        handleClick={() => searchMovies(searchTitle, setMovies)}
      />
      <Cards>
        {
          movies.length>0?(
            movies.map(movie=>(
              <Card movie={movie}/>
            ))
          ):<h3>Loading Image</h3>
        }
      </Cards>
    </div>
  )
}
