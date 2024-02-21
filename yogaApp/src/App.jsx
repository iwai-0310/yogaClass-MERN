import { useState } from 'react';
import Header from '../src/components/Header/Header';
import { Outlet } from "react-router-dom";


import './App.css'

function App() {
  
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
