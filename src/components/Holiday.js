import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleHoliday from "./SingleHoliday";
const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

const Holiday = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(0);

  // func for choose new select value and next holiday
  const nextHoliday = () => {
    setSelected( prevValue => {
      if (prevValue + 1 === data.data.length) {
        return 0;
      } else {
        return prevValue + 1;
      }
    });
  }

  // func for choose prev holiday
  const prevHoliday = () => {
    setSelected( prevValue => {
      if (prevValue - 1 < 0) {
        return (data.data.length - 1);
      } else {
        return prevValue - 1;
      }
    });
  }

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
        data.data.length > 0 ? <SingleHoliday{...data.data[selected]} next={nextHoliday} prev={prevHoliday}/> : <h4>No Vacanze</h4>
      }
    </>
  } else {
    return <h>...Loading</h>
  }
};

export default Holiday;
