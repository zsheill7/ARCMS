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
import FixedMenu from "./FixedMenu";
import { reduxForm, Field } from "redux-form";

class SignupForm extends React.Component {
  handleFormValues(values) {
    console.log("in SignupForm handleFormSubmit");
    console.log(values);
    this.props.signupUser(values);
  }

  renderInput({ label, placeholder, icon, ...field }) {
    return (
      <Form.Field>
        <Input
          {...field.input}
          placeholder={placeholder}
          icon={icon}
          type="text"
          className="form-control"
        />
      </Form.Field>
    );
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
        <FixedMenu />
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

const form = reduxForm({ form: "signup" })(SignupForm);
export default connect(null, actions)(form);
