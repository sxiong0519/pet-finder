import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPetById } from "../../action/Pet/petActions";



const SinglePet = () => {
    const petId = useParams();
    const [pet, setPet] = useState({})
    console.log(pet, 'this works')

    useEffect (() => {
        getPetById(petId).then(p => setPet(p))
    }, [])


    return (
        <>
        {pet.name}
        <br/>
        {pet.status}
        </>
    )
}

export default SinglePet;