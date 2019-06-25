import { hot } from 'react-hot-loader/root';
import React, { Fragment, useEffect, useState } from 'react';
import LoginForm from './components/LoginForm';
import './App.css';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import {
  fetchPatients,
  savePatient,
  updatePatient,
  deletePatient,
  login,
  loadToken,
  logOut
} from './actions';
import Navigation from './components/Navigation';
import PatientsList from './components/PatientsList';
import './assets/fomantic/dist/semantic.css';
import { Container, Button } from 'semantic-ui-react';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.loggedIn ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect to='/login' />
      )
    }
  />
);

export const App = props => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      const token = localStorage.getItem('token');
      if (token && !props.token) {
        props.loadToken(token);
      }
      setInitialized(true);
    }
  });

  return (
    <Container>
      <Route path='/' component={Navigation} />
      <Route
        path='/login'
        render={() => (
          <Fragment>
            {props.loggedIn && <Redirect to='/patients' />}
            <LoginForm onSubmit={props.login} />
          </Fragment>
        )}
      />
      <PrivateRoute
        path='/patients'
        component={PatientsList}
        patients={props.patients}
        fetchingPatients={props.fetchingPatients}
        fetchPatients={props.fetchPatients}
        savePatient={props.savePatient}
        loggedIn={props.loggedIn}
        deletePatient={props.deletePatient}
      />
      <Route
        exact
        path='/'
        render={() =>
          props.loggedIn ? (
            <Redirect to='/patients' />
          ) : (
            <Redirect to='/login' />
          )
        }
      />
      {props.loggedIn && (
        <Button
          onClick={() => {
            localStorage.clear();
            props.logOut();
            props.history.push('/');
          }}
        >
          Log Out
        </Button>
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  ...state.patients
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      fetchPatients,
      savePatient,
      updatePatient,
      deletePatient,
      login,
      loadToken,
      logOut
    }
  )(hot(App))
);
