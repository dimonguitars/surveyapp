import React from "react";
import { connect } from "react-redux";
import formField from "./formField";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";
import _ from "lodash";

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFild = _.map(formField, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFild}
      <button
        className="btn-flat darken-2 yellow white-text"
        onSubmit={this.onCancel}
        onClick={onCancel}
      >
        BACK
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="btn-flat green right white-text"
      >
        SEND SURVEY
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyReview));
