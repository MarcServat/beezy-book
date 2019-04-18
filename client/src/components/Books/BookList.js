import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBooks, editBook, deleteBook } from "../../actions";
import history from "../../history";

class BookList extends React.Component {
  state = {modal: false, book: {}};

  componentDidMount() {
    this.props.fetchBooks();
  }

  renderRedirect(book) {
    history.push(`/book/delete/${book.id}`)
  }


  renderList() {
    return this.props.books.map(book => {
      const img = `${process.env.PUBLIC_URL}img/${book.img}`;
      return (
          <div className="item" key={book.id}>
            <img className="ui tiny image" src={img} alt="cover" />
            <div className="content">
              <div className="header">{book.title}</div>
              <div className="description">{book.description}</div>
              <div className="price">{book.price}</div>
              <div className="genre">{book.genre}</div>
              <i className="edit icon" onClick={() => this.props.editBook(book.id)} />
              <i className="trash icon" onClick={() => this.renderRedirect(book)}/>
            </div>
          </div>
      );
    });
  }


  renderCreate() {
    return (
        <Link to="/books/new" className="ui button primary">
          Insert Book
        </Link>
    );
  }

  render() {
    const loading = this.props.books.length > 0 ? 'inactive' : 'active';
    return (
        <div className="ui container">
          {this.renderCreate()}
          <h2 className="ui header">
            <i className="book icon"/>
            <div className="content">Books List</div>
          </h2>
          <div className={`ui inverted dimmer ${loading}`}>
            <div className="ui big text loader">Loading</div>
          </div>
          <div className="ui big celled list">{this.renderList()}</div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: Object.values(state.books)
  };
};

export default connect(
    mapStateToProps,
    { fetchBooks, editBook, deleteBook }
)(BookList);
