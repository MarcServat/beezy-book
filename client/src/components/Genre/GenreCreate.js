import React, { Component } from "react";
import { connect } from "react-redux";
import { createGenre } from "../../actions";
import GenreForm from "./GenreForm";

class GenreCreate extends Component {
  onSubmit = formValues => {
    this.props.createGenre(formValues);
  };

  render() {
    return (
        <div className="ui container">
          <h3>Create Genre</h3>
          <GenreForm onSubmit={this.onSubmit} />
        </div>
    );
  }
}

export default connect(
    null,
    { createGenre }
)(GenreCreate);
