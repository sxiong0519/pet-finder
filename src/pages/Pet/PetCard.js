import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Pet/pet.css"
import photoComingSoon from '../../images/photoComingSoon.jpg';


const PetCard = ({ pet }) => {

useEffect(() => {
    console.log('newpet')
}, [])
    return (
        <div className="pet_cards">
            <section className="pet_card">
                    <div className="pet">
                        <h3><center>{pet.name}</center></h3>
                        <Link to={`/pet/detail/${pet.id}`}>
                            <div className="petimg">
                                {pet.photoUrls.find(x => x.includes('.png')) || pet.photoUrls.find(x => x.includes('.j')) ? <img src={pet.photoUrls[0]} alt={pet.name} className="pet_image" /> : 
                                <img className="default_petimg" src={photoComingSoon} alt={pet.name}/>}
                            </div>    
                        </Link>
                        {pet.status}
                        <br/>
                        {pet.category ? pet.category.name : <br/>}
                    </div>
            </section>
        </div>
)}

export default PetCard;