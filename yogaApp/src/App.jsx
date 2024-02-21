import { useState } from 'react';
import Header from '../src/components/Header/Header';
import { Outlet } from "react-router-dom";
// Import your context
import userContext from './userContext'; 

import './App.css'

function App() {
  // Initialize user state
  const [user, setUser] = useState(null);
  return (
    <div >
      <Header/> 
      <div className='min-h-screen'>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
