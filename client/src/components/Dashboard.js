import React, { Component } from "react";
import { Segment, Container } from "semantic-ui-react";
import FixedMenu from "./FixedMenu";

class Dashboard extends Component {
  render() {
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
          <FixedMenu />
          <Container text />
        </Segment>
      </div>
    );
  }
}

export default Dashboard;
