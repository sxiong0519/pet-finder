import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPetById } from "../../action/Pet/petActions";
import photoComingSoon from '../../images/photoComingSoon.jpg';
import OrderForm from "../Inventory/OrderForm";
import errorPhoto from '../../images/errorphoto.png';


const SinglePet = () => {
    //#region States
    const petId = useParams();
    const [pet, setPet] = useState({});
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    //#endregion

    //#region Hooks
    useEffect (() => {
        if(petId){
        getPetById(petId)
        .then(p => setPet(p))}
    }, []);
    //#endregion

    //#region JSX Element
    return (
            <section className="single_pet_card">
                    <div className="single_pet">
                    <div>
                            {pet.status ? <Link className="navbar__link goback" to={`/${pet.status}`}>Go Back</Link> : <Link className="navbar__link goback" to={`/available`}>Go Back</Link>}
                            </div>
                        <div className="singlepetimage">
                            {pet.photoUrls?.length > 0 ? ( pet.photoUrls?.includes("string") ? <img className="default_petimg" src={photoComingSoon} alt={pet.name}/> 
                            : (pet.photoUrls?.length >= 2 ? pet.photoUrls?.map(url => {return <img src={url}  onError={(e) => {setError(true); e.target.src = `${errorPhoto}`}} alt={errorPhoto} className="single_image" />}) 
                                : <img src={pet.photoUrls?.[0]} onError={(e) => {setError(true); e.target.src = `${errorPhoto}`}} alt={pet.name} className="pet_image" />) ) 
                                : <img className="default_petimg" src={photoComingSoon} alt={pet.name}/>}
                           
                        </div>
                        <div className='petdetails'>
                            <br/><br/>
                            {error === true ? 'Uh oh! The image(s) are broken. We are working on it!' : ""}
                            <h3>{pet.name}</h3>
                            Meet {pet.name}! {pet.name} is currently {pet.status ? <b>{pet.status}</b> : <b>unavailable</b>}.  {pet.category? (pet.category?.name?.includes("string") || pet.category?.name === "" ? 
                            '' : `${pet.name} is a ${pet.category.name}.`) : ""} 
                            More details to come...
                            <br/>
                            <OrderForm id={pet.id}/>
                        </div>
                    </div>
            </section>
    )
};
//#endregion

export default SinglePet;