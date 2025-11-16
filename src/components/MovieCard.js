import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-48 h-72 pr-4">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} className='h-full w-full object-cover rounded'/>
    </div>
  )
}

export default MovieCard