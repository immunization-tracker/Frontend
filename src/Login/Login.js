import AxiosAuth from "../AxiosAuth";
import axios from "axios";
import React, { Fragment, useState, useEffect, useCallback } from "react";
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
  const { values, handleChange } = useFormHandler({
    username: "",
    password: ""
  });
  const [{ data, isLoading, isError }, doFetch] = useDataApi({
    res: []
  });
  const[body,setBody] =useState('');
    const [url, setUrl] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post(
        url,
        body
      );

      localStorage.setItem("Token", result.data.token);
      console.log(result);
    };

    fetchData();
  }, [body]);
  
  const handleSubmit = e => {
    e.preventDefault();
    const formProps = { ...values };
    setBody(formProps);
    setUrl('"https://immu-tracker2.herokuapp.com/api/staff/login"');
    //setBody(JSON.stringify(formProps, null, 4));
    doFetch(body);
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
