import React, { useState, useEffect } from 'react'
import logo from '../../assets/app-logo.svg';
import '../../styles/Component.css';

const Header = () => {

    // add state to handle sticky nature for header
    const [sticky, setSticky] = useState(false);
    
    //useEffect to target scroll of 200px
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setSticky(scrollTop >= 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/*header*/}
            <header className={`header border-x-2 border-b-2 mb-4 ${sticky ? 'is-sticky' : ''}`}>
                {/* left area of the header for logo */}
                <div className="flex items-center mx-2">
                    {/* add logo image here */}
                    <img src={logo} alt="app Logo svg" className="h-12 w-12 mx-2" />
                    {/* add app name here */}
                    <h1 className="text-lg font-semibold"> Brand logo</h1>
                </div>

                {/* Right area of the header for explore and Login */}
                <div className="flex items-center space-x-4 mx-2">
                    {/* add login button */}
                    <button className="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded">Login</button>
                    {/* add Explore button */}
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">Explore</button>
                </div>
            </header>
        </>
    )

}

export default Header;