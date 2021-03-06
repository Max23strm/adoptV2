import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import {ServiceConsumer} from '../Context/ServiceProvider'
import ThemeContext from "../Context/ThemeContext"

function Details() {
  //  state={loading:true, showModal:false};
  const identi= useParams().id
  const {requestAPet,thePet}= ServiceConsumer()
  console.log(thePet)
  const [theme] = useContext(ThemeContext);
  useEffect(()=>{
    requestAPet(identi)

  })
    return (
      <div className="flex flex-col items-center justify-center my-10 mx-11 min-h-screen">
        <h2 className='text-5xl font-bold my-2'>{thePet.name}</h2>
        {thePet.images?
          <img src={thePet.images[0]} className="rounded-lg w-2/4" alt="The pet" />:
          null}

        <div className='flex flex-row my-3'>
            <p className='mx-2 capitalize'>{thePet.animal}</p>-
            <p className='mx-2'>{thePet.breed}</p>-
            <p className='mx-2'>{thePet.city},{thePet.state}</p>
        </div>
        <button className={`rounded-lg p-3 my-2 ${theme} font-bold hover:bg-gradient-to-tl from-cyan-500 hover:text-white ${theme}`}>Adopt Now!</button>
        <div className='text-center'>{thePet.description}</div>
      </div>
      )
}

export default Details