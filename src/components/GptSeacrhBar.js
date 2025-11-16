import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSeacrhBar = () => {
    const dispatch = useDispatch();
    const language = useSelector((state) => state.config.lang);
    const searchText = useRef(null);

    //search movie in tmdb database
    const searchMovieTmdb = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&page=1`, API_OPTIONS)
        const json = await data?.json()
        return json.results;
    }

    const handleGptSearchClick = async () => {
        const gptQuery = "Act as a movie recommendation system and suggest some movies based on the following query: " + searchText.current.value + ". only give me names of 5 movies, comma separated like the example given ahead. Example Result: Gadar, Sholay, Don, Golmal, Koi Mil Gaya";
        const gptResults = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: gptQuery }],
        });
        if (!gptResults?.choices) //TODO: show some error to user
            console.log(gptResults?.choices?.[0]?.message?.content);
        //Andaz Apna Apna, DDLJ, 3 Idiots, Munna Bhai MBBS, PK
        const gptMovies = gptResults?.choices?.[0]?.message?.content.split(','); //this will give array of movie names
        //["Andaz Apna Apna", "DDLJ", "3 Idiots", "Munna Bhai MBBS", "PK"]

        //For each movie i will search TMDB APi
        //search for each movie in tmdb api. It will be an array of promisses
        //[Promise, Promise, Promise, Promise, Promise] promise will take some time to get resolved
        const promiseArray = gptMovies?.map(() => {
            return searchMovieTmdb()
        })
        //now our program will wait till all promisses are resolved
        const tmdbMovieResults = await Promise.all(promiseArray);
        console.log(tmdbMovieResults);  
        // we got the results after few seconds in array 
        //for amar, akbar,anthony we got 3 results one hindi, malyalam, telugu
        //for padosan we got 4 results-padosan , professor ki padosan, nayee padosan, padosan 1968
        //tmdbMovieResults = [[{},{},{}], [{},{}], [{},{},{},{}], [{},{}], [{}]]// it has given me lot of movies
        //lets show all movies, below the search bar
        dispatch(addGptMovieResult({movieName: gptMovies, movieResults: tmdbMovieResults}));
        //it will be array of arrays
    }

    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12' onClick={(e) => e.preventDefault()}>
                <input type='text' placeholder={lang[language]['getSearchPlaceholder']} className='p-4 m-4 col-span-9' ref={searchText} />
                <button className='py-2 px-4 bg-red-700 rounded-lg text-white col-span-3 m-4' onClick={handleGptSearchClick}>{lang[language]['search']}</button>
            </form>
        </div>
    )
}

export default GptSeacrhBar