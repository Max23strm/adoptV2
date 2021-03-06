import React, {useContext, useEffect} from 'react'
import ThemeContext from "../Context/ThemeContext"
import useBreedList from '../hooks/useBreedList';
import Results from './Results';
import {ServiceConsumer} from '../Context/ServiceProvider'
const ANIMALS= ["bird", "cat", "dog", "reptile"];

function Form() {

  const {location,
    pets,
    animal,
    breed,
    setLocation,
    setAnimal,
    setBreed,
    requestPets}= ServiceConsumer()
  
  const [breeds]=useBreedList(animal);   
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(()=>{
    requestPets();
    //eslint-disable-next-line
  },[])

  return (
    <section >
    <form className='grid place-content-center'
      onSubmit={e=>{
      e.preventDefault();
      requestPets();
      }}>
        <label  className="flex flex-col"htmlFor="Location">
            Location
            <input type="text"
              id='Location'
              placeholder='Location'
              onChange={ (e) =>setLocation(e.target.value)}
              value={location} />
        </label>
        <label className="flex flex-col"
          htmlFor="Animal">
            Animal
            <select className=''
              id="Animal"
              onChange={e=> setAnimal(e.target.value)}
              onBlur={e=> setAnimal(e.target.value)}>
                <option />
                {ANIMALS.map(animal=>(
                        <option value={animal} key={animal}>
                            {animal}
                        </option>
                    ))
                }
              </select>
        </label>
        <label className="flex flex-col" htmlFor="Breed">
            Breed
            <select  id="Breed"
              className='search-control disabled:opacity-50'
              disabled={!breeds.length}
              value={breed}
              onChange={e=> setBreed(e.target.value)}
              onBlur={e=> setBreed(e.target.value)}>
              <option />
                {
                    breeds.map(breed=>(
                        <option value={breed} key={breed}>
                            {breed}
                        </option>
                    ))
                }
            </select>
        </label>
        <label htmlFor="Theme"className="flex flex-col">
            Theme
            <select id='Theme'
            value={theme}
            onChange={(e)=>setTheme(e.target.value)}
            onBlur={(e)=>setTheme(e.target.value)}>
              <option value="bg-red-500">Red</option>
              <option value="bg-lime-500">Lime</option>
              <option value="bg-amber-500">Amber</option>
              <option value="bg-emerald-500">Emerald</option>
              <option value="bg-violet-500">Violet</option>
            </select>
        </label>
        <button className={`${theme} p-2 my-3 rounded-md border-2 border-solid border-black `}>Submit</button>
    </form>
    <Results pets={pets}/>
    </section>

  )
}

export default Form