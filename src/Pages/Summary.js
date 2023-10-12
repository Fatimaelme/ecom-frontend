import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Summary = () => {
  const cart = useSelector(state=>state.cart.cart)
  return (
    <div>
        <Navbar></Navbar>
        <section className="flex items-center py-16 bg-gray-50 font-poppins dark:bg-gray-800 ">
  <div className="justify-center flex-1 max-w-4xl px-6 py-6 mx-auto bg-gray-100 rounded-md shadow-md dark:border-gray-900 dark:bg-gray-900 lg:py-10 lg:px-10">
    <div className="mb-16 text-center">
      <h1 className="mb-6 text-2xl font-semibold leading-7 tracking-wide text-gray-700 lg:text-4xl dark:text-gray-300 lg:leading-9">
        Merci Pour Votre Commande
      </h1>
      <p className="text-lg text-gray-500 dark:text-gray-400">
        your order number is: 012736373737
      </p>
    </div>
    <div className="max-w-4xl mx-auto mb-10">
      <h2 className="mb-4 text-xl font-medium dark:text-gray-400">
        Votre Commande Contient:
      </h2>
      {
        cart.map(c =>
          <div className="p-10 mb-8 bg-white rounded-md shadow dark:bg-gray-800 sm:flex sm:items-center xl:py-5 xl:px-12">
        <a href="#" className="mr-6 md:mr-12">
          <img
            className=" w-full lg:w-[80px] h-[200px] lg:h-[80px]  object-cover  mx-auto mb-6 sm:mb-0 "
            src={c.Image}
            alt="dress"
          />
        </a>
        <div>
          <a
            className="inline-block mb-1 text-lg font-medium hover:underline dark:text-gray-400"
            href="#"
          >
           {c.title}
          </a>
          <div className="flex flex-wrap">
           
            <p className="text-sm font-medium dark:text-gray-400">
              <span>Quantité</span>
              <span className="ml-2 text-gray-400">1</span>
            </p>
          </div>
        </div>
      </div>
          )
      }
    </div>
    <div className="max-w-4xl mx-auto ">
      <h2 className="mb-4 text-xl font-medium dark:text-gray-400 ">
        Détails de la Commande
      </h2>
      <div className="grid grid-cols-1 gap-8 mb-10 lg:grid-cols-2">
      
        <div className="relative flex items-center justify-between px-10 py-3 font-medium leading-8 bg-white bg-opacity-50 rounded-md shadow dark:text-gray-400 dark:bg-gray-800">
          <div className="absolute right-0 flex items-center justify-center bg-fuchsia-500 rounded-md w-14 h-14 dark:bg-gray-600">
            <div className="flex items-center justify-center text-lg font-bold text-fuchsia-500 bg-gray-100 rounded-full dark:text-gray-300 dark:bg-gray-700 w-11 h-11">
              {cart.length}
            </div>
          </div>
          <span className="mr-16">Products</span>
        </div>
        <div className="flex items-center justify-between px-10 py-3 font-medium leading-8 bg-white rounded-md shadow dark:text-gray-400 dark:bg-gray-800 font-heading">
          <span>Total</span>
          <span className="flex items-center text-fuchsia-500 dark:text-fuchsia-400">
            <span className="ml-3 mr-1 text-sm">MAD</span>
            <span className="text-xl">
              {
                cart.reduce((acc, curr) => {
                  return acc+curr.price
                }, 0)
              }
            </span>
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 ">
        <Link to={'/'}>
        <button className="w-full px-6 py-3 text-fuchsia-500 border border-fuchsia-500 rounded-md md:w-auto hover:text-gray-100 hover:bg-fuchsia-600 dark:border-gray-800 dark:hover:bg-gray-800 dark:text-gray-300">
          Retour au shopping
        </button>
        </Link>
    
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Summary