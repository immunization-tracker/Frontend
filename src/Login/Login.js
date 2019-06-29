import AxiosAuth from "../AxiosAuth";
import axios from "axios";
import React, { Fragment, useState, useEffect, useCallback } from "react";
import { useRoutes, useRedirect, navigate, A, usePath } from "hookrouter";
import useDataApi from "./useDataApi";
import { Button, Form, Container, Header } from "semantic-ui-react";

const useFormHandler = initialState => {
  const [values, setValues] = useState(initialState);

  const handleChange = useCallback(
    ({ target: { name, value } }) =>
      setValues(prevState => ({ ...prevState, [name]: value })),
    []
  );

  return {
    handleChange,
    values
  };
};

const Login = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState("");
  const { values, handleChange } = useFormHandler({
    username: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    const formProps = { ...values };
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios.post(
          "https://immu-tracker2.herokuapp.com/api/staff/login",
          formProps
        );
        console.log(result);
        localStorage.setItem("token", result.data.token);
        
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };
    fetchData();
    navigate("/doctors");
  };

  return (
    <Container style={{ height: "100vh" }}>
      <Header as="h2" color="teal" textAlign="center">
        Log In
      </Header>

      <Form size="large" onSubmit={handleSubmit}>
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          type="text"
          placeholder="uccsername"
          name="username"
          onChange={handleChange}
          value={values.username}
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={values.password}
        />
        <Button type="submit" fluid size="large">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
