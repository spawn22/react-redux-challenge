import "./App.css";
import { useRoutes, BrowserRouter } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";
import MovieDetail from "./components/MovieDetail/MovieDetail";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <MovieList />,
    },
    {
      path: "/movie/:id",
      element: <MovieDetail />,
    },
  ]);
  return routes;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Movies</h1>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
