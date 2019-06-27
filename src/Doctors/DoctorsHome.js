import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import AxiosAuth from "../AxiosAuth";
import { Card, Button, Loader, Header } from "semantic-ui-react";
import Doctor from './Doctor';

const DoctorsHome = () => {
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
    <Fragment>
      <h1>Welcome Doctors</h1>
      {isLoading ? (
        <Fragment>
          <Loader active inline className="slow red" />
        </Fragment>
      ) : (
        <Card.Group>
          {data.map(d => (
            <Doctor key={d.id} doctor={d} />
            ))}

        </Card.Group>
      )}
    </Fragment>
  );
};

export default DoctorsHome;
