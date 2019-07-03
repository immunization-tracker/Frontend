import React, { Fragment, useState, useEffect, useCallback } from "react";
import { Card, Button } from "semantic-ui-react";
import axios from "axios";
import AxiosAuth from "../AxiosAuth";
import { setLinkProps } from "hookrouter";
import Patient from "../Patients/Patient";
import useRouteProps from "../UseRouteProps";
import RouterContext from "../RouterContext";

const Doctor = props => {
  const routeProps = {
    match: props.match,
    history: props.history,
    location: props.location
  };
  const id = props.match.params.id;
  const [users, setUsers] = useState([]);
  const [url, setUrl] = useState(`http://localhost:4000/api/${id}/records`, id);
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

  const deleteUser = e => {
    setUsers(users.filter(user => user.record_id !== e));
    setCurrentUser("");
  };

  const handleUser = e => {
    setCurrentUser(e);
    setEditing(e);
    console.log(editing);
  };
  const handleRevise = e => {
    setRevising(e);
    console.log(editing);
  };

const [revisedUser, setRevisedUser] = useState([]);

  const reviseUser = (id, updatedUser) => {
    //setEditing(false);

    setUsers(users.map(user => (user.record_id === id ? updatedUser : user)));
  };

  const [currentUser, setCurrentUser] = useState("");
  const [editing, setEditing] = useState(null);
  const [revising, setRevising] = useState(null);

  return (
    <RouterContext.Provider value={routeProps}>
      <Card.Group>
        {users.map((p, index) => (
          <Patient
            key={index}
            id={p.record_id}
            patient={p}
            handleUser={handleUser}
            editing={editing}
            deleteUser={deleteUser}
            setRevising={setRevising}
            revising={revising}
            setRevisedUser={setRevisedUser}
            revisedUser={revisedUser}
            reviseUser={reviseUser}
          ></Patient>
        ))}
      </Card.Group>
    </RouterContext.Provider>
  );
};

export default Doctor;
