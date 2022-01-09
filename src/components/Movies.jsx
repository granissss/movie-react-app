import React from "react";
import { Link } from "react-router-dom";


const Movies = ({ moviesResults }) => {

  return (
    <>
      <section>
        <div className="search__result--top blue">Results for: "{localStorage.getItem("value")}"</div>
        <div className="search__result">
          {moviesResults.map((movie) => (
            <div className="movie" key={movie.imdbID}>
              <Link to={`/movies/${movie.imdbID}`}>
                <figure className="movie__img--wrapper">
                  <img src={movie.Poster} className="movie__poster" alt="img" />
                </figure>
                <h1 className="movie__title">
                  {movie.Title} ({movie.Year})
                </h1>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Movies;
