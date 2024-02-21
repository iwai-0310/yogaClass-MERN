import React from 'react'
import placeHolderImg from '../../assets/placeHolderImage.jpg'

const cardCompact = ({price,time,name,imgUrl}) => {
    return (
        <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div class="relative pb-48 overflow-hidden">
                     {/* use props.imgUrl to fill */}
                    <img class="absolute inset-0 h-full w-full object-cover" 
                    src={imgUrl}
                     alt="" />
                </div>

                <div className="p-4 border-t border-b text-xs text-gray-700 flex items-center justify-between">
                    {/* Place time (in minutes) on the left */}
                    <span className=" mb-1">
                        {time} mins
                    </span>
                    {/* Place price on the right */}
                    <span className=" mb-1">
                        {price}
                    </span>
                </div>
                <div class="p-4 flex items-center text-sm text-gray-600 flex justify-center">
                     {/* use props.title */}
                    <span class="ml-2">{name}</span>
                </div>
            </a>
        </div>
    )
}

export default cardCompact