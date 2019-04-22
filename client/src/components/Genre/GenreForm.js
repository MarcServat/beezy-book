import React, {Component} from 'react';
import { Field, reduxForm } from "redux-form";
import {connect} from "react-redux";

class GenreForm extends Component {
  state = { status: ''};

  renderInput = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
        <div className={className}>
          <label>{label}</label>
          <input {...input} autoComplete="off"/>
          {this.renderError(meta)}
        </div>
    );
  };

  renderError({error, touched}) {
    if(error && touched) {
      return (<div className="ui error message">{error}</div>);
    }
  }

  onSubmit = (formValues) => {
    this.setState({status: 'loading'});
    this.props.onSubmit(formValues, this.props.mutation);
  };

  render() {
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}
              className="ui form error">
          <Field name="name"
                 component={this.renderInput}
                 label="Enter Name" />
          <button className={`ui button primary ${this.state.status}`}>Submit</button>
        </form>
    );
  }

}

const validate = (values) => {
  const errors = {};
  if(!values.title) {
    errors.title = 'You must enter a title';
  }
  if(!values.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
};

const formWrapped = reduxForm({
  form: 'genreForm',
  validate
})(GenreForm);

export default connect(null)(formWrapped);
