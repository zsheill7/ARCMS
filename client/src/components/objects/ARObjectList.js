import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchARObjects } from "../../actions";
import { Card, Grid, Image, Button } from "semantic-ui-react";

class ARObjectList extends Component {
  componentDidMount() {
    this.props.fetchARObjects();
  }

  renderARObjects() {
    return this.props.arobjects.map(arobject => {
      return (
        <Grid.Column>
          <Card raised key={arobject._id}>
            <Image
              height="175px"
              src={`/assets/images/${arobject.imageName}`}
            />
            <Card.Content>
              <Card.Header>
                {arobject.name}
              </Card.Header>
              <Card.Description>
                {arobject.body}
              </Card.Description>
            </Card.Content>
            <Card.Content>
              <Button href={`/assets/images/${arobject.fileName}`}>
                Download
              </Button>
            </Card.Content>
            <Card.Content extra>
              <a>
                Yes: {arobject.yes}
              </a>
              <a>
                No: {arobject.no}
              </a>
            </Card.Content>
          </Card>
          <div style={{ height: "10px" }} />
        </Grid.Column>
      );
    });
  }
  /*<Card.Meta>
    <span className="date">
      {arobject.name}
    </span>
  </Card.Meta>*/
  /*Sent On: {new Date(
    arobject.dateSent
  ).toLocaleDateString()}*/
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row columns={3}>
            {this.renderARObjects()}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ arobjects }) {
  return { arobjects };
}

export default connect(mapStateToProps, { fetchARObjects })(ARObjectList);
