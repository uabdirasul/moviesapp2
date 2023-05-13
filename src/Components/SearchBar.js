import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super();
    this.state = {
      search: "spider",
    };
  }
  handleText = () => {
    const { search } = this.state;
    this.props.searchMovies(search);
  };

  render() {
    return (
      <div className="input-wrapper">
        <input
          className="search-movie"
          placeholder="Search any movie"
          type="text"
          id="movie-name"
          name="movie-name"
          autoComplete="off"
          required
          onKeyUp={this.handleText}
          onChange={(e) =>
            this.setState({
              search: e.target.value,
            })
          }
        />
        <label htmlFor="movie-name"></label>
      </div>
    );
  }
}

export default SearchBar;
