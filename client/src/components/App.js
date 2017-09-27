import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import ObjectDashboard from "./ObjectDashboard";
import SurveyNew from "./surveys/SurveyNew";
import UploadNew from "./objects/UploadNew";
import FixedMenu from "./FixedMenu";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    //const token = localStorage.getItem("token");
    //this.props.fetchLocalUser({ token });
  }
  //"url('/assets/images/tealbackground.jpg')"
  render() {
    return (
      <div
        style={{
          minHeight: 700,
          padding: "1em 0em",
          backgroundColor: "#E9E9E9"
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
            <Route exact path="/arobjects" component={ObjectDashboard} />
            <Route exact path="/arobjects/new" component={UploadNew} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
