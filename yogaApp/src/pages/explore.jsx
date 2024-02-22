import React, { useState, useEffect } from 'react'
import Filter from '../components/Filter/Filter'
import Cardcc from '../components/Card/cardCompact'
import ExploreBanner from '../components/Banner/exploreBanner'
//api endpoint for all card data
const apiForCardData = 'http://localhost:3000/api/v1/cards';


const explore = () => {

  // use State for fill the card 
  const [cardsData, setCardsData] = useState([]);

  //use Effect to set card data
  useEffect(() => {
    // Fetch data from your API
    fetch(apiForCardData)
      .then((response) => response.json())
      .then((data) => setCardsData(data.cards));
  }, []);

  return (
    <div>
      <ExploreBanner title="Explore more" curPage="explore" />
    <div className='h-dvh w-dvh flex justify-center' >
      <div className='w-2/6 h-24 max-h-48  min-h-24 min-w-48 z-10 bg-gray-300'>
        <Filter/>  
      </div>

      <div className='w-full h-screen bg-transparent'>
        {/* Map the card with data from state(cardsData) */}
        <div className='flex flex-wrap -mx-4 bg-gray-300 mx-2'>
        {cardsData.map((card) => (
        <Cardcc
          key={card._id}
          time={card.time}
          price={card.price}
          imgUrl={card.image} 
          name={card.name}
          id={card._id}
        />
      ))}</div>
      </div>
    </div>
    </div>
  )
}

export default explore