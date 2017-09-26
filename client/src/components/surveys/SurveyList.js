import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";
import { Card, Grid, Image } from "semantic-ui-react";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.map(survey => {
      return (
        <Grid.Column>
          <Card key={survey._id}>
            <Image src={`/assets/images/${survey.imageName}`} />
            <Card.Content>
              <Card.Header>
                {survey.title}
              </Card.Header>
              <Card.Description>
                {survey.body}
              </Card.Description>
              <Card.Meta>
                <span className="date">
                  Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                </span>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <a>
                Yes: {survey.yes}
              </a>
              <a>
                No: {survey.no}
              </a>
            </Card.Content>
          </Card>
          <div style={{ height: "5px" }} />
        </Grid.Column>
      );
    });
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row columns={3}>
            {this.renderSurveys()}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
