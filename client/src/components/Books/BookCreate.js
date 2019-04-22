import React, { Component } from "react";
import {connect} from "react-redux";
import BookForm from "./BookForm";
import history from '../../history';
import {CREATE_BOOK, GENRES, BOOKS} from "../../Queries";
import Loader from "../Loading";
import {Mutation, Query} from "react-apollo";

class BookCreate extends Component {
  onSubmit = ({name, description, price, genre}, createBook)  => {
    createBook({variables: {id: name, book: {name, description, price, genreId: genre}}, refetchQueries: [{query: BOOKS}]})
        .then(() => history.push('/'));
  };

  render() {
    return (
        <div className="ui container">
          <h3>Create Book</h3>
            <Query query={GENRES}>
              {({loading, data}) => {
                if (loading) return <Loader active={loading} />;
                return (
                    <Mutation mutation={CREATE_BOOK} >
                      {(createBook) => (
                          <BookForm onSubmit={this.onSubmit}
                                    genres={data.genres}
                                    mutation={createBook}/>
                      )}
                    </Mutation>)
              }}
            </Query>
        </div>
    );
  }
}

export default connect(null, {})(BookCreate);
