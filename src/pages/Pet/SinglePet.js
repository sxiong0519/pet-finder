import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
        <div className="pet_cards">
            <OrderForm id={pet.id}/>
            <section className="pet_card">
                    <div className="pet">
                        <center>
                            <h3>{pet.name}</h3>
                            <div className="petimg">
                                {pet.photoUrls?.find(x => x.includes('.png')) || pet.photoUrls?.find(x => x.includes('.j')) ? 
                                (pet.photoUrls?.length >= 2 ? pet.photoUrls?.map(url => {return <img src={url} alt={photoComingSoon} className="pet_image" />}) : <img src={pet.photoUrls[0]} alt={pet.name} className="pet_image" />) 
                                : <img className="default_petimg" src={photoComingSoon} alt={pet.name}/>}
                            </div>  
                        </center>  
                        {pet.status}
                        <br/>
                        {pet.category ? pet.category.name : <br/>}
                    </div>
            </section>
        </div>
    )
};
//#endregion

export default SinglePet;