import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Pet/Pet.css"
import photoComingSoon from '../../images/photoComingSoon.jpg';


const PetCard = ({ pet }) => {
    //#region Hooks
    useEffect(() => {
        console.log('newpet')
    }, [])
    //#endregion

    //#region JSX Element
    return (
        <div className="pet_cards">
            <section className="pet_card">
                    <div className="pet">                        
                        <div className="petimg">
                            <center>
                                {
                                //confirming photourls are actual .png and .jpg/.jpeg images - then if multiple pictures, use first listed as display photo
                                //if photo passes condition but returns an error - use default coming soon pic
                                pet.photoUrls?.find(x => x.includes('.png')) || pet.photoUrls?.find(x => x.includes('.j')) ? <img src={pet.photoUrls[0]} alt={pet.name} 
                                    onError={(e) => {e.target.src = `${photoComingSoon}`}} className="pet_image" /> : 
                                <img className="default_petimg" src={photoComingSoon} alt={pet.name}/>}
                            </center>
                        </div>        
                        <Link to={`/pet/detail/${pet.id}`}>
                            {pet.name ? <h3><center>{pet.name}</center></h3> : <h3>UnNamed</h3>}
                        </Link>                    
                        {pet.status}
                        <br/>
                        {pet.category ? pet.category.name : <br/>}
                    </div>
            </section>
        </div>
    )
};
//#endregion

export default PetCard;