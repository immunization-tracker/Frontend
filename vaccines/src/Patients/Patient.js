import React from "react";
import styled from "styled-components";
import { Card, Button } from "semantic-ui-react";

const Patient = ({ patient, deletePatient }) => {
  return (
    <Card>
      <Card.Content
        header={patient.patient_name}
        //meta={patient.gender + '|' + patient.email}
        description={patient.DOB}
      />
      <Card.Content extra>
        <div className="ui two buttons">
          <Button onClick={() => deletePatient(patient)}>x</Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default Patient;
