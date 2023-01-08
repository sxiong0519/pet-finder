import PetCard from "./PetCard";
import "../../styles/Pet/pet.css"
import { useEffect, useState } from "react";
import { getPetByStatus } from "../../action/Pet/petActions";


const AllPets = (status) => {
    const [pets, setPets] = useState([]);
    const uniquePets = [...new Map(pets.map((item) => [item["id"], item])).values()];

    useEffect(() => {
        getPetByStatus(status.status.toLowerCase()).then(p => setPets(p));
}, [status])
    
    

    return (
        <div>
            <center>
                <h3>{status.status} Pets</h3>
            </center>
            <div className="pets">
                {uniquePets.map(pet => { return <PetCard key={pet.id} pet={pet} /> })}
            </div>
      </div>
    )
}

export default AllPets;