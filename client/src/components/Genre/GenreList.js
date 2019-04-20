import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGenres, editGenre, deleteGenre } from "../../actions";
import history from "../../history";
import Loader from "../Loading";

class GenreList extends React.Component {

  componentDidMount() {
    this.props.fetchGenres();
  }

  renderList() {
    return this.props.genres.map(genre => {
      return (
          <div className="item" key={genre.id}>
            <div className="content list">
              <div className="header item">{genre.name}</div>
              <div className="ui small basic icon buttons">
                <button className="ui icon button">
                  <i className="edit icon"
                     onClick={() => history.push(`/genres/edit/${genre.id}`)} />
                </button>
                <button className="ui icon button">
                  <i className="trash icon"
                     onClick={() => history.push(`/genres/delete/${genre.id}`)} />
                </button>
              </div>
            </div>
          </div>
      );
    });
  }


  renderCreate() {
    return (
        <Link to="/genres/new" className="ui right floated button blue">
          Insert Genre
        </Link>
    );
  }

  render() {
    console.log(this.props.genres)
    return (
        <div className="ui container">
          {this.renderCreate()}
          <h2 className="ui header">
            <i className="archive icon"/>
            <div className="content">Genre List</div>
          </h2>
          <Loader active={!this.props.genres.length > 0} />
          <div className="ui big celled list">{this.renderList()}</div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    genres: Object.values(state.genres)
  };
};

export default connect(
    mapStateToProps,
    { fetchGenres, editGenre, deleteGenre }
)(GenreList);
