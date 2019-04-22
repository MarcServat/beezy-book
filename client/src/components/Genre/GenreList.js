import React from "react";
import { Link } from "react-router-dom";
import history from "../../history";
import Loader from "../Loading";
import {GENRES} from "../../Queries";
import {Query} from "react-apollo";

class GenreList extends React.Component {

  renderList(genres) {
    return genres.map(genre => {
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
    return (
        <div className="ui container">
          {this.renderCreate()}
          <h2 className="ui header">
            <i className="archive icon"/>
            <div className="content">Genre List</div>
          </h2>
          <Query query={GENRES}>
            {({loading, error, data}) => {
              if (loading) return <Loader active={loading}/>;
              if (error) return <div>`Error ${error}`</div>;
              return <div className="ui big celled list">{this.renderList(data.genres)}</div>
            }}
          </Query>
        </div>
    );
  }
}

export default GenreList;
