import React from "react";
import Movies from "./Movies";
import Searchbar from "./SearchBar";
import Videoimage from "../assets/undraw_video_streaming_re_v3qg.svg"

const Landing = ( { onSearch, searchValue, setSearchValue, moviesResults }) => {

  return (
    <section>
      <header>
        <h1 className="header__title blue">Browse our movies</h1>
        <Searchbar onSearch={onSearch} searchValue={searchValue} setSearchValue={setSearchValue} />
      </header>
      {!moviesResults ? (
        <figure className="movie__img--wrapper">
          <img src={Videoimage} alt="" className="movie__img"/>
        </figure>
      ) : (
        <Movies moviesResults={moviesResults} />
      )}
    </section>
  );
};

export default Landing;
