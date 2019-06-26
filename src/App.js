import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/fomantic/dist/semantic.css";
import { Container } from "semantic-ui-react";
import PrivateRoute from "./PrivateRoute";

import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import MainNav from "./Nav/MainNav";
import Doctors from "./Doctors/Doctors";
import Doctor from "./Doctors/Doctor";
//import Patients from './Patients/Patients';

const App = () => {
  return (
    <Container style={{ margin: 20 }}>
      <Route path="/" component={MainNav} />
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/doctors" component={Doctors} />
      <Route exact path="/doctor/:id" component={Doctor} />
      {/*<PrivateRoute exact path="/patients" component={PatientsList} />*/}
      {/*<PrivateRoute exact path='/patients/new' component={PatientForm} />*/}
      {/*       <PrivateRoute exact path = '/patients/:id' component={ItemDetail} />*/}
      {/*<PrivateRoute exact path = '/patients/:id/edit' component={ItemEditForm} />*/}
    </Container>
  );
};

export default App;
