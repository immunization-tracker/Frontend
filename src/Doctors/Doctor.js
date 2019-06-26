import React from "react";
import { Card, Button } from "semantic-ui-react";

const Doctor = (doctor) => {
  return (
    <Card>
      <Card.Content
        header={doctor.name}
        //meta={patient.gender + '|' + patient.email}
        description={doctor.username}
      />
      <Card.Content extra>
        <div className="ui two buttons">
          <Button >x</Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default Doctor;
