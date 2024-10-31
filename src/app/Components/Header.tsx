import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className='flex justify-between fixed items-center sm:w-full bg-gray-600 text-white h-16  sm:h-14 md:h-20 lg:h-14 '>
      <div>
          <h2 className='sm:ml-5 ml-2 text-black font-bold text-lg sm:text-3xl'>PORTFOLIO</h2>      
      </div>

      <div>
        <ul className='flex mr-16 sm:mr-24 space-x-10 md:space-x-40 sm:ml-0 ml-5 '>
          <li className='hover:shadow-lg hover:shadow-yellow-400 hover:text-yellow-300 duration-300 '><Link href='#Home'>Home</Link></li>
          <li className='hover:shadow-lg hover:shadow-yellow-400 hover:text-yellow-300 duration-300'><Link href='#About'>About</Link></li>
          <li className='hover:shadow-lg hover:shadow-yellow-400 hover:text-yellow-300 duration-300 '><Link href='#Contact'>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;