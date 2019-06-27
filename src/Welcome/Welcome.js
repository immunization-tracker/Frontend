import React, { useContext } from "react";
import { Container, Button, Icon, Header } from "semantic-ui-react";
import Doctors from "../Doctors/Doctors";
import { useRoutes, useRedirect, navigate, A, usePath } from "hookrouter";
import { RootContext } from "../auth/RootContext";

export const Welcome = () => {
  const { authenticated } = useContext(RootContext);
  return (
    <Container style={{ height: "100vh" }}>
      <Header
        as="h1"
        content="Welcome to Immunizations Tracking"
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
        content="Immunization History In Your Pocket."
        inverted
        style={{
          fontSize: "1.7em",
          fontWeight: "normal",
          marginTop: "1.5em"
        }}
      />
      {authenticated ?   (
        <React.Fragment>
          <A href="/doctors">
            <Button primary size="huge">
              See Providers
              <Icon name="right arrow" />
            </Button>
          </A>
        </React.Fragment>
      ): (
        <React.Fragment>
          <A href="/signup">
            <Button primary size="huge">
              Sign Up
              <Icon name="right arrow" />
            </Button>
          </A>
        </React.Fragment>
      )
    }
    </Container>
  );
};
