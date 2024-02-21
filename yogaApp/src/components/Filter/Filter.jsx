import React, { useState } from 'react';

const Filter = () => {

    // add state to handle select value
    const [selectedItem, setSelectedItem] = useState('Filter by ...');

    //update the value 
    const handleSelect = (option) => {
        setSelectedItem(option); 
    };

    const showDropdownOptions = () => {
        const options = document.getElementById('options');
        const arrowUp = document.getElementById('arrow-up');
        const arrowDown = document.getElementById('arrow-down');
        options.classList.toggle('hidden');
        arrowUp.classList.toggle('hidden');
        arrowDown.classList.toggle('hidden');
    };
  return (
    <div className="flex flex-row justify-center min-h-screen pt-4 bg-gray-100 min-w-screen">
            <div className="flex-none p-2">
                <button
                    onClick={showDropdownOptions}
                    className="flex flex-row justify-between w-48 px-2 py-2 text-gray-700 bg-white border-2 border-white rounded-md shadow focus:outline-none focus:border-blue-600"
                >
                    <span className="select-none">{selectedItem}</span>
                    <svg
                        id="arrow-down"
                        className="hidden w-6 h-6 stroke-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <svg
                        id="arrow-up"
                        className="w-6 h-6 stroke-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <div
                    id="options"
                    className="hidden w-48 py-2 mt-2 bg-white rounded-lg shadow-xl"
                >
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                        onClick={()=>handleSelect('Name (Asc)')}
                    >
                        Name (Asc)
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                        onClick={()=>handleSelect('Name (Desc)')}
                    >
                        Name (Desc)
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                        onClick={()=>handleSelect('Price (Asc)')}
                    >
                        Price (Asc)
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                        onClick={()=>handleSelect('Price (Desc)')}
                    >
                        Price (Desc)
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                        onClick={()=>handleSelect('Time (Asc)')}
                    >
                        Time (Asc)
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                        onClick={()=>handleSelect('Time (Desc)')}
                    >
                        Time (Desc)
                    </a>
                </div>
            </div>
        </div>
  )
}

export default Filter