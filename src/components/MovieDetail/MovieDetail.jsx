import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import style from "./MovieDetail.module.css";
function MovieDetail() {
  const movies = useSelector((state) => state.movies.moviesDB);

  const movieId = useParams();

  const movie = movies.filter((movie) => movie.imdbID === movieId.id);

  return (
    <div>
        <Link to="/">
        <button  className={style.button}>Back</button>
        </Link>
      {movie.map((m) => (
        <div key={m.imdbID} className={style.card}>
        <h1 className={style.title}>{m.Title}</h1>
        <img src={m.Poster} alt={m.Title} className={style.img} />
        <p className={style.year}>Year: {m.Year}</p>
        <p className={style.type}>Type: {m.Type}</p>
      </div>
      ))}
    </div>
  );
}

export default MovieDetail;
