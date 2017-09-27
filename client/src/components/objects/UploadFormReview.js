//SurveyFormReview shows users their form inputs for review
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Button, Grid, Segment } from "semantic-ui-react";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const UploadFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>
          {label}
        </label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column
          style={{ maxWidth: 450, marginTop: "6em" }}
          verticalAlign="middle"
        >
          <Segment stacked>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <Button onClick={onCancel}>Back</Button>
            <Button
              onClick={() => submitSurvey(formValues, history)}
              color="green"
            >
              Send Survey
            </Button>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(UploadFormReview));
