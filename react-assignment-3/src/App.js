import React from "react";
import preLoader from "./assets/preloader.gif";
import "./App.css";
import MovieCards from "./components/moveCards";
import SearchBar from "./components/searchBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = { onChangeMoviesList: [], moviesList: [] };
    this.updateState = this.updateState.bind(this);
  }
  updateState(data) {
    this.setState(data);
  }
  componentDidMount() {
    const api = "https://www.omdbapi.com/?apikey=45f0782a&s=war";
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          onChangeMoviesList: data.Search,
          moviesList: data.Search,
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div id="App">
        <SearchBar listState={this.state} setMovieList={this.updateState} />
        {this.state.moviesList.length ? (
          <div id="main">
            {this.state.onChangeMoviesList.length ? (
              <MovieCards movieList={this.state.onChangeMoviesList} />
            ) : (
              <h1 className="not-found">Sorry, Movie not found!</h1>
            )}
          </div>
        ) : (
          <div id="overlay">
            <img src={preLoader} alt="Preloader icon" />
          </div>
        )}
      </div>
    );
  }
}

export default App;
