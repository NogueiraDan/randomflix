import { useEffect, useState } from "react";
import "./movieitem.css";
import axios from "axios";

export default function () {
  const [movie, setMovie] = useState([{}]);
  //const[result, setResult] = useState(parseInt(Math.random() * 20));
  let page = parseInt(Math.random() * 500);

  console.log(movie);
  console.log(movie[1]);

  useEffect(() => {
    async function loadMovies() {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt&page=${page}`
        )
        .then((response) => {
          console.log(response.data);
          setMovie(response.data.results);
        })
        .catch((err) => console.log(err));
      console.log(page);
    }
    loadMovies();
  }, []);


  if (!movie) {
    return (
      <>
        <div>
          <p>Carregando</p>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <div className="itemContainer">
          <div className="imageContainer">
            <img
              id="imageMovie"
              src={`https://image.tmdb.org/t/p/w500${movie[0].poster_path}`}
            />
          </div>

          <div className="descriptionContainer">
            <h3 id="title">{movie[0].title}</h3>
            <span>{movie[0].overview}</span>
            <br />
            <div className="descriptionData">
              <h2>Média: {movie[0].vote_average}</h2>
              <h2>Votos: {movie[0].vote_count}</h2>
              <h2>Popularidade: {movie[0].popularity}</h2>
            </div>
          </div>
        </div>
        <div className="divButton">
          <button id="btnRandom" onClick={()=>window.location.reload(true)}>
            Encontar Filme
          </button>
        </div>
      </div>
    );
  }
}
