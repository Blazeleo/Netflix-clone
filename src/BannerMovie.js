import React, { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";
import "./Banner.css";
const base_url = "https://image.tmdb.org/t/p/original/";


function BannerMovie({movie}) {
    
  const [trailerUrl, setTrailerUrl] = useState("");
    const movieClicked = (moviename) => {
        console.log(moviename);
        if (trailerUrl != "") setTrailerUrl("");
        else {
          movieTrailer(moviename)
            .then((url) => {
              const urlParamV = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParamV.get("v"));
            })
            .catch((err) => console.log(err));
        }
      };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('${base_url}${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title" style={{paddingRight:'20px'}}>
          {movie?.name || movie?.title || movie?.orginal_name}
        </h1>
        <div className="banner__buttons">
          <button
            onClick={() =>
                movieClicked(movie.name || movie.title || movie.orginal_name)
            }
            key={movie.id}
            className={`banner__button ${"row__posterLarge"}`}
            src={`${base_url}${ movie.poster_path}`}
            alt={movie.name}
          >Play</button>
          <button className="banner__button">More Info</button>
        </div>
        <p className="banner__description">{movie?.overview}</p>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default BannerMovie;
