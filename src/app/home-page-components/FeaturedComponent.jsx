"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { HomeFeatureData } from '../Data/HomeFeatureData';
import { HomeNewArrivalData } from '../Data/HomeNewArrivalData';
import { HomeSaleData } from '../Data/HomeSaleData';

export default function FeaturedComponent() {
    let [menu, setMenu] = useState(-1)

    return (
        <section className='max-w-6xl mx-auto pt-12  px-4'>
            <div className='flex items-center justify-center'>
                <div className='h-1 w-[20%] bg-gray-50'></div>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-0 md:gap-0 gap-6'>
                    <button onClick={() => setMenu(1)} className='bg-white text-black border-2  border-gray-500 hover:text-[#C09578] text-2xl px-4 py-3'>
                        Featued
                    </button>
                    <button onClick={() => setMenu(2)} className='bg-white text-black border-2 border-l-0 border-gray-500 hover:text-[#C09578] text-2xl px-4 py-3'>
                        New Arrivals
                    </button>
                    <button onClick={() => setMenu(3)} className='bg-white text-black border-2 border-l-0 border-gray-500 hover:text-[#C09578] text-2xl px-4 py-3'>
                        Onsale
                    </button>
                </div>
                <div className='h-1 w-[20%] bg-gray-50'></div>
            </div>

            <div className='py-6 px-4'>

                {/* featured product */}

                <div className={`${menu == 2 || menu == 3 ? 'hidden' : ''}`}>

                  
                    <div className='max-w-6xl grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 mx-auto py-6'>
                        {   HomeFeatureData.map((items, index) => {
                            return (
                                <div className='px-2 py-4'>
                                    <div className='bg-white shadow-2xl text-center'>

                                        <img src={items.image}
                                            alt="Isaac Chest Of Drawer"
                                            className='w-full h-40 object-cover '>

                                        </img>
                                        <p className='text-[12px] text-gray-500 mt-2'>{items.name} </p>
                                        <h3 className='font-bold mt-4 text-[14px] hover:text-[#c09578] '>{items.subname}</h3>
                                        <div className='h-0.5 bg-gray-50 mt-3'></div>

                                        <div className='mt-2'>
                                            <span className='line-through text-gray-400 text-[14px] mr-2'>
                                                {items.price}
                                            </span>
                                            <span className='text-[#c09578] font-bold text-[14px]'>
                                                {items.salePrice}
                                            </span>


                                        </div>
                                        <div className='flex justify-center gap-3 mt-4 pb-3'>
                                            <button className='bg-gray-200 hover:bg-[#c09578] px-2 py-2 text-black rounded text-sm'>
                                                <FaRegHeart />
                                            </button>
                                            <button className='bg-gray-200 hover:bg-[#c09578] px-5 py-2 text-gray-500 rounded text-[12px]'>

                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}

                    </div>
                </div>

                {/* new arrival product */}

                <div className={`${menu == 2 ? '' : 'hidden'}`}>
                 
                    <div className='max-w-6xl grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 mx-auto py-6'>
                        {   HomeNewArrivalData.map((items, index) => {
                            return (
                                <div className='px-2 py-4'>
                                    <div className='bg-white shadow-2xl text-center'>

                                        <img src={items.image}
                                            alt="Isaac Chest Of Drawer"
                                            className='w-full h-40 object-cover '>

                                        </img>
                                        <p className='text-[12px] text-gray-500 mt-2'>{items.name} </p>
                                        <h3 className='font-bold mt-4 text-[14px] hover:text-[#c09578] '>{items.subname}</h3>
                                        <div className='h-0.5 bg-gray-50 mt-3'></div>

                                        <div className='mt-2'>
                                            <span className='line-through text-gray-400 text-[14px] mr-2'>
                                                {items.price}
                                            </span>
                                            <span className='text-[#c09578] font-bold text-[14px]'>
                                                {items.salePrice}
                                            </span>


                                        </div>
                                        <div className='flex justify-center gap-3 mt-4 pb-3'>
                                            <button className='bg-gray-200 hover:bg-[#c09578] px-2 py-2 text-black rounded text-sm'>
                                                <FaRegHeart />
                                            </button>
                                            <button className='bg-gray-200 hover:bg-[#c09578] px-5 py-2 text-gray-500 rounded text-[12px]'>

                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}

                    </div>
                </div>
                  {/* sale product */}

                <div className={`${menu == 3 ? '' : 'hidden'}`}>
                  
                    <div className='max-w-6xl grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 mx-auto py-6'>

                        {   HomeSaleData.map((items, index) => {
                            return (
                                <div className='px-2 py-4'>
                                    <div className='bg-white shadow-2xl text-center'>

                                        <img src={items.image}
                                            alt="Isaac Chest Of Drawer"
                                            className='w-full h-40 object-cover '>

                                        </img>
                                        <p className='text-[12px] text-gray-500 mt-2'>{items.name} </p>
                                        <h3 className='font-bold mt-4 text-[14px] hover:text-[#c09578] '>{items.subname}</h3>
                                        <div className='h-0.5 bg-gray-50 mt-3'></div>

                                        <div className='mt-2'>
                                            <span className='line-through text-gray-400 text-[14px] mr-2'>
                                                {items.price}
                                            </span>
                                            <span className='text-[#c09578] font-bold text-[14px]'>
                                                {items.salePrice}
                                            </span>


                                        </div>
                                        <div className='flex justify-center gap-3 mt-4 pb-3'>
                                            <button className='bg-gray-200 hover:bg-[#c09578] px-2 py-2 text-black rounded text-sm'>
                                                <FaRegHeart />
                                            </button>
                                            <button className='bg-gray-200 hover:bg-[#c09578] px-5 py-2 text-gray-500 rounded text-[12px]'>

                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>


        </section>
    )
}
