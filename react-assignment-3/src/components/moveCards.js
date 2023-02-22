import React from "react";

class MovieCards extends React.Component{
    render(){
        return(
            this.props.movieList.map((movie, index) => {
                return (
                  <div key={"card" + index} className="movie-card">
                    <div className="image">
                      <img src={movie.Poster} alt={movie.Title} />
                    </div>
                    <div className="movie-details">
                      <h4 className="movie-title">{movie.Title}</h4>
                      <p className="movie-year">{movie.Year}</p>
                      <p className="movie-type">{movie.Type}</p>
                    </div>
                  </div>
                );
              })
        )
    }
}

export default MovieCards;