import AxiosAuth from "../AxiosAuth";
import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { Route, Redirect, withRouter } from 'react-router-dom';
import useDataApi from "./useDataApi";
import { Button, Form, Container, Header, Grid } from "semantic-ui-react";

const Login = () => {
  const logins = {
    username: "",
    password: ""
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [{ data, isLoading, isError,setLoggedIn }, doFetch] = useDataApi(logins, {
    res: []
  });
  return (
    <>
    {setLoggedIn ? ( <Redirect to="/doctors" /> ) : (
    <Grid style={{ height: "100vh" }}>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="teal" textAlign="center">
        Log In
      </Header>

      <Form
        size="large"
        onSubmit={event => {
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
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          type="password"
          placeholder="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <Button type="submit" fluid size="large">
          Login
        </Button>
      </Form>
      </Grid.Column>  
    </Grid>
    )}
    </>
  );
};

export default Login;
