import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-fuchsia-50">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://ellesuisse.ch/wp-content/uploads/2019/02/Masque-beaute-Soreltracyetcie-768x401.jpg" className="w-[50vw] h-[70vh] object-cover rounded-lg shadow-2xl" />
    <div className='mr-16'>
      <h1 className="text-4xl font-bold uppercase">A&J KOSMETIK </h1>
      <p className="py-6 font-bold"> Your Beauty Destination Give Yourself a Treat </p>
      <Link to={'/Product'}>
      <button className="btn bg-fuchsia-500 text-white hover:bg-rose-700 uppercase">Shop now</button>
      </Link>
    </div>
  </div>
</div>
  )
}

export default Hero