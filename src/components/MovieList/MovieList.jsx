import MovieCard from "../MovieCard/MovieCard";
import { useSelector, useDispatch } from "react-redux";

import "./MovieList.css";
import { useState } from "react";
// import Pagination from "../Pagination/Pagination";
// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.moviesDB);
  const [currentPage] = useState(
    useSelector((state) => state.movies.currentPage)
  );

  const [itemsPerPage, setItemsPerPage] = useState(
    useSelector((state) => state.movies.itemsPerPage)
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleIncrementClick = () => {
    setItemsPerPage(itemsPerPage + 5);
    dispatch({ type: "SET_ITEMS_PER_PAGE", payload: itemsPerPage + 5 });
  };

  const handleDecrementClick = () => {
    setItemsPerPage(itemsPerPage - 5);
    dispatch({ type: "SET_ITEMS_PER_PAGE", payload: itemsPerPage - 5 });
  };

  return (
    <>
      <div className="movie-list">
        {movies.slice(startIndex, endIndex).map((movie) => (
          <MovieCard
            key={movie.imdbID}
            imdbID={movie.imdbID}
            Title={movie.Title}
            Year={movie.Year}
            Poster={movie.Poster}
            Type={movie.Type}
          />
        ))}
      </div>

      <div className="button-conteiner">
        <button onClick={handleIncrementClick} className="button-36">
          Añadir 5 Peliculas x Pagina{" "}
        </button>
        <button onClick={handleDecrementClick} className="button-36">
          Eliminar 5 Peliculas x Pagina
        </button>
      </div>
    </>
  );
}




export default MovieList;
