import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Pet/Pet.css"
import photoComingSoon from '../../images/photoComingSoon.jpg';
import errorPhoto from '../../images/errorphoto.jpg';


const PetCard = ({ pet }) => {
    //#region Hooks
    useEffect(() => {
        console.log('newpet')
    }, [])
    //#endregion

    //#region JSX Element
    return (
        <section className="pet_card">
            <div className="pet">   
                <div className="petimg">
                    {//confirming photourls are actual .png and .jpg/.jpeg images - then if multiple pictures, use first listed as display photo
                    //if photo passes condition but returns an error - use default coming soon pic
                        !pet.photoUrls?.includes("string") ? <div className='pet-image'><img src={pet.photoUrls?.[0]} alt={pet.name} 
                        onError={(e) => {e.target.src = `${errorPhoto}`}} className="default_petimg" /> </div>: 
                        <div className='pet-image'><img className="default_petimg" src={photoComingSoon} alt={pet.name}/></div>}
                    <Link className="navbar__link" to={`/pet/detail/${pet.id}`}>
                        {pet.name ? <h3>{pet.name}</h3> : <h3>UnNamed</h3>}
                    </Link> 
                </div>   
                    <br/>
                    {pet.status ? pet.status : 'unavailable'}
                    <br/>
                    {pet.category ? pet.category.name : (pet.category?.name.includes("string") ? 'unknown' : 'unknown')}
            </div>
        </section>
    )
};
//#endregion

export default PetCard; 