import React, { Component } from "react";
import {
  Button,
  Container,
  Header,
  Icon,
  Segment,
  Visibility
} from "semantic-ui-react";
import FixedMenu from "./FixedMenu";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  render() {
    const { visible } = this.state;
    const hideFixedMenu = () => this.setState({ visible: false });
    const showFixedMenu = () => this.setState({ visible: true });
    return (
      <div>
        {visible ? <FixedMenu /> : null}

        <Visibility
          onBottomPassed={showFixedMenu}
          onBottomVisible={hideFixedMenu}
          once={false}
        >
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
              <Header
                as="h1"
                content="Memebook"
                inverted
                style={{
                  fontSize: "4em",
                  fontWeight: "normal",
                  marginBottom: 0,
                  marginTop: "3em"
                }}
              />
              <Header
                as="h2"
                content="The world's largest social media network run only on memes"
                inverted
                style={{ fontSize: "1.7em", fontWeight: "normal" }}
              />
              <Button href="/login" primary size="huge">
                Get Started
                <Icon name="right arrow" />
              </Button>
            </Container>
          </Segment>
        </Visibility>
      </div>
    );
  }
}
