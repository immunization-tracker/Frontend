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
import DoctorsList from "./DoctorsList";

const DoctorsApp = () => {
  const url = "http://localhost:4000/api/doctors";
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDoctors = async () => {
    const doctorsData = await AxiosAuth().get(url);
    const { doctors } = await doctorsData;
    setDoctors(doctors);
    setLoading(false)
  };

  useEffect(() => {
    fetchDoctors()
  }, [])

  return (
    <div>
    <Fragment>
      <h1>Welcome Doctors</h1>
      {loading ? (
        <Fragment>
          <Loader active inline className="slow red" />
        </Fragment>
      ) : (
        <DoctorsList doctors={doctors} />
      )}
    </Fragment>
    </div>
  );
};

export default DoctorsApp;
