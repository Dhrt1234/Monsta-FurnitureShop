"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import { FaHeart, FaShoppingCart, FaChevronDown, FaSearch } from "react-icons/fa";
export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  return (

    <section>
      {/* Top Header conact and Login section */}


      <div className='max-w-[100%] py-2 border-b border-[#ccc]'>
        <div className='max-w-[1320px] m-auto flex justify-around '>
          <p className='text-[13px]'>Contact us 24/7 : +91-9781234560 / furniture@gmail.com</p>
          <Link href="/login" className='md:block sm:block hidden text-[13px] cursor-pointer hover:text-[#c69a78]'>
            Login / Register
          </Link>


        </div>
      </div>
      {/* Logo and Cart*/}
      <header className='border-b border-[#ccc] max-w-[100%] py-4 px-3'>
        <div className='max-w-[1320px] px-5 m-auto flex items-center justify-between'>

          <Link href={"/"} className=' flex items-center space-x-2 '>
            <img className="h-8" src="/images/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png" alt="company-icon" />
          </Link>


          {/* search and cart */}
          <div className='flex items-center gap-5'>
            <div className='md:block sm:block hidden'>
            <form action={"/"} className='border-1 border-[#ccc] py-3 px-7 flex items-center justify-between'>
              <input type='text' placeholder='Serach Product...' className=' outline-none text-[12px] item-center placeholder:text-gray-500' />
              <FaSearch className="ml-2 text-black  text-[14px]" />
            </form>
            </div>
            {/* Wishlist */}
            <button className="border border-[#ccc]  p-3">
              <FaHeart className="text-black hover:text-[#C09578] text-[20px]" />
            </button>

            {/* Cart */}
            <div className='flex items-center relative border border-[#ccc] py-3 px-6'>
              <span className='absolute w-5 h-5 bg-[#C09578]  top-[30%] left-[-5%] flex items-center justify-center text-white rounded-full'>
                0
              </span>
              <div className='flex items-center justify-between hover:text-[#d3b39e]'>
                <FaShoppingCart className=" text-black hover:text-[#d3b39e] mr-3" />
                |
                <span className='font-medium px-1  '>Rs. 0.00</span>
                <FaChevronDown className="ml-1 text-blackhover:text-[#d3b39e]" />

              </div>
              </div>
              <button onClick={() => setIsOpen(!isOpen)}
            data-collapse-toggle="navbar-default" type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center
     text-sm text-[#d3b39e] rounded-lg  border border-[#d3b39e]
      focus:outline-none focus:ring-2 md:hidden
       focus:ring-gray-200 dark:text-gray-400
        dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          </div>
        </div>
      </header>
          {/* Navbar Area*/}
          <div className={`${isOpen ? '' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <nav className="border-b border-[#ccc] py-2 ">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-center">
          <ul className="flex flex-col md:flex-row space-x-8 text-[13px] font-bold uppercase">
            <Link href={"/"} className="text-[#C09578] cursor-pointer">Home</Link>

            <li className="text-gray-800 hover:text-[#C09578] cursor-pointer flex items-center gap-1">
              Living
              <FaChevronDown className="text-xs mt-[1px]" />
            </li>

            <li className="text-gray-800 hover:text-[#C09578] cursor-pointer flex items-center gap-1">
              Sofa
              <FaChevronDown className="text-xs mt-[1px]" />
            </li>

            <li className="text-gray-800 hover:text-[#C09578] cursor-pointer flex items-center gap-1">
              Pages
              <FaChevronDown className="text-xs mt-[1px]" />
            </li>

            <Link href={"/contact"} className="text-gray-800 hover:text-[#C09578] cursor-pointer">Contact Us</Link>
          </ul>
        </div>
      </nav>
      </div>

    </section>
  )
}

