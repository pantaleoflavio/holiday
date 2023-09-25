import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleHoliday from "./SingleHoliday";
const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

const Holiday = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(0);

  // func fetch data from api
  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  // Conditional return controlling to have resolve the promise
  if (data.success) {
    return <>
      {
        //ternary operator for to control number of holiday
        data.data.length > 0 ? <SingleHoliday{...data.data[selected]}/> : <h4>No Vacanze</h4>
      }
    </>
  } else {
    return <h>...Loading</h>
  }
};

export default Holiday;
