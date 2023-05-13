import React, { Component } from "react";
import MovieCards from "../Components/MovieCards";

class Main extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=8534e0c0&s=spider")
      .then((data) => data.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  render() {
    const { movies } = this.state;
    return (
      <main>
        <div className="container">
          <MovieCards movies={movies} />
        </div>
      </main>
    );
  }
}

export default Main;
