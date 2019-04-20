import React from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { deleteGenre } from "../../actions";
import { connect } from "react-redux";

class GenreDelete extends React.Component {

  state = { status: ''};

  renderLoader(id) {
    this.setState({status: 'loading'});
    this.props.deleteGenre(id);
  }

  actions() {
    const { id } = this.props.match.params;
    return (
        <div className="actions">
          <button
              className={`ui primary button ${this.state.status}`}
              onClick={() => this.renderLoader(id)}
          >
            Delete
          </button>
          <Link className="ui button" to="/">
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
        <Modal
            onDismiss={() => history.push("/")}
            title="Delete Stream"
            content={this.renderContent()}
            actions={this.actions()}
        />
    );
  }
}

const mapStateToProps = (state, props) => {
  return { genre: state.genres[props.match.params.id] };
};

export default connect(
    mapStateToProps,
    { deleteGenre }
)(GenreDelete);
