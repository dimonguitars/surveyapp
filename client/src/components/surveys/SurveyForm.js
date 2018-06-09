import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import {Link} from 'react-router-dom';
import validateEmails  from '../../utils/validateEmails'
import SurveyField from "./SurveyField";
import formField from './formField'
import _ from "lodash";


class SurveyForm extends Component {
  renderFields() {

    return _.map(formField, ({ label, name }) => {
      return (
        <Field key={name}
        component={SurveyField}
        type="text"
        label={label}
        name={name}
      />
      );
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}

          <Link to='/surveys' className='btn-flat red white-text'>
            Cancel
          </Link>
          <button type="submit" className='teal btn-flat right white-text'>
            NEXT
            <i className='material-icons right'>done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  errors.emails = validateEmails(values.emails || '')
  if(!values.title){
    errors.title = 'You must provide  title'
  }
  return errors;
}
export default reduxForm({
  validate: validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
