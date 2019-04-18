import React from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchBook, deleteBook } from "../../actions";
import { connect } from "react-redux";

class BookDelete extends React.Component {
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
  }

  actions() {
    const { id } = this.props.match.params;
    return (
        <div className="actions">
          <button
              className="ui primary button"
              onClick={() => this.props.deleteBook(id)}
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
    if (!this.props.book) {
      return `Are you sure you want to delete this book?`;
    }

    return `Are you sure you want to delete: \n ${this.props.book.name}?`;
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
  return { book: state.books[props.match.params.id] };
};

export default connect(
    mapStateToProps,
    { fetchBook, deleteBook }
)(BookDelete);
