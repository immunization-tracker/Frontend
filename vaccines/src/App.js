import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './assets/fomantic/dist/semantic.css';
import { Container } from 'semantic-ui-react';
import PrivateRoute from './PrivateRoute';

import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import MainNav from "./Nav/MainNav";
import Doctors from './Doctors/Doctors';


const App = () => {
  return (
    <Container>
      <Router>
        <Route path="/" component={MainNav} />
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/doctors" component={Doctors} />
        <PrivateRoute exact path="/patients" component={PatientsList} />
        <PrivateRoute exact path='/patients/new' component={PatientForm} />
          {/*<PrivateRoute exact path = '/patients/:id' component={ItemDetail} />*/}
          {/*<PrivateRoute exact path = '/patients/:id/edit' component={ItemEditForm} />*/}
      </Router>
    </Container>
    
  );
};


export default App;