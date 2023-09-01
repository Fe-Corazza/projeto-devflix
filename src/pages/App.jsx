import { useEffect } from "react";
import logo from "../assets/devflixpg.png";
import searchIcon from "../assets/search.svg";
import { useState } from "react";

import "./App.css";
import MovieCard from "../componentes/movieCard/movieCard";
import Footer from "../componentes/footer/footer";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const apiKey = "e4d577fa";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    console.log(data);
    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    e.key === "Enter" && searchMovies(searchTerm);
  };

  return (
    <div id="app">
      <div className="menuHead">
        <div className="logo">
          <nav>
            <img src={logo} alt="logo devflix" />

            <ul className="nav-list">
              <li>
                <a href="/">Início</a>
              </li>
              <li>
                <a href="/">Filmes</a>
              </li>
              <li>
                <a href="/">Series</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Pesquise por filmes"
          />
          <img
            src={searchIcon}
            alt="Icone de pesquisa"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </div>

      <div className="filme">
        <h1>Lançamentos: </h1>
      </div>
      
      {movies?.length > 0 ? (
        <div className="container">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movies={movie} />
            ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Nenhum filme encontrado 😥</h2>
        </div>
      )}
      ;

      <div className="filme">
        <h1>Em alta:</h1>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movies={movie} />
            ))}
        </div>
      ) : (
        <div className="empty">
          <h2></h2>
        </div>
      )}
      <Footer link={"https:github.com.br"}>@Fe_Corazza</Footer>
    </div>
  );
};
export default App;
