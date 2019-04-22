import React, {Component} from "react";
import history from '../../history'
import BookForm from "./BookForm";
import Loader from "../Loading";
import {Mutation, Query} from "react-apollo";
import {BOOK, GENRES, BOOKS, UPDATE_BOOK} from "../../Queries";

class BookEdit extends Component {

  onSubmit = ({id, name, description, price, img, genre}, editBook)=> {
    editBook({variables: {bookId: id, book: {id, name, description, price, img, genreId: genre}}, refetchQueries: [{query: BOOKS}]})
        .then(() => history.push("/"))
  };

  render() {
    return (
        <div className="ui container">
          <h2 className="ui header">
            <i className="edit icon"/>
            <div className="content">Edit Book</div>
          </h2>
          <Query query={BOOK} variables={{id: this.props.match.params.id}}>
            {({loading: loadingBook, data: dataBook}) => {
              return (<Query query={GENRES}>
                  {({loading: loadingGenres, data: dataGenres}) => {
                    if (loadingGenres && loadingBook) return <Loader active={true} />;
                    return (
                    <Mutation mutation={UPDATE_BOOK} key={dataBook.id}>
                    {(editBook, { loading, error }) => (
                        <BookForm
                            initialValues={dataBook.book}
                            genres={dataGenres.genres}
                            onSubmit={this.onSubmit}
                            mutation={editBook}
                        />)}
                    </Mutation>)
                  }}
                </Query>)}}
          </Query>
        </div>
    );
  }
}

export default BookEdit;
