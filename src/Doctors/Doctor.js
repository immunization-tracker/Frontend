import React, { Fragment, useState, useEffect, useCallback } from "react";
import { Card, Button } from "semantic-ui-react";
import axios from "axios";
import AxiosAuth from "../AxiosAuth";
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
  const [isError, setIsError] = useState(false);
  //const [url, setUrl] = useState(`http://localhost:4000/api/${id}/records`, id);
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

  const deleteUser = e => {
    setUsers(users.filter(user => user.record_id !== e));
    setCurrentUser("");
    deleteData(e);
  };

  const deleteData = async (e) => {
    try {
      const result = await AxiosAuth().delete(
        `https://immu-tracker2.herokuapp.com/api/${e}/records`,e
        
      );
    } catch (error) {
      setIsError(true);
    }
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
    setUsers(users.map(user => (user.record_id === id ? updatedUser : user)));
    reviseData(id, updatedUser);
  };

 const reviseData = async (id, updatedUser) => {
    try {
      const result = await AxiosAuth().put(
        `https://immu-tracker2.herokuapp.com/api/${id}/records`, (id, updatedUser)
        
      );
    } catch (error) {
      setIsError(true);
    }
  };



  const [currentUser, setCurrentUser] = useState("");
  const [editing, setEditing] = useState(null);
  const [revising, setRevising] = useState(null);

  return (
    <RouterContext.Provider value={routeProps}>
      <Card.Group itemsPerRow={2} centered>
        {users.map((p, index) => (
          <Patient
            key={index}
            dId={id}
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
