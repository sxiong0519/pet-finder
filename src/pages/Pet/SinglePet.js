import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPetById } from "../../action/Pet/petActions";
import photoComingSoon from '../../images/photoComingSoon.jpg';



const SinglePet = () => {
    const petId = useParams();
    const [pet, setPet] = useState({})
    console.log(pet, 'this works')

    useEffect (() => {
        getPetById(petId).then(p => setPet(p))
    }, [])

    return (
        <div className="pet_cards">
            <section className="pet_card">
                    <div className="pet">
                        <h3><center>{pet.name}</center></h3>
                            <div className="petimg">
                                {pet.photoUrls?.find(x => x.includes('.png')) || pet.photoUrls?.find(x => x.includes('.j')) ? 
                                (pet.photoUrls?.length >= 2 ? pet.photoUrls?.map(url => {return <img src={url} alt={photoComingSoon} className="pet_image" />}) : <img src={pet.photoUrls[0]} alt={pet.name} className="pet_image" />) 
                                : <img className="default_petimg" src={photoComingSoon} alt={pet.name}/>}
                            </div>    
                        {pet.status}
                        <br/>
                        {pet.category ? pet.category.name : <br/>}
                    </div>
            </section>
        </div>
    )
}

export default SinglePet;