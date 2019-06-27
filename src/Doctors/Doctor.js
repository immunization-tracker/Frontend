import React from "react";
import { Card, Button } from "semantic-ui-react";

const Doctor = ({doctor}) => {
  return (
    <Card>
      <Card.Content
                header={doctor.name}
                meta={doctor.username}
                description={`Welcome dr!`}
      />
      <Card.Content extra>
        <div className="ui two buttons">
          <Button >Go to Patients</Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default Doctor;
