import AxiosAuth from "../AxiosAuth";
import axios from "axios";
import React, { Fragment, useState, useRef } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import useDataApi from "./useDataApi";
import { Button, Form, Container, Header, Grid } from "semantic-ui-react";

const Login = () => {

  const [{ data, isLoading, isError, setLoggedIn,logins }, doFetch] = useDataApi(
    logins,
    {
      res: []
    }
  );
  const nameRef = useRef();
  const passRef = useRef();
  const submitButton = () =>
        logins({ username: nameRef.current.value, password: passRef.current.value });

  return (
    <Grid style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log In
        </Header>

        <Form
          size="large"
          onSubmit={event => {
            submitButton();
            doFetch();
            event.preventDefault();
          }}
        >
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            type="text"
            placeholder="username"
            name="username"
            //onChange={e => setUsername(e.target.value)}
            //value={logins.username}
            ref={nameRef}
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            type="password"
            placeholder="password"
            name="password"
            //onChange={e => setPassword(e.target.value)}
            //value={logins.password}
            ref={passRef}
          />
          <Button type="submit" fluid size="large">
            Login
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
