import React, { Component } from "react";
import { Segment, Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ARObjectList from "./ARObjectList";

class ObjectDashboard extends Component {
  render() {
    return (
      <div>
        <Segment textAlign="center" vertical>
          <Container text />
          <div>
            <ARObjectList />
          </div>
        </Segment>
      </div>
    );
  }
}

export default ObjectDashboard;
