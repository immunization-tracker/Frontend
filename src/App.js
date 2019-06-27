import React, { useState, useEffect,useContext } from "react";
import { useRoutes, useRedirect, navigate, A , usePath} from "hookrouter";
import "./assets/fomantic/dist/semantic.css";
import { Container } from "semantic-ui-react";
import PrivateRoute from "./PrivateRoute";
import { RootContext } from './auth/RootContext';
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import MainNav from "./Nav/MainNav";
import Doctors from "./Doctors/Doctors";
//import DoctorsHome from "./Doctors/DoctorsHome";
import Doctor from "./Doctors/Doctor";
import {Welcome} from "./Welcome/Welcome";
//import Patients from './Patients/Patients';



const routes = {
  "/": () => <Welcome />,
  "/login": () => <Login />,
  "/signup": () => <SignUp />,
  "/doctors": () => <Doctors />,
  '/doctor/:id': ({id}) => <Doctor id={id}/>
  
};

const NotFoundPage = () => {
  const path = usePath();
  return (
    <React.Fragment>
      <h3>404 - Not Found</h3>
      <p>Current path: {path}</p>
    </React.Fragment>
  );
};

const App = () => {
  const { authenticated } = useContext(RootContext);
  return (
    <Container style={{ margin: 20 }}>
      <MainNav />
      {useRoutes(routes)}
    </Container>
  );
};

export default App;


