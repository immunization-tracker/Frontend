import React, { useState, useEffect } from 'react';
import AxiosAuth from '../AxiosAuth';
import {
  Button,
  Form,
  Container,
  Header
} from 'semantic-ui-react';



const AppH = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');  

  useEffect(({ username, password }) => {
    AxiosAuth().post('https://immu-tracker2.herokuapp.com/api/staff/login', ({ username, password }))
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('Token', data.token);
      });
  }, []);

  return (
    <Container style={{ height: "100vh" }}>
      <Header as="h2" color="teal" textAlign="center">
        Log In
      </Header>

      <Form
        size="large"
        onSubmit={e => {
          e.preventDefault();
          props.onSubmit({ username, password });
          setUsername("");
          setPassword("");
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
    </Container>
  );
};
export default AppH;

