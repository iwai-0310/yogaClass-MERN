import React from 'react'
import logo from '../../assets/app-logo.svg';
const Header = () => {
    return (
        <>
            <header class="bg-gray-800 text-white py-2 flex justify-between items-center w-full ">
                {/* left area of the header for logo */}
                <div class="flex items-center mx-2">
                    <img src={logo} alt="app Logo svg" class="h-16 w-16 mx-2"  />
                    <h1 class="text-lg font-semibold">Your Brand</h1>
                </div>
            
                {/* Right area of the header for explore and Login */}
                <div class="flex items-center space-x-4 mx-2">
                    <button class="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded">Login</button>
                    <button class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">Explore</button>
                </div>
            </header>
        </>
    )

}

export default Header;