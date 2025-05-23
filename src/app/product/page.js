/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
"use client"

import React from 'react'
import axios from 'axios'
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { IoMdArrowDropdown } from "react-icons/io";
import { ShortByProduct } from "../Data/ShortByProduct";
import { IoIosArrowForward } from "react-icons/io";
import { HomeFeatureData } from '../Data/HomeFeatureData';
/* import { ToastContainer, toast } from 'react-toastify'; */


export default function Product() {



  let [productData, setproductData] = useState([])

  let [categoryData, setcategoryData] = useState([])

  let [brandData, setbrandData] = useState([])

  let [sorrtBy, setsortBy] = useState(false)

  let [sorting, setsorting] = useState(null)

  let [isLoading, setisLoading] = useState(false)

  let [categotyFilter, setcategotyFilter] = useState([])

  let [brandFilter, setbrandFilter] = useState([])

  let [ratingFilter, setratingFilter] = useState(null)

  let [discountPriceFilter, setdiscountPriceFilter] = useState(null)

  let [dropDownMenu, setdropDownMenu] = useState("Sort By")

  let [mobileFilterButton, setmobileFilterButton] = useState(false)

  let [priceFilter, setpriceFilter] = useState([null, null])



  let [mobileSortBy, setmobileSortBy] = useState(false)

  {/* get category list */ }
  let getCategory = () => {

    axios.get("https://wscubetech.co/ecommerce-api/categories.php")
      .then((res) => res.data)
      .then((finalres) => {

        setcategoryData(finalres.data)
      })
  }

  {/* get product list */ }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let getProducts = () => {


    setisLoading(true)
    axios.get("https://dummyjson.com/products", {
      params: {
        page: 1,
        limit: 12,
        categories: categotyFilter.join(","),
        /*  brands: brandFilter.join(","),
         price_from: priceFilter[0],
         price_to: priceFilter[1],
         discount_from: 0,
         discount_to: discountPriceFilter,
         rating: ratingFilter, */
        sorting: sorting
      }
    })
      .then((res) => res.data)
      .then((finalres) => {
        // console.log(finalres)
        setproductData(finalres.products)
        /* settotalPages(finalres.total_pages)
        // console.log(totalPages)
        setcurrentPage(finalres.current_page) */
        setisLoading(false)
      })
  }
  {/* when we click on category then  we get products according checked*/ }

  let getCategoryCheck = (event) => {

    if (event.target.checked) {
      if (!categotyFilter.includes(event.target.value)) {
        setcategotyFilter([...categotyFilter, event.target.value])
      }
    }
    else {
      let finalData = categotyFilter.filter((v) => v != event.target.value)
      setcategotyFilter(finalData)
      // console.log(event.target.value)
    }
  }

  useEffect(() => {

    getCategory()
  }, [])

  useEffect(() => {

    getProducts()
  }, [sorting, categotyFilter])


  return (
    <>
      {/* title of Page */}
      <h3 className="text-center text-[35px] font-bold text-[#333] mt-3 pt-3">Product Listing</h3>

      <div className="justify-center flex items-center mb-6">
        <Link href="/" className="hover:text-[#C09578] cursor-pointer text-[14px] text-[#555]">
          Home
        </Link>
        <span className="flex items-center text-[14px] text-[#C09578]">
          <IoIosArrowForward className="mx-1 text-[#C09578]" />
          Product Listing
        </span>

      </div>
      <div className="border-b border-[#ccc] w-full m-auto pb-4"> </div>

      {/* mobile responsive site filter nd sort by code */}
      <div className='w-full bottom-0 z-10 border-1 bg-white fixed  lg:hidden sm:hidden ' id='mobile-filter-buttons'>
        <div className='w-full grid grid-cols-2 p-3'>
          <button className='border-r' onClick={() => setmobileSortBy(!mobileSortBy)}>{dropDownMenu}</button>
          <button onClick={() => setmobileFilterButton(!mobileFilterButton)}>Filters</button>
        </div>
      </div>
      <div className={`lg:hidden sm:hidden  w-[250px] bg-white border-1 rounded-sm -translate-x-1/2 left-[50%] -translate-y-1/2 shadow-lg fixed top-1/2 z-99   ${mobileSortBy ? 'block' : 'hidden'} `}>

        <nav>
          <ul>

            {ShortByProduct.map((value, index) => {

              let { id, title } = value
              return (
                // eslint-disable-next-line react/jsx-key
                <li className='p-2 border-b border-gray-400'
                  onClick={() => {
                    setmobileSortBy(false)
                    setsorting(id)
                    setdropDownMenu(title)
                  }}
                >{title}</li>
              )
            })}
          </ul>
        </nav>
      </div>
      {/* main section*/}
      <section className='max-w-full relative  bg-white'>

        {/* for mobile gray back side div */}
        <div className={`w-full absolute top-0 h-full bg-[rgba(0,0,0,0.6)] lg:hidden sm:hidden  ${mobileSortBy || mobileFilterButton ? 'block' : 'hidden'} `} id='overlay'>

        </div>
        {/* main division of section*/}
        <div className=' lg:my-10 sm:my-10 grid lg:grid-cols-[15%_auto] sm:grid-cols-[30%_auto] gap-5'>
          {/* left side filter data */}
          <div className={`lg:w-full sm:w-full w-[70%] top-2 lg:static sm:static absolute 
           left-1/2 -translate-x-1/2 sm:translate-x-0 lg:translate-x-0 z-9 cursor-pointer lg:block sm:block bg-white ${mobileFilterButton ? 'block' : 'hidden'} `} id='Fliter'>
            <div className='w-full mb-3 flex justify-around' id='heading'>
              <h3 className='uppercase text-black font-semibold text-sm' onClick={() => setmobileFilterButton(!mobileFilterButton)}>FILTERS</h3>
              <h1 className='uppercase text-sm text-red-500 font-semibold'>Clear all</h1>
            </div>
            <div className='p-4 overflow-y-scroll lg:h-[250px] sm:h-[250px] h-[150px] scrollbar-none' style={{ border: "1px solid #ccc" }}>
              <h4 className='uppercase font-bold'>categories</h4>
              <div className='my-2'>
                <ul>

                  {categoryData.map((value) => {
                    return (
                      <li className='py-2'>
                        <input type="checkbox" value={value.slug} onChange={getCategoryCheck} onClick={() => setmobileFilterButton(false)} /> {value.name}

                      </li>
                    )
                  })}

                </ul>
              </div>
            </div>
            {/*     <div className='p-4 overflow-y-scroll lg:h-[250px] sm:h-[250px] h-[150px] ' style={{ border: "1px solid #ccc" }}>
             <h4 className='uppercase font-bold'>BRAND</h4>
             <div className='my-2'>
               <ul>
                 {brandData.map((value, index) => {
                   return (
                     <li className='py-2'>
                       <input type="checkbox" value={value.slug} onChange={getBrandFilter} onClick={() => setmobileFilterButton(false)} /> {value.name}
                     </li>
                   )
                 })}

               </ul>
             </div>
           </div> */}
            <div className='p-4 ' style={{ border: "1px solid #ccc" }}>
              <h4 className='uppercase font-bold'>PRICE</h4>
              <div className='my-2'>
                <ul>
                  <li className='pb-3'>
                    <input type="radio" name='priceFilter' onClick={() => {
                      setpriceFilter([10, 250])
                      setmobileFilterButton(false)
                    }} />&nbsp;Rs. 10 to Rs. 250
                  </li>
                  <li className='pb-3'>
                    <input type="radio" name='priceFilter' onClick={() => {
                      setpriceFilter([250, 500])
                      setmobileFilterButton(false)
                    }} />&nbsp;Rs. 250 to Rs. 500
                  </li>
                  <li className='pb-3'>
                    <input type="radio" name='priceFilter' onClick={() => {
                      setpriceFilter([500, 1000])
                      setmobileFilterButton(false)
                    }} />&nbsp;Rs. 500 to Rs. 1000
                  </li>
                  <li className=''>
                    <input type="radio" name='priceFilter' onClick={() => {
                      setpriceFilter([1000, 50000])
                      setmobileFilterButton(false)
                    }} />&nbsp;Rs. 1000 to Above
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/*product data section -2nd part right side  */}
          <div className='w-full' id='product'>
            {/* for sorting code for laptop screen  */}
            <div className=' border-1 border-gray-200 py-3 mb-3 flex justify-end relative' id='filterButton'>
              {/* <ToastContainer /> */}
              <div className='relative lg:block sm:block hidden'>
                <div className='  flex items-center justify-between gap-3 pr-20'>
                  <span className='text-gray-400 text-[12px]'> Sort By:</span>
                  <button className='text-[12px] border-1 border-gray-200 px-2 py-1 cursor-pointer flex items-center font-semibold' onClick={() => setsortBy(!sorrtBy)}>
                    {dropDownMenu}

                    <IoMdArrowDropdown className='text-xl' />

                  </button>

                  <span className='text-gray-400 text-[12px]'>Showing 1–1 of 1 results</span>
                </div>
                <div className={`shadow-lg left-13 w-[50%] bg-white p-3 border-1 border-gray-200 rounded-sm absolute top-[100%] ${sorrtBy ? 'block' : 'hidden'}`}>
                  <ul>
                    {
                      ShortByProduct.map((value, index) => {
                        let { id, title } = value
                        return (
                          // eslint-disable-next-line react/jsx-key
                          <li className='py-1 text-[12px] p-2 cursor-pointer hover:bg-gray-100' onClick={() => {
                            setsorting(id)
                            // console.log(sorting3
                            setsortBy(false)
                            setdropDownMenu(title)
                          }}>
                            {title}
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>

              </div>
            </div>
            {/*show product data code */}
            <div className='max-w-6xl grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 mx-auto py-6'>
              {
                isLoading ?
                  <h1>Loading...</h1>
                  :
                  HomeFeatureData.map((value, index) => <ProductItems pData={value} key={index} />)
              }
            </div>
            {/*   {/*pagination code  
           <div className='my-10'>
             <ResponsivePagination
               current={currentPage}
               total={totalPages}
               onPageChange={setcurrentPage}
             />
           </div> */}
          </div>
        </div>

      </section>
    </>
  )
}
function ProductItems({ pData }) {
  let { id, name, subname, price, image, salePrice } = pData

  /*  let { cart, setcart } = useContext(counterContext) */
  /* 
    let addToCart = () => {
      let cartObj = {
        id,
        name,
        price,
        image,
        qty: 1
      }
  
      setcart([...cart, cartObj])
      toast.success("Items Added In Cart !")
      // let finalCartItems=cart.filter((value)=>value.id!=id)
      // setcart(finalCartItems)
    } */


  /*  let checkmyCartItems = cart.filter((value) => value.id == id)
   // console.log(checkmyCartItems,id)
  */
  /*   let removeCart = () => {
  
      if (confirm("Are You Sure For Remove Items From Cart ? ")) {
        let fianlCartItems = cart.filter((value) => value.id != id)
        setcart(fianlCartItems)
        toast.success("Items Removed From Cart !")
      }
  
    } */

  return (

    <div className='px-2 py-4'>
      <div className='bg-white shadow-2xl text-center'>

        <Image src={image}
          alt="Isaac Chest Of Drawer"
          width={300}
          height={240}
          objectFit='cover'

        >

        </Image>

        <p className='text-[12px] text-gray-500 mt-2'>{name} </p>
        <h3 className='font-bold mt-4 text-[14px] hover:text-[#c09578] '>{subname}</h3>
        <div className='h-0.5 bg-gray-50 mt-3'></div>

        <div className='mt-2'>
          <span className='line-through text-gray-400 text-[14px] mr-2'>
            {price}
          </span>
          <span className='text-[#c09578] font-bold text-[14px]'>
            {salePrice}
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


      {/* {
              checkmyCartItems.length == 1
                ?
                <button className='bg-red-600 text-white rounded-sm  px-2 py-1 font-semibold text-sm cursor-pointer uppercase' onClick={removeCart}>Remove</button>
                :
                <button className='bg-blue-600 text-white rounded-sm  px-2 py-1 font-semibold text-sm cursor-pointer uppercase' onClick={addToCart}>Add</button>
            } */
      }

    </div>


  )
}


