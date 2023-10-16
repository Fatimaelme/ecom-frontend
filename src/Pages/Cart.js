import React from 'react'
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { removefromcart } from '../Store/Slicers/Cartslice'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cart = useSelector(state=>state.cart.cart)
  const dispatch = useDispatch()
  return (
  <>
    <Navbar/>
    <section className="items-center py-24 bg-gray-50 font-poppins dark:bg-gray-700">
  <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 lg:px-6">
    <h2 className="mb-10 text-4xl font-bold text-center dark:text-gray-400">
      Your Cart
    </h2>
    <div className="px-6 mb-10 lg:px-0">
      {
        cart.map(c =>
          <div className="relative flex flex-wrap items-center pb-8 mb-8 -mx-4 border-b border-gray-200 dark:border-gray-500 xl:justify-between border-opacity-40">
        <div className="w-full mb-4 md:mb-0 h-96 md:h-44 md:w-56">
          <img
            src={c.Image}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full px-4 mb-6 md:w-96 xl:mb-0">
          <a
            className="block mb-5 text-xl font-medium hover:underline dark:text-gray-400"
            href="#"
          >
           {c.title}
          </a>
          
        </div>
        <div className="w-full px-4 mt-6 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
          <div className="flex items-center">
            <h2 className="mr-4 font-medium dark:text-gray-400">Qty:</h2>
            <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 ">
              
              <input
                type="number"
                className="w-12 px-2 py-4 text-center border-0 rounded-md dark:bg-gray-800 bg-gray-50 dark:text-gray-400"
                placeholder={1}
                value={c.qty}
              />
              
            </div>
          </div>
        </div>
        <div className="w-full px-4 xl:w-auto">
          <span className="text-xl font-medium text-fuchsia-500 dark:text-fuchsia-400 ">
            <span className="text-sm">MAD</span>
            <span> {c.price} </span>
          </span>
        </div>
        <button className="absolute top-0 right-0 text-gray-400 lg:mt-6 lg:-mr-4 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200" 
        onClick={()=>{dispatch(removefromcart(c._id))}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="w-6 h-6 bi bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>
          )
      }
    </div>
    <div className="flex flex-wrap justify-between">
      <div className="w-full lg:w-1/3">
        <div className="mb-10">
          <span className="text-xl font-bold text-gray-700 dark:text-gray-400">
            Apply Coupon
          </span>
          <input
            type="text"
            className="flex-1 w-full px-8 py-4 mt-4 font-normal placeholder-gray-400 border rounded-xl dark:border-gray-700 dark:placeholder-gray-500 md:flex-none md:mr-6 dark:text-gray-400 dark:bg-gray-800"
            placeholder="x304k45"
            required=""
          />
          <a
            className="inline-block w-full px-6 py-4 mt-4 text-lg font-medium leading-6 tracking-tighter text-center text-white bg-fuchsia-500 lg:w-auto hover:bg-fuchsia-600 focus:ring-2 focus:ring-fuchsia-500 focus:ring-opacity-50 rounded-xl"
            href="#"
          >
            Apply
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/3">
        <div>
          <h2 className="mb-6 text-3xl font-bold dark:text-gray-400">
            Cart totals
          </h2>
          <div className="flex items-center justify-between px-10 py-4 mb-3 font-medium leading-8 bg-gray-100 bg-opacity-50 border dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 rounded-xl">
            <span>Subtotal</span>
            <span className="flex items-center text-xl">
              <span className="mr-2 text-base">MAD</span>
              <span>
                {
                  cart.reduce((acc,curr) => {return acc+curr.price},0)
                }
              </span>
            </span>
          </div>
          <div className="flex items-center justify-between px-10 py-4 mb-3 font-medium leading-8 bg-gray-100 bg-opacity-50 border dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 rounded-xl">
            <span>Shipping</span>
            <span className="flex items-center text-xl">
              <span className="mr-2 text-base">MAD</span>
              <span>0,00</span>
            </span>
          </div>
          <div className="flex items-center justify-between px-10 py-4 mb-6 font-medium leading-8 bg-gray-100 border dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800 rounded-xl">
            <span>Total</span>
            <span className="flex items-center text-xl text-fuchsia-500 dark:text-fuchsia-400">
            <span className="mr-2 text-base">MAD</span>
              <span>
                {
                  cart.reduce((acc,curr) => {return acc+curr.price},0)
                }
              </span>
            </span>
          </div>
          <Link to={'/commande'}>
          <a
            className="inline-block w-full px-6 py-4 text-lg font-medium leading-6 tracking-tighter text-center text-white bg-fuchsia-500 lg:w-auto hover:bg-fuchsia-600 focus:ring-2 focus:ring-fuchsia-500 focus:ring-opacity-50 rounded-xl"
            href="#"
          >
            Checkout
          </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default Cart