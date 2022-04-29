import { createContext, useContext, useState } from "react";

const ServiceContext = createContext();

export const ServiceConsumer=() => useContext(ServiceContext);

function ServiceProvider({children}){

    const [location, setLocation]= useState("");
    const [animal, setAnimal]= useState("");   
    const [breed, setBreed]= useState("");
    const [pets, setPets]=useState([]);
    const [thePet, setThePet]=useState([])

    async function requestPets(){
        const res =await fetch(
        `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json=await res.json();
        setPets(json.pets);
    }

    async function requestAPet(id){
        const res= await fetch(
            `https://pets-v2.dev-apis.com/pets?id=${id}`
        );
        const respuesta= await res.json()
        setThePet(respuesta.pets[0])
    }



    return(
        <ServiceContext.Provider value={{
            pets,
            breed,
            animal,
            location,
            thePet,
            setLocation,
            setAnimal,
            setBreed,
            requestPets,
            requestAPet
        }}>
            {children}
        </ServiceContext.Provider>
    )
}

export default ServiceProvider