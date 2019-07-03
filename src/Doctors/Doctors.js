import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import AxiosAuth from "../AxiosAuth";
import { Card, Button, Loader, Icon, Feed } from "semantic-ui-react";
import { Link } from "react-router-dom";
import RouterContext from "../RouterContext";

const Doctors = props => {
  const routeProps = {
    match: props.match,
    history: props.history,
    location: props.location
  };

  //const url = "http://localhost:4000/api/doctors";
  const url = "https://immu-tracker2.herokuapp.com/api/doctors";

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
            <Card key={d.id}>
              <Feed>
                <Feed.Event>
                  <Feed.Label>
                    <Icon name="doctor"   />
                  </Feed.Label>

                  <Feed.Content>
                    <Feed.Date />
                    <Feed.Summary>{`Welcome Dr. ${d.username}!`}</Feed.Summary>
                  
                
                  
                    <Link to={`/doctor/${d.id}`} id={d.id}>
                      <Button>Go to Patients</Button>
                    </Link>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Card>
          ))}
        </Card.Group>
      )}
    </Fragment>
  );
};

export default Doctors;
