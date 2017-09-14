import React from "react";
import {
  Button,
  Form,
  Input,
  Grid,
  Message,
  Segment,
  Container,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import { reduxForm, Field } from "redux-form";
import validateEmails from "../utils/validateEmails";

class SignupForm extends React.Component {
  handleFormValues(values) {
    console.log("in SignupForm handleFormSubmit");
    console.log(values);
    this.props.signupUser(values);
  }

  renderInput({
    label,
    placeholder,
    icon,
    type,
    meta: { touched, error, warning },
    ...field
  }) {
    return (
      <Form.Field>
        <Input
          {...field.input}
          placeholder={placeholder}
          icon={icon}
          type={type}
          className="form-control"
        />
        {touched &&
          ((error &&
            <span style={{ color: "red" }}>
              {error}
            </span>) ||
            (warning &&
              <span>
                {warning}
              </span>))}
      </Form.Field>
    );
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Segment
        inverted
        textAlign="center"
        style={{
          minHeight: 700,
          padding: "1em 0em",
          backgroundImage: "url('/assets/images/datboi.jpg')"
        }}
        vertical
      >
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
                  onSubmit={handleSubmit(this.handleFormValues.bind(this))}
                  size="large"
                  style={{ opacity: 1 }}
                >
                  <Segment stacked>
                    <Field
                      name="email"
                      component={this.renderInput}
                      icon="user"
                      placeholder="Email Address"
                    />
                    <Field
                      name="password"
                      component={this.renderInput}
                      icon="lock"
                      placeholder="Password"
                      type="password"
                    />
                    <Field
                      name="passwordConfirm"
                      component={this.renderInput}
                      icon="lock"
                      placeholder="Confirm Password"
                      type="password"
                    />
                    <Button fluid action="submit">
                      Sign Up
                    </Button>
                    <Button
                      fluid
                      size="large"
                      color="google plus"
                      style={{ marginTop: "1em" }}
                      href="/auth/google"
                    >
                      <Icon name="google" /> Sign In With Google
                    </Button>
                  </Segment>
                </Form>
                <Message>
                  Already have an account? <Link to="/login">Log In</Link>
                </Message>
              </Grid.Column>
            </Grid>
          </div>
        </Container>
      </Segment>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email";
  } else if (!validateEmails(values.email)) {
    errors.email = "Please enter a valid email";
  }

  if (!values.password) {
    errors.password = "Please enter a password";
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Please enter a password confirmation";
  }

  if (values.password !== values.passwordConfirm) {
    errors.password = "Passwords must match";
  }
  return errors;
}

const form = reduxForm({ form: "signup", validate })(SignupForm);
export default connect(null, actions)(form);
