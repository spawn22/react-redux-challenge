import style from "./MovieCard.module.css";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function MovieCard({ imdbID, Title, Poster, Year, Type }) {
  return (
    <div className={style.conteiner}>
        
      <Link key={ imdbID} to={`/movie/${imdbID}` } className={style.link}>
        <div key={imdbID} className={style.card}>
          <h1 className={style.title}>{Title}</h1>
          <img src={Poster} alt={Title} className={style.img} />
          <p className={style.year}>Year: {Year}</p>
          <p className={style.type}>Type: {Type}</p>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
