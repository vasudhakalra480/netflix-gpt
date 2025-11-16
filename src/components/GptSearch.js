import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSeacrhBar from './GptSeacrhBar'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
    return (
        <>
            <div className='fixed -z-10'>
                <img
                    src={BG_URL}
                    alt="background"
                    className='w-screen h-screen object-cover'
                />
            </div>
            <div>
                <GptSeacrhBar />
                <GptMovieSuggestions />
            </div>
        </>
    )
}

export default GptSearch