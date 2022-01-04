import React, { useState, useEffect } from 'react'
import "./Banner.css"
import axios from './axios'
import requsets from "./Requests"

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const requset = await axios.get(requsets.fetchNetflixOriginals);
            setMovie(
                requset.data.results[
                    Math.floor(Math.random() * requset.data.results.length - 1)
                ]
            );
            return requset;
        }

        fetchData();
    }, [])

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string
    }

    return (
        <header
          className='banner'
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            // backgroundPosition: "center center",
        }}>
            <div className='banner_contents'>
                <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className='banner_fadeButtom' />
        </header>
    )
}

export default Banner
