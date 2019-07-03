import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import AxiosAuth from "../AxiosAuth";
import { Card, Button, Loader, Header } from "semantic-ui-react";
import {
  useRoutes,
  useRedirect,
  navigate,
  A,
  usePath,
  setLinkProps
} from "hookrouter";
import Doctor from "./Doctor";



 function DoctorsList({ doctors })  {
  return (
    <Fragment>
    {console.log(doctors)}
      <h1>Welcome Doctors</h1>
      {doctors.map(doctor => {
        return <Doctor key={doctor.id} doctor={doctor} />;
      })}
    </Fragment>
  );
};

export default DoctorsList;
