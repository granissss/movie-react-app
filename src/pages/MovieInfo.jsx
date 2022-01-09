import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";


const Movieinfo = () => {
  const apikey = "a7ec4df8";
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState();

  async function getDetails() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${apikey}&i=${id}`
    );
    setDetails(data);
    setTimeout(() => {
      setLoading(false);
    }, 450);
  }

  useEffect(() => {
    getDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      <Nav />
      {loading ? (
        <div className="movies__loading"> <FontAwesomeIcon icon="spinner" /></div>
      ) : (
        <>
      <div className="details__top--txt">
              <Link to="/" className="book__link">
                <h2><FontAwesomeIcon icon="arrow-left" /> Back</h2>
              </Link>
            </div>
      <div className="details__container">
        <div className="details__poster--wrapper">
          <img src={details.Poster} alt="" className="details__poster" />
        </div>
        <div className="details__description--container">
          <div className="details__title blue">
            {details.Title}
          </div>
          <div className="details__description">
            <div className="details__description--left">
              <div className="details__info">Rating: {details.imdbRating} | <span className="blue">{details.Year}</span> | {details.Runtime}</div>
              <div className="details__plot">{details.Plot}</div>
            </div>
            <div className="details__description--right">
              <div className="details__actors"><strong className="blue">Cast:</strong> {details.Actors}</div>
              <div className="details__genres"><strong className="blue">Genres:</strong> {details.Genre}</div>
              <div className="details__boxoffice"><strong className="blue">Box Office:</strong> {details.BoxOffice}</div>
            </div>
          </div>
        </div>
      </div> 
      </>
      )}
    <Footer />
    </section>
  );
};

export default Movieinfo;
