import React from 'react'
import { Link } from "react-router-dom";




function Pet({name, animal, breed, images, location, id
})
{
    let hero='http://pets-images.devapis.com/pets/none.jpg'
    if(images.length){
        hero=images[0]
    }    
    return (
        <Link to={`/details/${id}`} className=''>
        <div className='relative my-5 p-0'>
            <img src={hero} alt={name} className='mx-auto w-4/5 rounded-lg'/>
        <div className="absolute left-2/4 -translate-x-2/4 bottom-0 bg-gradient-to-tr from-white to-transparent  pt-2 w-4/5 text-center overflow-hidden rounded-b-log">
            <h1 className='font-bold'>{name}</h1>
            <h2>{`${animal} - ${breed} - ${location}`}</h2>
            <h2>{name}</h2>
        </div>
        </div>
    </Link>
    )
}

export default Pet