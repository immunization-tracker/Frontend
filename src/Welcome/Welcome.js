import React, { useContext } from "react";
import { Container, Button, Icon, Header } from "semantic-ui-react";
import Doctors from "../Doctors/Doctors";
import { useRoutes, useRedirect, navigate, A, usePath } from "hookrouter";
import { RootContext } from "../auth/RootContext";
import { Link } from "react-router-dom";

export const Welcome = (props) => {
  //const { authenticated } = useContext(RootContext);
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
      <div className="ui two buttons">
        <React.Fragment>
          <Link to={"/login"}>
            <Button primary size="huge">
              Login
              <Icon name="right arrow" />
            </Button>
          </Link>
        </React.Fragment>
      
        <React.Fragment>
          <Link to={"/signup"}>
            <Button primary size="huge">
              Sign Up
              <Icon name="right arrow" />
            </Button>
          </Link>
        </React.Fragment>
        </div>
      
    </Container>
  );
};
