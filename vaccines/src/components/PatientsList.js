import React, { Fragment, useEffect } from "react";
import PatientForm from "./PatientForm";
import Patient from "./Patient";
import { Loader, Header, Card } from 'semantic-ui-react';

const PatientsList = ({
  fetchPatients,
  patients,
  fetchingPatients,
  savePatient,
  deletePatient
}) => {
  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <Fragment>
      <h1>Logged In</h1>
      {fetchingPatients ? (
        <Fragment>
        <Loader active inline className="slow red" />
        </Fragment>
      ) : (
        <Card.Group>
          {patients.map(f => (
            <Patient patient={f} key={f.id} deletePatient={deletePatient} />
          ))}
        </Card.Group>
      )}
      <PatientForm onSubmit={savePatient} />
    </Fragment>
  );
};

export default PatientsList;
