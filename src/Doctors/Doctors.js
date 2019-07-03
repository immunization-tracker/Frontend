import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import AxiosAuth from "../AxiosAuth";
import { Card, Button, Loader, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {
  useRoutes,
  useRedirect,
  navigate,
  A,
  usePath,
  setLinkProps
} from "hookrouter";

import RouterContext from "../RouterContext";

const Doctors = props => {
  const routeProps = {
    match: props.match,
    history: props.history,
    location: props.location
  };

  const url = "http://localhost:4000/api/doctors";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const result = await AxiosAuth().get(url);
    const { data } = await result;
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
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
            <Card key={d.id} doctorData={d}>
              <Card.Content
                header={d.name}
                meta={d.username}
                description={`Welcome dr!`}
              />
              <Card.Content extra>
                <div className="ui two buttons">
                  <Link to={`/doctor/${d.id}`} id={d.id}>
                    <Button>Go to Patients</Button>
                  </Link>
                  }
                </div>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      )}
    </Fragment>
  );
};

export default Doctors;
