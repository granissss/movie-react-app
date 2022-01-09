import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Nav from "../components/Nav";

const Home = () => {

  const apikey = "a7ec4df8";
  const [searchValue, setSearchValue] = useState();
  const [moviesResults, setMoviesResults] = useState([]);
  const [loading, setLoading] = useState();

  function onSearch() { 
    fetchMovies(searchValue);
    localStorage.setItem("value", searchValue);
  }

  async function fetchMovies() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=${apikey}&s=${(searchValue || localStorage.getItem("value"))}}`
    );
    setMoviesResults(data.Search);
    setTimeout(() => {
      setLoading(false);
    }, 450);
  };
  

  useEffect(() => {
      fetchMovies();
      // eslint-disable-next-line
  }, []);

  return (
    <>
      <Nav />
      {loading ? (
        <div className="movies__loading"> <FontAwesomeIcon icon="spinner" /></div>
      ) : (
        <>
      <Landing onSearch={onSearch} searchValue={searchValue} setSearchValue={setSearchValue} moviesResults={moviesResults} />
      </>
      )}
      <Footer />
    </>
  );
};

export default Home;
