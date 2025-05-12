/* eslint-disable @next/next/no-img-element */
" use client"
import React, { useContext } from 'react'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Cart() {
  const cart = 1


  // const { cart, setCart } = useContext(counterContext)
  let totalPrice = 0
  let Shipping = 50

  return (
    <section>
      {/* title of Page */}
      <h3 className="text-center text-[35px] font-bold text-[#333] mt-3 pt-3">Shopping Cart</h3>

      <div className="justify-center flex items-center mb-6">
        <Link href="/" className="hover:text-[#C09578] cursor-pointer text-[14px] text-[#555]">
          Home
        </Link>
        <span className="flex items-center text-[14px] text-[#C09578]">
          <IoIosArrowForward className="mx-1 text-[#C09578]" />
          Shopping Cart
        </span>

      </div>
      <div className="border-b border-[#ccc] w-full m-auto pb-4"> </div>

      <div className={` ${cart == 0 ? 'hidden' : ''}max-w-5xl mx-auto py-5`}>
        {/*   .table_desc .cart_page table thead tr th {
  border-bottom: 3px solid #c09578;
  border-right: 1px solid #ebebeb;
  color: #242424;
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
  padding: 10px;
  text-align: center;
  font-family: "Playfair Display", serif; */}
        <table className='w-full border-0.5 border-[#808080]'>
          <thead className='bg-gray-300'>

            <tr className='border-b-[#c09578] border-b-2 text-black text-[14px] font-normal capitalize px-10  text-center' >
              <th className='py-2'>
                Delete
              </th>
              <th className='py-2'>
                Image
              </th>
              <th className='py-2'>
                Product
              </th>
              <th className='py-2'>
                Price
              </th>
              <th className='py-2'>
                Quantity
              </th>
              <th className='py-2'>
                Total
              </th>
            </tr>
          </thead>
          <tbody className='border-0.5 border-[#808080]'>
            <tr className='border-1  border-[#808080]'>
              <td className='min-w-[100px] border-1 py-8  text-center text-[20px]'>
               <RiDeleteBinLine className='ml-10 text-[#c09578]' />
              </td>
              <td className='max-w-[180px] max-h-[100px]  px-5 py-8 cursor-pointer border-1 '>
                <img src='/images/1617829892944Evan Coffee Table__.jpg'
                 alt="coffee table"
                />
              </td>
              <td className='min-w-[180px] py-8 text-center border-1 text-black text-[12px]'>
                Even Coffee Table
              </td>
              <td className='min-w-[150px] py-8 border-1 text-center text-black font-bold text-[14px]'>
                Rs.2,300
              </td>
              <td className='min-w-[150px] py-18  flex  gap-3 justify-center items-center text-black font-medium text-[14px]'>
                <span className='text-black text-[12px]'>Quantity</span>
                <input type="number" className='w-12 text-center border-1' min={1} max={10} required />
              </td>
              <td className='min-w-[170px] py-8 border-1 text-center text-black font-bold text-[14px]'>
                Rs.2,300
              </td>
            </tr>
            <tr className='border-1  border-[#808080]'>
            <td className='min-w-[100px] border-1 py-8  text-center text-[20px]'>
               <RiDeleteBinLine className='ml-10 text-[#c09578]' />
              </td>
              <td className='max-w-[180px] max-h-[100px]  px-5 py-8 cursor-pointer border-1 '>
                <img src='/images/1663996596738Group 1.jpg'
                 alt='even-coffee-table'
                />
              </td>
              <td className='min-w-[180px] py-8 text-center border-1 text-black text-[12px]'>
                Even Coffee Table
              </td>
              <td className='min-w-[150px] py-8 border-1 text-center text-black font-bold text-[14px]'>
                Rs.2,300
              </td>
              <td className='min-w-[150px] py-18  flex  gap-3 justify-center items-center text-black font-medium text-[14px]'>
                <span className='text-black text-[12px]'>Quantity</span>
                <input type="number" className='w-12 text-center border-1' min={1} max={10} required />
              </td>
              <td className='min-w-[170px] py-8 border-1 text-center text-black font-bold text-[14px]'>
                Rs.2,300
              </td>
            </tr>
            <tr className='border-1  border-[#808080]'>
            <td className='min-w-[100px] border-1 py-8  text-center text-[20px]'>
               <RiDeleteBinLine className='ml-10 text-[#c09578]' />
              </td>
              <td className='max-w-[180px] max-h-[100px]  px-5 py-8 cursor-pointer border-1 '>
                <img src='/images/1617829052195Caroline Study Tables__.jpg'
                 alt="study-table"
                />
              </td>
              <td className='min-w-[180px] py-8 text-center border-1 text-black text-[12px]'>
                Even Coffee Table
              </td>
              <td className='min-w-[150px] py-8 border-1 text-center text-black font-bold text-[14px]'>
                Rs.2,300
              </td>
              <td className='min-w-[150px] py-18  flex  gap-3 justify-center items-center text-black font-medium text-[14px]'>
                <span className='text-black text-[12px]'>Quantity</span>
                <input type="number" className='w-12 text-center border-1' min={1} max={10} required />
              </td>
              <td className='min-w-[170px] py-8 border-1 text-center text-black font-bold text-[14px]'>
                Rs.2,300
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={` ${cart == 0 ? '' : 'hidden'}`}>
        <div className='flex justify-center py-5'>
          <img src="/images/my-Order.jpg" alt="" />
        </div>
        <p className='text-center  font-bold text-[14px] text-[#555]'>Your shopping cart is empty!</p>
      </div>
    </section>
  )
}
