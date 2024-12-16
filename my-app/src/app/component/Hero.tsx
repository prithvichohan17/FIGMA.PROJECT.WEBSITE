import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div>
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
