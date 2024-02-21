import React from 'react'
import '../../styles/Component.css';
import banner from '../../assets/searchBannerImg-removebg.png';
const Search = () => {
  return (
    <div id='searchsec' className='w-dvh h-dvh bg-gray-300 border-x-2 border-b-2 object-fill flex justify-center items-center '>
      {/* add the banner image here */}
      <img  src={banner} alt="banner image here"  />
    </div>
  )
}

export default Search