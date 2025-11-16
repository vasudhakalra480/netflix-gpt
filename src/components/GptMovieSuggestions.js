import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const gpt = useSelector((state) => state.gpt);
  const { movieNames, movieResults } = gpt;
  //or in single line const {movieNames, movieResults} = useSelector((state) => state.gpt);
  if(!movieNames) return null; //can show shimmer ui
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-80'>
        {/*we can resuse MovieList component here too*/}
        {movieNames.map((movieName, index) => {
            return (
                <MovieList key={movieName} title = {movieName} movies = {movieResults[index]}/>
            )
        })}
        <div>
            
        </div>
    </div>
  )
}

export default GptMovieSuggestions