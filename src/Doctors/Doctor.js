import React, { Fragment, useState, useEffect } from "react";
import { Card, Button } from "semantic-ui-react";
import axios from "axios";
import AxiosAuth from "../AxiosAuth";

const Doctor = ({ doctor }) => {

  const [data, setData] = useState([]);
  const [url, setUrl] = useState(
    "https://immu-tracker2.herokuapp.com/api/doctors"
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await AxiosAuth().get(url);
      setData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <Card>
      <Card.Content
        header={doctor.name}
        meta={doctor.username}
        description={`Welcome dr!`}
      />
      <Card.Content extra>
        <div className="ui two buttons">
          <Button>Go to Patients</Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default Doctor;

/doctor/${props.match.params.id}
//`https://immu-tracker2.herokuapp.com/api/${d.id}/records`