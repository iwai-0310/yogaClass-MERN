import React, { useState, useEffect } from 'react'
import logo from '../../assets/app-logo.svg';
import '../../styles/Component.css';

const Header = () => {

  

    return (      
            <header className={`header h-16 border-x-2 border-b-2 mb-1 w-dvh  flex justify-between items-center`}>
                {/* left area of the header for logo */}
                <div className="flex items-center mx-2">
                    {/* add logo image here */}
                    <img src={logo} alt="app Logo svg" className="h-12 w-12 mx-2   " />
                    {/* add app name here */}
                    <h1 className="text-lg font-semibold  left-28"> Brand logo</h1>
                </div>

                {/* Right area of the header for explore and Login */}
                <div className="flex items-center space-x-4 mx-2 ">
                    {/* add login button */}
                    <button className="h-8 bg-black hover:bg-gray-900 text-white px-4 py-2 rounded
                    flex items-center justify-center">
                        <span>Login</span></button>
                    {/* add Explore button */}
                    <button className="h-8 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2
                     rounded flex items-center justify-center">
                        <span>Explore</span></button>
                </div>
            </header>
        
    )

}

export default Header;