import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Contact from '../Pages/Commande'
import Cart from '../Pages/Cart'
import { useSelector } from 'react-redux'


const Navbar = () => {
    const [cats, setCats] = useState([])
    const cart = useSelector(state=>state.cart.cart)
    const navigate = useNavigate()
   

    const getCategories = async () => {
        const res = await axios.get('http://localhost:3000/category')
        setCats(res.data)
        console.log(res)
    }

    useEffect(() => {
        getCategories()
    }, [])

  return (
    <div>
      <div className="navbar bg-fuchsia-300 px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to={"/"}>
  <p className='btn btn-ghost rounded-btn capitalize text-black font-black text-base'>Home</p>
  </Link></li>
        <li>
          <a>Categories</a>
          <ul className="p-2">
          {
        cats.map(c => 
            <Link to={"/"+c.title}>
            <li><a> {c.title} </a></li>
            </Link>
            )
        }
          </ul>
        </li>
      </ul>
    </div>
    <Link to={'/'}>
    <img src='/new.jpg' className='w-20 rounded-full' />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
  <div className="flex flex-row">
    <Link to={"/"}>
  <p className='btn btn-ghost rounded-btn capitalize text-white font-black text-base'>Home</p>
  </Link>
  <div className="dropdown dropdown-end z-50">
        <label tabIndex={0} className="btn btn-ghost rounded-btn capitalize text-white font-black text-base">Nos Categories</label>
        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
        {
        cats.map(c => 
            <Link to={"/"+c.title}>
            <li><a> {c.title} </a></li>
            </Link>
            )
        }
        </ul>
      </div>
  
<Link to={'/contact'}>
      <p className='btn btn-ghost rounded-btn capitalize text-white font-black text-base'>Contact Us</p>
      </Link>
  </div>
  </div>
  <div className="navbar-end">
  <div className="indicator">
  <span className="indicator-item badge badge-sm badge-secondary text-white font-black text-base">
    {
      cart.length
    }
    </span> 
  <Link to={'/cart'}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white font-black text-base">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
</Link>
</div>
  </div>
</div>
    </div>
  )
}

export default Navbar