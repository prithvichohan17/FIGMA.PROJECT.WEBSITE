'use client';
import React from 'react'
import Image from 'next/image';


export default function NewCollectionBanner() {
  return (
  
        <div className="relative w-full h-[400px] flex items-center justify-end
         bg-gray-100">
          <div className="absolute inset-0">
            <Image 
              src="/bank.png" 
              alt="New Collection" 
              width={900}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative bg-[#FCEED4] p-8 max-w-lg rounded-sm shadow-lg text-center">
            <p className="text-sm font-semibold text-gray-600">New Arrival</p>
            <h2 className="text-2xl font-bold text-yellow-600">Discover Our New Collection</h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="mt-4 bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition">
              BUY NOW
            </button>
          </div>
        </div>
      );
    }
    
    

  

