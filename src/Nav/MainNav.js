import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Button, Container } from "semantic-ui-react";

const MainNav = props => {
  const [activeItem, setActiveItem] = useState("");

  return (
    <Menu>
      <Container>
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={activeItem === "home"}
          content="Home"
          onClick={() => setActiveItem("home")}
        />
        <Menu.Item
          as={Link}
          to="/login"
          name="login"
          active={activeItem === "login"}
          content="Login"
          onClick={() => setActiveItem("login")}
        />
        <Menu.Item
          as={Link}
          to="/signup"
          name="signup"
          active={activeItem === "signup"}
          content="Sign Up"
          onClick={() => setActiveItem("signup")}
        />

        <Menu.Item
          name="logout"
          active={activeItem === "logout"}
          content="Logout"
          onClick={() => {
            localStorage.clear()
            //.then(() => props.history.push('/'));
            
          }}
        />
        <Menu.Item
          as={Link}
          to="/doctors"
          name="doctors"
          active={activeItem === "doctors"}
          content="Doctors"
          onClick={() => setActiveItem("doctors")}
        />        
      </Container>
    </Menu>
  );
};

export default MainNav;
