import React, { Component } from "react";
import { Segment, Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Segment textAlign="center" vertical>
          <Container text />
          <div>
            <SurveyList />
            <Link to="/surveys/new">
              <Button
                style={{ position: "absolute", top: 100, right: 50 }}
                size="massive"
                color="teal"
                icon="plus"
                circular
              />
            </Link>
          </div>
        </Segment>
      </div>
    );
  }
}

export default Dashboard;
