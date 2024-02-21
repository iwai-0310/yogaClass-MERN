import { useState } from 'react';
import Header from '../src/components/Header/Header';
import Search from '../src/components/SearchSection/Search';
import SearchBox from '../src/components/SearchSection/SearchBox';
import Cardcc from '../src/components/Card/cardCompact'

import './App.css'

function App() {
  
  return (
    <div >
    <Header/> 
                                                                                    
    <Search/>
    <div class="flex flex-wrap -mx-4">
    <Cardcc/>
    <Cardcc/>
    <Cardcc/>
    <Cardcc/>
    <Cardcc/>
    <Cardcc/>
    </div>
    </div>
  )
}

export default App
