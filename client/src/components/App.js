import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";
import FixedMenu from "./FixedMenu";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    const token = localStorage.getItem("token");
    this.props.fetchLocalUser({ token });
  }

  render() {
    return (
      <div
        style={{
          minHeight: 700,
          padding: "1em 0em",
          backgroundImage: "url('/assets/images/datboi.jpg')"
        }}
      >
        <BrowserRouter>
          <div>
            <FixedMenu />
            <Route
              exact
              path="/"
              component={
                this.props.auth === undefined || this.props.auth == null
                  ? LandingPage
                  : Dashboard
              }
            />

            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
