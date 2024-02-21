import React, { useState, useEffect } from 'react'
import Search from '../components/SearchSection/Search';
import Cardcc from '../components/Card/cardCompact'

const apiForCardData='http://localhost:3000/api/v1/cards';

const home = () => {
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
        <Search/>
        {/* Map the card with data from state(cardsData) */}
        {cardsData.map((card) => (
        <Cardcc
          key={card.id}
          title={card.title}
          price={card.price}
          imgurl={card.imgUrl} 
        />
      ))}
    </div>
  )
}

export default home