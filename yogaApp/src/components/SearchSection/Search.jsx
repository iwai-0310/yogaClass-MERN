import React from 'react'
import '../../styles/Component.css';
import banner from '../../assets/searchBannerImg-removebg.png';
import SearchBox from '../SearchSection/SearchBox';

const Search = () => {
  return (
    
    <div id="searchsec" className="w-full h-screen bg-gray-300 flex justify-center items-center">
    {/* Add the banner image as a background */}
    <div
        className="w-full h-5/6 bg-center bg-contain bg-no-repeat rounded-xl"
        style={{ backgroundImage: `url(${banner})` }}
    >
        {/* Center the search box */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <SearchBox />
        </div>
    </div>
</div>
  )
}

export default Search