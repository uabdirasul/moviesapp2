import React, { Component } from "react";

class MovieCard extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { Title, Year, imdbID, Type, Poster } = this.props;
    return (
      <div key={imdbID}>
        <div className="card">
          <div className="card__img">
            <img src={Poster} alt={Title} />
          </div>
          <div className="card__info">
            <p>{Type}</p>
            <h2>{Title}</h2>
            <p>{Year}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
