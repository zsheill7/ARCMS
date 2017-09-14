import _ from "lodash";
import React, { Component } from "react";
import { Button, Form, Grid, Segment, Container } from "semantic-ui-react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  render() {
    return (
      <div>
        <Segment textAlign="center" vertical>
          <Container text>
            <div className="login-form">
              <style>{`
              body > div,
              body > div > div,
              body > div > div > div.login-form {

              }
            `}</style>
              <Grid
                textAlign="center"
                style={{ height: "100%" }}
                verticalAlign="middle"
              >
                <Grid.Column
                  style={{ maxWidth: 450, marginTop: "6em" }}
                  verticalAlign="middle"
                >
                  <Form
                    onSubmit={this.props.handleSubmit(
                      this.props.onSurveySubmit
                    )}
                    size="large"
                    style={{ opacity: 1 }}
                  >
                    <Segment stacked>
                      {this.renderFields()}
                      <Link to="/surveys" style={{ marginLeft: 0 }}>
                        <Button color="red">Cancel</Button>
                      </Link>
                      <Button
                        style={{ marginRight: 0 }}
                        color="teal"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Segment>
                  </Form>
                </Grid.Column>
              </Grid>
            </div>
          </Container>
        </Segment>
      </div>
    );
  }

  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || "");

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
