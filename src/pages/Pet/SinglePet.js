import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPetById } from "../../action/Pet/petActions";
import photoComingSoon from '../../images/photoComingSoon.jpg';
import OrderForm from "../Inventory/OrderForm";


const SinglePet = () => {
    //#region States
    const petId = useParams();
    const [pet, setPet] = useState({});
    //#endregion

    //#region Hooks
    useEffect (() => {
        getPetById(petId)
        .then(p => setPet(p))
    }, []);
    //#endregion

    //#region JSX Element
    return (
        <div className="single_pet_cards">
            <section className="single_pet_card">
                    <div className="single_pet">
                        <div className="petimg">
                            {pet.photoUrls?.find(x => x.includes('.png')) || pet.photoUrls?.find(x => x.includes('.j')) ? 
                            (pet.photoUrls?.length >= 2 ? pet.photoUrls?.map(url => {return <img src={url}  onError={(e) => {e.target.src = `${photoComingSoon}`}} alt={photoComingSoon} className="pet_image" />}) : <img src={pet.photoUrls[0]} alt={pet.name} className="pet_image" />) 
                            : <img className="default_petimg" src={photoComingSoon} alt={pet.name}/>}
                        </div>
                        <div className='petdetails'>
                            <div>
                            {pet.status ? <Link className="navbar__link" to={`/${pet.status}`}>Go Back</Link> : <Link className="navbar__link" to={`/available`}>Go Back</Link>}
                            </div>
                            <h3>{pet.name}</h3>
                            Meet {pet.name}! {pet.name} is currently {pet.status ? <b>{pet.status}</b> : <b>unavailable</b>}. 
                            <br/>
                            {pet.category ? `${pet.name} is a ${pet.category.name}` : ""}. 
                            More details to come...
                            <br/>
                            <OrderForm id={pet.id}/>
                        </div>
                    </div>
            </section>
        </div>
    )
};
//#endregion

export default SinglePet;