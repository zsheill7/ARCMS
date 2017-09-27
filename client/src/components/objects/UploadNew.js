// SurveyNew shows SurveyForm and SurveyFormReview

import React, { Component } from "react";
import { reduxForm } from "redux-form";
import UploadForm from "./UploadForm";
import UploadFormReview from "./UploadFormReview";

class SurveyNew extends Component {
  constructor(props) {
    super(props);
    this.state = { showFormReview: false };
  }

  renderContent() {
    if (this.state.showFormReview === true) {
      return (
        <UploadFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <UploadForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyNew);
