import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          // <span className="saved-movie">{movie.title}</span>
          <NavLink exact className="save-movie-link" to={`/movies/${movie.id}`}>
            {movie.title}
          </NavLink>
        ))}
        {/* <button onClick={this.props.clearSavedList}>Clear List</button> */}
        <Link to="/">
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}
