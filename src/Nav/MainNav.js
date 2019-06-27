import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Button, Container } from "semantic-ui-react";

const MainNav = () => {
  const [activeItem, setActiveItem] = useState("");

  return (
    <Menu>
      <Container>
        <Menu.Item
          as={Link}
          to="/"
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
          name="help"
          active={activeItem === "help"}
          content="Help"
          onClick={() => setActiveItem("help")}
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
