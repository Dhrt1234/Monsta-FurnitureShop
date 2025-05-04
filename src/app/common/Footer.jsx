import React from 'react'
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaTelegram } from "react-icons/fa";


export default function Footer() {
  return (
   
 <footer className="bg-white text-gray-700 mt-12 border-t border-[#ccc] py-3">
      <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="mb-1 text-[14px]">Address: Claritas est etiam processus dynamicus</p>
          <p className="mb-1 text-[14px]">Phone: 9781234560</p>
          <p className='text-[14px]'>Email: furniture@gmail.com</p>
          <div className="flex space-x-1 mt-4">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaTelegram].map((Icon, i) => (
              <div key={i} className="w-10 h-10 border rounded-full flex items-center justify-center text-[#b2b2b2] hover:bg-white hover:text-[#C09578] transition">
                <Icon size={14} />
              </div>
            ))}
          </div>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Information</h3>
          <ul className="space-y-1 text-[14px]">
            <li className='hover:text-[#C09578]'>
              <Link href="/about">About Us</Link>
            </li >
            <li className='hover:text-[#C09578]'>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className='hover:text-[#C09578]'>
              <Link href="/faq">Frequently Questions</Link>
            </li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h3 className="text-xl font-semibold mb-4">My Account</h3>
          <ul className="space-y-1 text-[14px]">
            <li className='hover:text-[#C09578]'><a href="#">My Dashboard</a></li>
            <li className='hover:text-[#C09578]'>
              <Link href="/wishlist">Wishlist</Link>
            </li>
            <li className='hover:text-[#C09578]'>
              <Link href="/cart">Cart</Link>
            </li>
            <li className='hover:text-[#C09578]'><a href="/checkout">Checkout</a></li>
          </ul>
        </div>

        {/* Top Rated Products */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Top Rated Products</h3>

          <div className="flex items-start gap-4 mb-4">
            <img src="/images/16253167208651620078433247Louise%20Cabinet_.jpg" alt="product" className="w-16 h-16 object-cover" />
            <div>
              <p className="text-[10px]">Wooden Mirrors</p>
              <p className="text-black hover:text-[#C09578]">Winona Mirror</p>
              <p>
                <span className="line-through text-sm text-gray-400 mr-2">Rs. 3,000</span>
                <span className="text-[#C09578] font-semibold">Rs. 2,200</span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-4">
            <img src="images/16253179270591620747711033Hardwell%20Temple%20Prayer%20Unit__.jpg" alt="product" className="w-16 h-16 object-cover" />
            <div>
              <p className="text-[10px]">Prayer Units</p>
              <p className="text-black hover:text-[#C09578]">Hardwell Temple Prayer Unit</p>
              <p>
                <span className="line-through text-sm text-gray-400 mr-2">Rs. 3,000</span>
                <span className="text-[#C09578] font-semibold">Rs. 2,200</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t py-4 mt-8 text-center text-sm text-gray-500 max-w-[1320px] m-auto border-[#ccc] border-b mb-8">
        <div className="flex justify-center space-x-8 mb-2">
          <a href="#" className='hover:text-[#C09578] text-[14px] font-bold'>Home</a>
          <a href="#" className='hover:text-[#C09578] text-[14px] font-bold'>Online Store</a>
          <a href="#" className='hover:text-[#C09578] text-[14px] font-bold'>Privacy Policy</a>
          <a href="#" className='hover:text-[#C09578] text-[14px] font-bold'>Terms Of Use</a>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center space-x-2 mt-2  max-w-[1320px] m-auto mb-5 ">
          <p>All Rights Reserved By Furniture | © 2025</p>
        </div>
        <div className="flex justify-center space-x-4">
          <img src="images/papyel2.png" alt="skrill" className="h-6" />
        </div>
      </div>
    </footer >

    
  )
}

