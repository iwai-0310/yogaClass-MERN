import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

//api endpoint to access all data
const apiUrl = 'http://localhost:3000/api/v1/cards';
const CardBookingView = () => {
    //set state to save card clicked details
    const [data, setData] = useState([]);
    //access the card id
    const { id } = useParams();

    //access all the pcard data
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

    const result = data.length > 0 ? data.filter((p) => p._id === id) : [];

    return (
        <div className='w-dvh h-dvh flex items-center justify-around'>
            {result.map((item) => (


                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <a href="#">
                        <img class="rounded-t-lg" src={item.image} alt={item.name} />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center justify-between">
                            <span>Rs.{item.price}</span>
                            <span>{item.time} mins</span>
                        </p>
                        <form action="">
                    <label for="meeting">Book a class:</label>
                    <div>
                    <input type="datetime-local" id="meeting" name="meeting" />
                    </div>
                    <div className='flex justify-center'>
                    <input type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4" /></div>
                </form>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default CardBookingView