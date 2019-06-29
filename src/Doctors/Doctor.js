import React, { Fragment, useState, useEffect } from "react";
import { Card, Button } from "semantic-ui-react";
import axios from "axios";
import AxiosAuth from "../AxiosAuth";

const Doctor = props => {
  const id = props.id;
  const [users, setUsers] = useState([]);
  const [url, setUrl] = useState(
    `https://immu-tracker2.herokuapp.com/api/${id}/records`,
    id
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await AxiosAuth().get(url);
      setUsers(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const deleteUser = id => {
    setEditing(false);

    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  //const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState('');
  const [editing, setEditing] = useState(false);

  return (
    <Card.Group>
      {users.map(p => (
        <Card key={p.record_id} doctor={p}>
          <Card.Content
            header={p.patient_name}
            meta={p.Doctor}
            description={p.DOB}
            fluid
            icon="user"
            iconPosition="left"
          />
          <Card.Content extra>
            <div className="ui two buttons">
              <Button onClick={() => deleteUser(p)}>x</Button>
              <Button>y</Button>
            </div>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default Doctor;
