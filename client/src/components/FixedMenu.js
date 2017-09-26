import React, { Component } from "react";
import { Menu, Button, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import Payments from "./Payments";
import * as actions from "../actions";

class FixedMenu extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <Button href="/auth/google" as="a">
              Log in
            </Button>
            <Button as="a" style={{ marginLeft: "0.5em" }}>
              Sign Up
            </Button>
          </div>
        );
      default:
        return (
          <div>
            <Payments />
            <Button style={{ marginLeft: "0.5em" }}>
              Credits: {this.props.auth.credits}
            </Button>
            <Button
              href={this.props.logoutUser()}
              as="a"
              style={{ marginLeft: "0.5em" }}
            >
              Log out
            </Button>
          </div>
        );
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Menu pointing secondary size="large">
            <Menu.Item href={this.props.auth ? "/surveys" : "/"} as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Community</Menu.Item>
            <Menu.Item as="a">My Account</Menu.Item>
            <Menu.Item position="right">
              {this.renderContent()}
            </Menu.Item>
          </Menu>
        </Container>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(FixedMenu);
