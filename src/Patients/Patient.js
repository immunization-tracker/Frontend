import { Card, Button, Form, Header } from "semantic-ui-react";
import React, { Fragment, useState, useEffect, useCallback } from "react";
import useRouteProps from "../UseRouteProps";
import EditPatient from "./EditPatient";

const Patient = props => {
  const [match, location, history] = useRouteProps();

  return (
    <Card
      onClick={() => {
        props.handleUser(props.id);
      }}
    >
      <Card.Content
        header={props.patient.patient_name}
        meta={props.patient.Doctor}
        description={props.patient.DoB}
        icon="user"
        iconposition="left"
      />

      {props.editing == props.id ? (
        <Card.Content extra>
          {console.log(location)}
          <div className="ui two buttons">
            <Button
              onClick={() => {
                props.deleteUser(props.id);
              }}
            >
              Remove Patient
            </Button>

            <Button onClick={() => props.setRevising(props.id)}>
              Edit Patient
              {console.log(props.patient)}
            </Button>
          </div>

          {props.revising == props.id ? (
            <EditPatient
              patient={props.patient}
              reviseUser={props.reviseUser}
              setRevisedUser={props.setRevisedUser}
              revisedUser={props.revisedUser}
              dId={props.dId}
            />
          ) : (
            <Fragment></Fragment>
          )}
        </Card.Content>
      ) : (
        <Fragment></Fragment>
      )}
    </Card>
  );
};

export default Patient;
