import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchBook, editBook } from "../../actions";
import BookForm from "./BookForm";
import Loader from "../Loading";
import {Mutation, Query} from "react-apollo";
import {BOOK, EDIT_BOOK} from "../../Queries";
import {Genre, Book} from '../../Models';

class BookEdit extends Component {

  onSubmit = (formValues, editBook)=> {
    console.log(formValues)
    const book = new Book({...formValues, genreId: formValues.genreId.id});
    console.log(book)
    editBook({variables: {id: formValues.id, input: {...book}}})
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
              const book = new Book(data.book);
              console.log(book)
              const initialValues = {...data.book, genre: data.book.genre.name};
              return (
                  <Mutation mutation={EDIT_BOOK} key={initialValues.id}>
                    {(editBook, { loading, error }) => (
                    <BookForm
                        initialValues={book}
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
