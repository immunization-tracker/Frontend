import React from 'react';
import styled from 'styled-components';
import { Card, Button } from 'semantic-ui-react';


const Patient = ({ patient, deletePatient }) => {
  return (
    <Card>
    <Card.Content 
    header={patient.name} 
    meta={patient.gender + "|" + patient.email}
    description={patient.vaccine}
    />

    </Card>
  );
};

export default Patient;
