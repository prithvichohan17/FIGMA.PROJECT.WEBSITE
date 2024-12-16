import React from 'react'
import Image from 'next/image'


export default function OurProducts() {
  return (
       <div className="w-full pt-[30px] md:pt-[67px] pb-[50px] bg-lightBG">
            <div className="text-center relative w-full md:top-5 top-0">
                <h2 className="text-[30px] md:text-[40px] font-bold text-Gray1">Our Products</h2>
            </div>
            <div className="w-[1200px] mx-auto mt-10 text-white text-center grid md:grid-cols-2 lg:grid-cols-3 gap-4">
               <Image src='/one.png'alt='one'width={300}height={300}/>
               <Image src='/sec.png'alt='sec'width={300}height={300}/>
               <Image src='/thri.png'alt='thri'width={300}height={300}/>
               <Image src='/yo.png'alt='yo'width={300}height={300}/>
               <Image src='/img.png'alt='img'width={300}height={300}/>
               <Image src='/prite.png'alt='prite'width={300}height={300}/>
               <Image src='/pin.png'alt='pin'width={300}height={300}/>
               <Image src='/potty.png'alt='potty'width={300}height={300}/>

            </div>
            <div className="flex items-center justify-center mt-10">
            <button className="bg-primary Border-1px bg-white line-clamp-2 text-yellow-600 npmcd rgba(184,142,42,4) px-[36px] py-[12px] font-semi bold text-[16px] w-fit ">
               Show More
               </button>
            </div>
    </div>
  );
}
