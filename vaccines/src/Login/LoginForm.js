import React, { useState } from 'react';
import {
  Button,
  Form,
  Container,
  Header
} from 'semantic-ui-react';

const LoginForm = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

export default LoginForm;
