import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const Doctors = () => {
  const [data, setData] = useState({ characters: [] });
  const [url, setUrl] = useState("https://swapi.co/api/people/1/");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(url);
      setData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return (
    <Fragment>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          <li key={data.name}>{console.log(data) || data.name}</li>
          <button type="button" onClick={() => setUrl(`${data.homeworld}`)}>
            Go to planet
          </button>
        </ul>
      )}
    </Fragment>
  );
};

export default Doctors;
