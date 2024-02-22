import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";

//api endpoint to access all data
const apiUrl= 'http://localhost:3000/api/v1/cards';
const CardBookingView = () => {
    //set state to save card clicked details
    const [data, setData] = useState([]);
    //access the product id
    const { id } = useParams();

    //access all the products data
  //now try and fetch all the data
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const apiData = data.cards;
        console.log("this default data is apiData is", typeof apiData);
        console.log("and the value of the apiData is", apiData);
        setData(apiData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div><h1>this </h1></div>
  )
}

export default CardBookingView