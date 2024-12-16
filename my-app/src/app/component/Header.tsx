import React from 'react'
import Image from 'next/image';



export default function Header() {
  return (
    <div>
      <header className='bg-white'>
        {/* Header Container */}
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo */}
          <Image src="/logo.png" alt=" Logo" width={40} height={40}/>

          <span className="ml-3 text-xl font-black">Furniro</span>

          {/* Navigation and Icons */}
          <div className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center space-x-32">
            {/* Navigation Links */}

            <nav className="flex space-x-6 gap-12">
              <a className="gap-10  hover:text-blank-900 ">Home</a>
              <a className=" gap-10 hover:text-blank-900 ">Shop</a>
              <a className="hover:text-blank-900 ">Blog</a>
              <a className="hover:text-blank-900">Contact</a>
            </nav>


            {/* Icons */}
            
<div className="flex flex-col sm:flex-row  justify-list  top-[150px] left-[250px]pr-[64px] pl-[62px]  items-center gap-11 mt-9 sm:mt-0">
  <Image src="/vector.png" alt="User Profile Icon" width={24} height={24} />
  <Image src="/search.png" alt="Search Icon" width={24} height={24} />
  <Image src="/shop.png" alt="Shopping Cart Icon" width={24} height={24} />
  <Image src="/dil.png" alt="dil" width={24} height={24} />
</div>
            
          </div>
        </div>
      </header>
    </div>
  );
}