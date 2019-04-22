import React, {Component} from "react";
import GenreForm from "./GenreForm";
import Loader from "../Loading";
import {Mutation, Query} from "react-apollo";
import {GENRE, GENRES, UPDATE_GENRE} from "../../Queries";
import history from "../../history";

class GenreEdit extends Component {

  onSubmit = ({id, name}, editGenre) => {
    editGenre({variables: {genreId: id, name: name}, refetchQueries: [{query: GENRES}]})
        .then(() => history.push("/genres"))
  };

  render() {
    return (
        <div className="ui container">
          <h2 className="ui header">
            <i className="edit icon"/>
            <div className="content">Edit Genre</div>
          </h2>
          <Query query={GENRE} variables={{id: this.props.match.params.id}}>
            {({loading, data}) => {
                  if (loading) return <Loader active={loading} />;
                  return (
                      <Mutation mutation={UPDATE_GENRE} key={data.id}>
                        {(editGenre, { loading, error }) => (
                            <GenreForm
                                initialValues={data.genre}
                                onSubmit={this.onSubmit}
                                mutation={editGenre}
                            />)}
                      </Mutation>)
                }}
          </Query>
        </div>
    );
  }
}

export default GenreEdit;
