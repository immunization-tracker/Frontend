import React from "react";
import useSignUpForm from "./useSignUpForm";
import { Button, Form, Container, Header } from "semantic-ui-react";

const SignUp = () => {
  const signup = () => {
    alert(`User Created! 
Name: ${inputs.name} ${inputs.username}
pass: ${inputs.password}`);
  };
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    { firstName: "", lastName: "", email: "", password1: "", password2: "" },
    signup
  );
  return (
    <Container style={{ height: "100vh" }}>
      <Header as="h2" color="teal" textAlign="center">
        Sign Up
      </Header>

      <Form size="large" onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            type="text"
            placeholder="your name"
            name="name"
            onChange={handleInputChange}
            value={inputs.name}
          />
        </Form.Field>
        <Form.Field required>
          <label>Username</label>
          <Form.Input
            fluid
            icon="user doctor"
            iconPosition="left"
            type="text"
            placeholder="username"
            name="username"
            onChange={handleInputChange}
            value={inputs.username}
          />
        </Form.Field>
        <Form.Field required>
          <label>Password</label>
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            type="password"
            placeholder="password"
            name="password"
            onChange={handleInputChange}
            value={inputs.password}
          />
        </Form.Field>
        <Button type="submit" fluid size="large">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
