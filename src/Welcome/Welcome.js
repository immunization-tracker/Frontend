import React from 'react'
import { Container, Button, Icon, Header } from "semantic-ui-react";

export const Welcome = () => (
  <Container style={{ height: "100vh" }}>
    <Header
      as='h1'
      content='Welcome to Immunizations Tracking'
      inverted
      style={{
        fontSize:'4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop:'3em',
      }}
    />
    <Header
      as='h2'
      content='Immunization History In Your Pocket.'
      inverted
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop:  '1.5em',
      }}
    />
{/*    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>*/}
  </Container>
);