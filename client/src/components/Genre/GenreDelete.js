import React from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import {GENRE, DELETE_GENRE, GENRES} from "../../Queries";
import Loader from "../Loading";
import {Mutation, Query} from "react-apollo";

class GenreDelete extends React.Component {

  state = { status: ''};

  renderLoader(id, deleteGenre) {
    this.setState({status: 'loading'});
    deleteGenre({variables: {genreId: id}, refetchQueries: [{query: GENRES}]})
        .then(() => history.push('/genres'));
  }

  actions(deleteGenre) {
    const { id } = this.props.match.params;
    return (
        <div className="actions">
          <button
              className={`ui primary button ${this.state.status}`}
              onClick={() => this.renderLoader(id, deleteGenre)}
          >
            Delete
          </button>
          <Link className="ui button" to="/genres">
            Cancel
          </Link>
        </div>
    );
  }

  renderContent() {
    if (!this.props.genre) {
      return `Are you sure you want to delete this genre?`;
    }

    return `Are you sure you want to delete: \n ${this.props.genre.name}?`;
  }

  render() {
    return (
        <Query query={GENRE} variables={{id: this.props.match.params.id}}>
          {({loading, data}) => {
            if (loading) return <Loader active={loading} />;
            return (
                <Mutation mutation={DELETE_GENRE} key={data.genre.id}>
                  {(deleteGenre) => (
                      <Modal
                          onDismiss={() => history.push("/genres")}
                          title="Delete Genre"
                          content={this.renderContent()}
                          actions={this.actions(deleteGenre)}
                      />
                  )}
                </Mutation>)
          }}
        </Query>
    );
  }
}

export default GenreDelete;
