import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Commande = () => {
  const cart = useSelector(state =>state.cart.cart)
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [telephone, setTelphone] = useState('')
  const [mail, setMail] = useState('')
  const [ville, setVille] = useState('')
  const [province, setProvince] = useState('')
  const [zip, setZip] = useState('')
  const [adresse, setAdresse] = useState('')
  const navigate = useNavigate()

  const addcommade = async() =>{
    await axios.post('https://ecomserver-o1sk.onrender.com/commande',{
      nom,
      prenom,
      telephone,
      mail,
      ville,
      province,
      zip,
      adresse,
      cart,
      total: cart.reduce((acc, curr) => {
        return acc+Number(curr.price)
      },0)
    })
    navigate("/summary")
  }

  return (
    <div>
    <Navbar></Navbar>
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
  <div className="max-w-6xl px-4 mx-auto">
    <div className="rounded-lg shadow bg-gray-50 dark:bg-gray-900 dark:border-gray-900">
      <div className="p-6 ">
        <div className="pb-6 border-b border-gray-100 dark:border-gray-800 ">
          <h2 className="text-xl font-bold text-gray-800 md:text-3xl dark:text-gray-300">
            Confirmation de la Commande
          </h2>
        </div>
        <div className="py-6 border-b border-gray-100 dark:border-gray-800">
          <div className="w-full md:w-10/12">
            <div className="flex flex-wrap -m-3">
              <div className="w-full p-3 md:w-1/3">
                <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
                  Nom et Prenom
                </p>
              </div>
              <div className="w-full p-3 md:w-1/3">
                <input
                  className="w-full dark:bg-gray-800 dark:border-gray-800 px-4 dark:placeholder-gray-500 dark:text-gray-400 py-2.5 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                  type="text"
                  placeholder="Adam"
                  onChange={event=>setNom(event.target.value)}
                />
              </div>
              <div className="w-full p-3 md:w-1/3">
                <input
                  className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                  type="text"
                  placeholder="Smith"
                  onChange={event=>setPrenom(event.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      
        <div className="py-6 border-b border-gray-100 dark:border-gray-800 ">
          <div className="w-full md:w-10/12">
            <div className="flex flex-wrap -m-3">
              <div className="w-full p-3 md:w-1/3">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-400">
                  Adresse Email
                </p>
              </div>
              
              <div className="w-full p-3 md:flex-1">
                <input
                  className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                  type="email"
                  placeholder="adam@gmail.com"
                  onChange={event=>setMail(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-10/12">
            <div className="flex flex-wrap -m-3">
              <div className="w-full p-3 md:w-1/3">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-400">
                   Téléphone
                </p>
              </div>
              
              <div className="w-full p-3 md:flex-1">
                <input
                  className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                  type="phone"
                  placeholder="Phone Number"
                  onChange={event=>setTelphone(event.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 dark:border-gray-800">
          <div className="w-full md:w-10/12">
            <div className="flex flex-wrap -m-3">
              <div className="w-full p-3 md:w-1/3">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-400">
                  Adresse Postale
                </p>
              </div>
              <div className="w-full p-3 md:flex-1">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full p-3 md:w-1/2">
                    <p className="mb-1.5 font-medium text-base text-gray-800 dark:text-gray-400">
                      Pays
                    </p>
                    <select
                      className="appearence-none dark:text-gray-400 dark:bg-gray-800  dark:border-gray-800  w-full py-2.5 px-4 text-gray-700 text-base font-normal border border-gray-200 rounded-lg "
                      name=""
                      id=""
                    >
                      <option>Maroc</option>
                    </select>
                  </div>
                  <div className="w-full p-3 md:w-1/2">
                    <p className="mb-1.5 font-medium text-base text-gray-800 dark:text-gray-400">
                      Ville
                    </p>
                    <input
                      className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                      type="text"
                      placeholder="Ville"
                      onChange={event=>setVille(event.target.value)}
                    />
                  </div>
                  <div className="w-full p-3 md:w-1/2">
                    <p className="mb-1.5 font-medium text-base text-gray-800 dark:text-gray-400">
                    Province
                    </p>
                    <input
                      className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                      type="text"
                      placeholder="Province"
                      onChange={event=>setProvince(event.target.value)}
                    />
                  </div>
                  <div className="w-full p-3 md:w-1/2">
                    <p className="mb-1.5 font-medium text-base text-gray-800 dark:text-gray-400">
                      ZIP
                    </p>
                    <input
                      className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                      type="text"
                      placeholder=" ZIP / Postal code"
                      onChange={event=>setZip(event.target.value)}
                    />
                  </div>
                  <div className="w-full p-3">
                    <p className="mb-1.5 font-medium text-base text-gray-800 dark:text-gray-400">
                      Adresse
                    </p>
                    <input
                      className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                      type="text"
                      placeholder="batiment/rue/étage"
                      onChange={event=>setAdresse(event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-10/12">
          <div className="flex flex-wrap justify-end -m-1.5">
            <div className="w-full md:w-auto p-1.5">
              <button className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-fuchsia-500 bg-white border border-fuchsia-500 rounded-md dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-fuchsia-100 ">
                <p>Cancel</p>
              </button>
            </div>
            <div className="w-full md:w-auto p-1.5">
              
              <button className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-white bg-fuchsia-500 border border-fuchsia-500 rounded-md hover:bg-fuchsia-600 "
              onClick={addcommade}
              >
                <p>Save</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default Commande