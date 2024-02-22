import React from 'react'
import placeHolderImg from '../../assets/placeHolderImage.jpg'
import { Link } from "react-router-dom";

const cardCompact = ({price,time,name,imgUrl,id}) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <a href="#" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div className="relative pb-48 overflow-hidden">
                    <img className="absolute inset-0 h-full w-full object-cover rounded-t-lg" src={imgUrl} alt="" />
                </div>

                <div className="p-4 border-t border-b text-xs text-gray-700 flex items-center justify-between">
                    <span className="mb-1 font-semibold">{time} mins</span>
                    <span className="mb-1 font-semibold">${price}</span>
                    {/* <span className="mb-1 font-semibold">{id}</span> */}
                    <Link to={`/book/${id}`}>
                        <button>
                        Book
                        </button></Link>
                </div>
                <div className="p-4 flex items-center text-sm text-gray-600">
                    <span className="ml-2">{name}</span>
                </div>
            </a>
        </div>
    )
}

export default cardCompact