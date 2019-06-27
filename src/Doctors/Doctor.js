import React, { Fragment, useState, useEffect } from "react";
import { Card, Button } from "semantic-ui-react";
import axios from "axios";
import AxiosAuth from "../AxiosAuth";

const Doctor = props => {
  const id = props.id;
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(
    `https://immu-tracker2.herokuapp.com/api/${id}/records`,
    id
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
    <Card.Group>
      {data.map(d => (
        <Card key={d.record_id} doctor={d}>
          <Card.Content
            header={d.patient_name}
            meta={d.Doctor }
            description={d.DOB}
          />
          <Card.Content extra>
            <div className="ui two buttons">
              <Button >x</Button>
            </div>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default Doctor;


