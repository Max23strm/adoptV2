import React from 'react'
import Pet from './Pet'

function Results({pets}) {
    return (
        <section className='grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {!pets.length? (<h2>No Pets Found</h2>):
            (
                pets.map((pet)=>(
                    <Pet
                        name={pet.name}
                        animal={pet.animal}
                        breed ={pet.breed}
                        key={pet.id}
                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                        id={pet.id}
                        />
                ))
            )}
        </section>
    )
}

export default Results