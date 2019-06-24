import React, { useState } from 'react';
import { Menu, Button, Container } from 'semantic-ui-react';

const Navigation = () => {
    const [activeItem, setActiveItem] = useState('login');

  return (
    <Menu>
      <Container>
        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          content='Login'
          onClick={()=> setActiveItem('login')}
          
        />
        <Menu.Item
          name='register'
          active={activeItem === 'register'}
          content='Register'
          onClick={() => setActiveItem('register')}
        />
       <Menu.Item
          name='help'
          active={activeItem === 'help'}
          content='Help'
          onClick={() => setActiveItem('help')}
        />
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          content='About'
          onClick={() => setActiveItem('about')}
        />        
      </Container>
    </Menu>
  );
};

export default Navigation;
