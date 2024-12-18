import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div>

    <div className="bg-yellow-50  p-8 rounded-md  text-center">
      {/* New Arrival Text */}
      <p className=" text-sm font-semibold text-gray-500">
        New Arrival
      </p>

      {/* Title */}
      <h1 className="text-4xl font-bold text-yellow-800 mt-2 mb-4">
        Discover Our <br />
        <span className="text-yellow-800">New Collection</span>
      </h1>

      {/* Description */}
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
        tellus, luctus nec ullamcorper mattis.
      </p>

      {/* Button */}
      <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-md">
        BUY NOW
      </button>
    </div>






























      <Image src='/back.jpg'alt='back' width={2000}height={2000}></Image>
      
      <div>
      <h1 className='text-center font-bold text-4xl text-black'>Browse The Range</h1>
      <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Ut elit tellus, luctus nec ullamcorper mattis.</p>


     <div className="w-[1200px] mx-auto mt-10 text-white text-center grid md:grid-cols-2 lg:grid-cols-3 gap-4">
     <Image src='/pic.png'alt='pic' width={800}height={800}/>
     <Image src='/pic2.png'alt='pic2' width={800}height={800}/>
     <Image src='/pic3.png'alt='pic3' width={800}height={800}/>
     
     <div>
     
     </div>

     
     </div>
      </div>

      </div>
      
    
    
  )
};
