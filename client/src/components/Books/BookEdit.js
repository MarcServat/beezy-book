import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchBook, editBook, initializeFormValues } from "../../actions";
import BookForm from "./BookForm";
import Loader from "../Loading";
import {Mutation, Query} from "react-apollo";
import {BOOK, EDIT_BOOK} from "../../Queries";

class BookEdit extends Component {

  onSubmit = (formValues, editBook)=> {
    const {name, description, genre, price} = formValues;
    editBook({variables: {id: formValues.id, input: {name, description, genre, price}}})
    // this.props.editBook(this.props.match.params.id, formValues);
  };

  render() {
    return (
        <div className="ui container">
          <h2 className="ui header">
            <i className="edit icon"/>
            <div className="content">Edit Book</div>
          </h2>
          <Query query={BOOK} variables={{id: parseInt(this.props.match.params.id)}}>
            {({loading, data}) => {
              if (loading) return <Loader active={loading} />;
              const initialValues = {...data.book, genre: data.book.genre.name};
              return (
                  <Mutation mutation={EDIT_BOOK} key={initialValues.id}>
                    {(editBook, { loading, error }) => (
                    <BookForm
                        initialValues={initialValues}
                        onSubmit={this.onSubmit}
                        mutation={editBook}
                    />)}
                  </Mutation>)
            }}
          </Query>
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
