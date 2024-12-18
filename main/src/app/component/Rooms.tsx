// import React from 'react'
// import Image from 'next/image'


// export default function Rooms() {
//   return (

//             <div className="text-left pl-[100px] pr-[42px]  gap-[25px] bg-[#fdf7f1] py-12 flex items-center ">
//               <div className="flex flex-col gap-2">
//                 <h2 className="text-[40px] font-bold text-Gray1 leading-[42px]">
//                   50+ Beautiful rooms inspiration
//                 </h2>
//                 <p className="text-[16px] font-medium text-Gray2">
//                   Our designer already made a lot of beautiful prototype of rooms
//                   that inspire you.
//                 </p>

//                 <button className="bg-yellow-700 text-black px-[36px] py-[12px] font-semibold text-[16px] w-fit">
//                 Explore More
//               </button>

//               <div className="object-cover object-center rounded">
//               <Image src='/inner.png'alt='inner'width={900}height={900}/>

//               </div>
//               </div>
              
              
//             </div>
    
        
//   )
// };


//check gpt

import React from 'react'

export default function Rooms() {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h2 className="text-[40px] font-bold text-black leading-[42px]">
                   50+ Beautiful rooms inspiration            
                     </h2>
      <p className="mb-8 leading-relaxed text-black">
      Our designer already made a lot of beautiful
       prototipe of rooms that inspire you
      </p>
      <div className="flex w-full md:justify-start justify-center items-end">
      
        <button className="inline-flex text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Explore More
        </button>
   </div>
      
    </div>
  </div>
</section>
    </div>
  )
};
