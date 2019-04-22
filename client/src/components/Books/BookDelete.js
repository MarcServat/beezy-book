import React from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import {BOOK, BOOKS, DELETE_BOOK} from "../../Queries";
import Loader from "../Loading";
import {Mutation, Query} from "react-apollo";

class BookDelete extends React.Component {

  state = { status: ''};

  renderLoader(deleteBook, {id}) {
    this.setState({status: 'loading'});
    deleteBook({variables: {bookId: id}, refetchQueries: [{query: BOOKS}]})
        .then(() => history.push(''));
  }

  actions(deleteBook, book) {
    return (
        <div className="actions">
          <button
              className={`ui primary button ${this.state.status}`}
              onClick={() => this.renderLoader(deleteBook, book)}
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
        <Query query={BOOK} variables={{id: this.props.match.params.id}}>
          {({loading, data}) => {
            if (loading) return <Loader active={loading} />;
            return (
                <Mutation mutation={DELETE_BOOK} key={data.book.id}>
                  {(deleteBook) => (
                      <Modal
                          onDismiss={() => history.push("/")}
                          title="Delete Stream"
                          content={this.renderContent()}
                          actions={this.actions(deleteBook, data.book)}
                      />
                  )}
                </Mutation>)
          }}
        </Query>
    );
  }
}

export default BookDelete;
