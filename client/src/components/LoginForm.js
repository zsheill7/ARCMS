import React from "react";
import {
  Button,
  Form,
  Input,
  Grid,
  Message,
  Segment,
  Container,
  Icon,
  Label
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../actions";

class LoginForm extends React.Component {
  handleFormValues(values) {
    console.log("in LoginForm handleFormSubmit");
    console.log(values);
    const { email, password } = values;
    this.props.loginUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <Container fluid text>
          <div style={{ color: "red" }}>
            Oops! {this.props.errorMessage}
          </div>
        </Container>
      );
    }
  }

  renderInput({
    label,
    placeholder,
    icon,
    meta: { touched, error, warning },
    ...field
  }) {
    return (
      <Form.Field>
        <Input
          {...field.input}
          placeholder={placeholder}
          icon={icon}
          type="text"
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

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
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
                      />
                      {this.renderAlert()}
                      <Button fluid action="submit">
                        Login
                      </Button>
                      <Button
                        fluid
                        size="large"
                        color="google plus"
                        href="/auth/google"
                        style={{ marginTop: "1em" }}
                      >
                        <Icon name="google" /> Sign In With Google
                      </Button>
                    </Segment>
                  </Form>
                  <Message>
                    New to us? <Link to={"/signup"}>Sign Up </Link>
                  </Message>
                </Grid.Column>
              </Grid>
            </div>
          </Container>
        </Segment>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email";
  }

  if (!values.password) {
    errors.password = "Please enter a password";
  }
  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: "" };
}

const form = reduxForm({ form: "login", validate })(LoginForm);
export default connect(mapStateToProps, actions)(form);
