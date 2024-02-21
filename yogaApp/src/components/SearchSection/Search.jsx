import React from 'react'
import '../../styles/Component.css';
import banner from '../../assets/searchBannerImg-removebg.png';
import SearchBox from '../SearchSection/SearchBox';

const Search = () => {
  return (
    <div id='searchsec' className='w-dvh h-dvh bg-gray-300 border-x-2 border-b-2 object-fill flex justify-center items-center '>
      {/* add the banner image here */}
      <img  src={banner} alt="banner image here"  />
      {/* Center the search box */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6">
        <SearchBox />
      </div>
    </div>
  )
}

export default Search