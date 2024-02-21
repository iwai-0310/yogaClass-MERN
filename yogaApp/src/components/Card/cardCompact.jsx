import React from 'react'
import placeHolderImg from '../../assets/placeHolderImage.jpg'

const cardCompact = () => {
    return (
        <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div class="relative pb-48 overflow-hidden">
                    <img class="absolute inset-0 h-full w-full object-cover" 
                    src={placeHolderImg}
                     alt="" />
                </div>

                <div class="p-4 border-t border-b text-xs text-gray-700">
                    <span class="flex items-center mb-1">
                        Price
                    </span>
                </div>
                <div class="p-4 flex items-center text-sm text-gray-600">
                    <span class="ml-2">34 Bewertungen</span>
                </div>
            </a>
        </div>
    )
}

export default cardCompact