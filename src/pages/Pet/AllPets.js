import PetCard from "./PetCard";
import "../../styles/Pet/Pet.css"
import { useEffect, useState } from "react";
import { getPetByStatus } from "../../action/Pet/petActions";


const AllPets = (status) => {
    //#region States
    const [pets, setPets] = useState([]);
    //identifying only unique pets by id 
    const uniquePets = [...new Map(pets.map((item) => [item["id"], item])).values()];
    
    //#endregion

    //#region Hooks
    useEffect(() => {
        //status currently listed camel case - lowercase everything before passing through to api call
        if(status.webStatus && !status.status){
            getPetByStatus(status.webStatus)
            .then(p => setPets(p));
        } else {
            getPetByStatus(status.status)
            .then(p => setPets(p));
        }
    }, [status])
    //#endregion
    
    //#region JSX Element
    return (
        <div>
            <center>
            {status.status === 'Pick Status' ? "Filter to view pets" : 
                (!status.webStatus && !status.status ? 'Filter to view pets' :
                (status.webStatus && !status.status ? <h2> {status.webStatus} Pets</h2> : <h2> {status.status} Pets</h2>)
            )}
            </center>
            <div className="pets">
                {status.searchTerm?.length > 0 ? uniquePets.filter(pet => pet.category?.name.includes(status.searchTerm)).map(pet => { 
                    return <PetCard key={pet.id} pet={pet} /> }) : uniquePets.map(pet => { 
                    return <PetCard key={pet.id} pet={pet} /> })
                }
            </div>
      </div>
    )
};
//#endregion

export default AllPets;