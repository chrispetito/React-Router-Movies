import React, { Component } from "react";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import { Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: [],
      clearList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  // clearSavedList = movie => {
  //   const clearList = this.state.clearList;
  //   const savedList = this.state.savedList;
  //   if (savedList.includes(movie)) {
  //     this.setState({clearList})
  //   }
  // }

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route component={MovieList} exact path="/" />
        {/* <Route component={Movie} exact path="/movies/:id" /> */}
        <Route
          path="/movies/:id"
          render={props => (
            <Movie {...props} addToSavedList={this.addToSavedList} />
          )}
        />
      </div>
    );
  }
}
