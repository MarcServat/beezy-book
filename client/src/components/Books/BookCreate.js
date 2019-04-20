
import React, { Component } from "react";
import { connect } from "react-redux";
import { createBook } from "../../actions";
import BookForm from "./BookForm";

class BookCreate extends Component {
  onSubmit = formValues => {
    this.props.createBook(formValues);
  };

  render() {
    return (
        <div className="ui container">
          <h3>Create Book</h3>
          <BookForm onSubmit={this.onSubmit} />
        </div>
    );
  }
}

export default connect(
    null,
    { createBook }
)(BookCreate);
