import AxiosAuth from "../AxiosAuth";
import axios from "axios";
import { useState, useEffect } from "react";

const useDataApi = (initialLogin, initialData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(initialData);
  const [logins, setLogins] = useState(initialLogin);
  const [loggedIn, setLoggedIn] = useState(false);  

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios.post(
          "https://immu-tracker2.herokuapp.com/api/staff/login",
          logins
        );
        setData(result.data);
        console.log(result);
        localStorage.setItem("Token", result.data.token);
        setLoggedIn(true);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [logins]);

  return [{ data, isLoading, isError,setLoggedIn }, setLogins];
};
export default useDataApi;
