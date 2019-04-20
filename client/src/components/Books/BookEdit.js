import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchBook, editBook, initializeFormValues } from "../../actions";
import BookForm from "./BookForm";
import Loader from "../Loading";

class BookEdit extends Component {
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editBook(this.props.match.params.id, formValues);
  };

  render() {
    return (
        <div className="ui container">
          <h2 className="ui header">
            <i className="edit icon"/>
            <div className="content">Edit Book</div>
          </h2>
          <Loader active={!this.props.book} />
          <BookForm
              initialValues={this.props.book}
              onSubmit={this.onSubmit}
          />
        </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    book: state.books[props.match.params.id]
  };
};

export default connect(
    mapStateToProps,
    { fetchBook, editBook }
)(BookEdit);
