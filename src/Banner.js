import React, { useEffect, useState } from "react";
import BannerMovie from './BannerMovie';
import HorizontalScroll from 'react-horizontal-scrolling'
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results
      ); 
    }
    fetchMovie();
  }, []);
  console.log(movie);
  return (
    <>
    <HorizontalScroll >
      {movie.map((mov) => (
        <BannerMovie movie={mov}/>
      ))}
    </HorizontalScroll>
    </>
  );
}

export default Banner;
