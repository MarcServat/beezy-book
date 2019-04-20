import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchGenre, editGenre } from "../../actions";
import GenreForm from "./GenreForm";
import Loader from "../Loading";

class GenreEdit extends Component {
  componentDidMount() {
    this.props.fetchGenre(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editGenre(this.props.match.params.id, formValues);
  };

  render() {
    return (
        <div className="ui container">
          <h2 className="ui header">
            <i className="edit icon"/>
            <div className="content">Edit Genre</div>
          </h2>
          <Loader active={!this.props.genre} />
          <GenreForm
              initialValues={this.props.genre}
              onSubmit={this.onSubmit}
          />
        </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log(state)
  console.log(props)
  return {
    genre: state.genres[props.match.params.id]
  };
};

export default connect(
    mapStateToProps,
    { fetchGenre, editGenre }
)(GenreEdit);
