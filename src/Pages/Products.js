import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { useDispatch } from 'react-redux'
import { addtocart } from '../Store/Slicers/Cartslice'

const Products = () => {
    const [prod, setProd] = useState([])
    const params = useParams()
    console.log(params)

    const addproduct = async() =>{
        const result = await axios.get('https://ecomserver-o1sk.onrender.com/product')
        setProd(result.data.filter(a => a.category.toLowerCase() === params.category.toLowerCase()))
    }
    const dispatch = useDispatch()

    useEffect(() => {
        addproduct()
    }, [params.category])
  return (
    <div>
        <Navbar></Navbar>
        <div className='grid md:grid-cols-4 mt-8'>
       {
        prod.map(e=>
            <div className="card bg-base-100 shadow-xl">
            <Link to={'/product/'+e._id} >
            <figure><img className='h-52 object-cover' src={e.Image} alt="Shoes" /></figure>
            </Link>
            <div className="card-body">
            <div className='flex flex-row gap-4 '>
            <div className="badge badge-outline"> {e.category} </div> 
                <div className="badge badge-outline"> {e.marque} </div>
            </div>
              <h2 className="card-title uppercase flex justify-center">
                {e.title}
              </h2>
              <div className="card-actions flex flex-row">
              <p className='font-black mt-3'> {e.price} MAD </p>
              <button className="btn bg-purple-700 text-xs text-white hover:bg-red-400"
              onClick={()=>dispatch(addtocart(e))}
              > Ajouter au Panier </button>
              </div>
            </div>
          </div>
            )
       }
        </div>
    </div>
  )
}

export default Products