import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBooks, editBook, deleteBook } from "../../actions";
import history from "../../history";
import Loader from "../Loading";

class BookList extends React.Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  renderList() {
    return this.props.books.map(book => {
      console.log(book)
      const img = `${process.env.PUBLIC_URL}img/${book.img}`;
      return (
          <div className="item" key={book.id}>
            <img className="ui middle aligned tiny image" src={img} alt="cover" />
            <div className="content list">
              <div className="header item">{book.name}</div>
              <div className="item">{book.description}</div>
              <div className="item">{book.price}<i className="euro sign icon grey" /></div>
              <div className="item">{book.genre}</div>
              <div className="ui small basic icon buttons">
                <button className="ui icon button">
                  <i className="edit icon"
                     onClick={() => history.push(`/books/edit/${book.id}`)} />
                </button>
                <button className="ui icon button">
                  <i className="trash icon"
                     onClick={() => history.push(`/books/delete/${book.id}`)} />
                </button>
              </div>
            </div>
          </div>
      );
    });
  }


  renderCreate() {
    return (
        <Link to="/books/new" className="ui right floated button blue">
          Insert Book
        </Link>
    );
  }

  render() {
    return (
        <div className="ui container">
          {this.renderCreate()}
          <h2 className="ui header">
            <i className="book icon"/>
            <div className="content">Books List</div>
          </h2>
          <Loader active={!this.props.books.length > 0} />
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
