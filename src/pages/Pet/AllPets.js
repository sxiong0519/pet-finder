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
        getPetByStatus(status.status.toLowerCase())
        .then(p => setPets(p));
    }, [status])
    //#endregion
    
    //#region JSX Element
    return (
        <div>
            <center>
            {status.status === 'Pick Status' ? "" :<h3> {status.status} Pets</h3>}
            </center>
            <div className="pets">
                {uniquePets.map(pet => { 
                    return <PetCard key={pet.id} pet={pet} /> })
                };
            </div>
      </div>
    )
};
//#endregion

export default AllPets;