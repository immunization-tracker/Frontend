import React, { Fragment, useEffect, useState } from "react";
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { fetchPatients, deletePatient, savePatient} from '../actions'
import PatientForm from "./PatientForm";
import Patient from "./Patient";
import { Loader, Header, Card } from "semantic-ui-react";

const PatientsList = props => {

useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <Fragment>
      <h1>Welcome</h1>
      {props.fetchingPatients ? (
        <Fragment>
          <Loader active inline className="slow red" />
        </Fragment>
      ) : (
        <Card.Group>
          {console.log(props.patients) ||
            props.patients.map(p => (
              <Patient patient={p} key={p.id} deletePatient={props.deletePatient} />
            ))}
        </Card.Group>
      )}
      <PatientForm onSubmit={props.savePatient} />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  patients: state.patients,
  fetchPatients:  state.fetchPatients,
  deletePatient: state.deletePatient,
  fetchingPatients: state.fetchingPatients
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      fetchPatients,
      
      deletePatient,
      savePatient
    }
  )(PatientsList)
);
