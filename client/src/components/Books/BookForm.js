import React, {Component} from 'react';
import { Field, reduxForm } from "redux-form";
import {connect} from "react-redux";

class BookForm extends Component {
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
    this.props.onSubmit(formValues, this.props.mutation);
  };

  render() {
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}
              className="ui form error">
          <Field name="name"
                 component={this.renderInput}
                 label="Enter Name" />
          <Field name="description"
                 component={this.renderInput}
                 label="Enter description" />
          <Field name="genreId[name]"
                 component={this.renderInput}
                 label="Enter Genre" />
          <Field name="price"
                 component={this.renderInput}
                 label="Enter Price" />
          <button className={`ui button primary ${this.state.status}`}>Submit</button>
        </form>
    );
  }

}

const validate = (values) => {
  const errors = {};
  if(!values.name) {
    errors.name = 'You must enter a name';
  }
  if(!values.description) {
    errors.description = 'You must enter a description';
  }
  if(!values.genreId) {
    errors.genre = 'You must enter a genre';
  }
  if(!values.price) {
    errors.price = 'You must enter a price';
  }
  return errors;
};

const formWrapped = reduxForm({
  form: 'bookForm',
  validate
})(BookForm);

export default connect(null)(formWrapped);
