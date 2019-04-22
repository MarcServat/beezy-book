import React, { Component } from "react";
import { connect } from "react-redux";
import GenreForm from "./GenreForm";
import {Mutation, Query} from "react-apollo";
import {CREATE_GENRE, GENRES} from "../../Queries";
import Loader from "../Loading";
import history from '../../history';

class GenreCreate extends Component {
  onSubmit = ({name}, createBook) => {
    createBook({variables: {name: name}, refetchQueries: [{query: GENRES}]})
        .then(() => history.push('/genres'));
  };

  render() {
    return (
        <div className="ui container">
          <h3>Create Genre</h3>
          <Query query={GENRES}>
            {({loading, data}) => {
              if (loading) return <Loader active={loading} />;
              return (
                  <Mutation mutation={CREATE_GENRE} >
                    {(createBook) => (
                        <GenreForm onSubmit={this.onSubmit}
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

export default connect(null, {})(GenreCreate);
