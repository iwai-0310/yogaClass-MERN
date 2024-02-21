import { useState } from 'react';
import Header from '../src/components/Header/Header';
import Search from '../src/components/SearchSection/Search';
import SearchBox from '../src/components/SearchSection/SearchBox';

import './App.css'

function App() {
  
  return (
    <div >
    <Header/> 
    <SearchBox/>                                                                                      
    <Search/>
    </div>
  )
}

export default App
