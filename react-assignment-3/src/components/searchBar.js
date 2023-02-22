import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {
    const searchValue = e.target.value.toLowerCase();
    if (searchValue.length > 0) {
      const filteredMoviesList = this.props.listState.moviesList.filter(
        (movie) => {
          const includes = movie.Title.toLowerCase().includes(searchValue);
          return includes;
        }
      );
      this.props.setMovieList({
        ...this.props.listState,
        onChangeMoviesList: filteredMoviesList,
      });
    } else {
      this.props.setMovieList({
        ...this.props.listState,
        onChangeMoviesList: this.props.listState.moviesList,
      });
    }
  }
  render() {
    return (
      <div id="search-bar">
        <input
          type="text"
          id="search-input"
          placeholder="Search for Movie..."
          autoFocus
          onChange={this.onSearch}
        ></input>
      </div>
    );
  }
}

export default SearchBar;
