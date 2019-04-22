import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchGenre, editGenre } from "../../actions";
import GenreForm from "./GenreForm";
import Loader from "../Loading";
import {Mutation, Query} from "react-apollo";
import {GENRE, GENRES, UPDATE_GENRE} from "../../Queries";
import history from "../../history";

class GenreEdit extends Component {
  componentDidMount() {
    this.props.fetchGenre(this.props.match.params.id);
  }

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

const mapStateToProps = (state, props) => {
  return {
    genre: state.genres[props.match.params.id]
  };
};

export default connect(
    mapStateToProps,
    { fetchGenre, editGenre }
)(GenreEdit);
