import { useState } from "react";
import { useNavigate } from "react-router"
import { createNewPet } from "../../action/Pet/petActions"



const PetForm = () => {
    const navigate = useNavigate();
    const [pet, setPet] = useState({
        name: "",
        photoUrls: "",
        category: "",
        tags:[],
        status: ""          
    });

    const handleInputChange = (event) => {
        const newPet = { ...pet }
          newPet[event.target.id] = event.target.value
          setPet(newPet)
        };
        console.log(pet.name.length)

    const addNewPet = () => {
        if (pet.name.length === 0 || pet.category.length === 0) {
            window.alert("Please complete all required(*) fields.")
        } else {
            const newPet = {
                id: Math.floor(Math.random()*10000) + 1,
                name: pet.name,
                photoUrls: pet.photoUrls.split(', '),
                category: {
                    id:0,
                    name:pet.category
                },
                tags:[],
                status: 'available'          
          }
          createNewPet(newPet)
            .then(() => navigate("/"))
          }
        };

    return (
        <form className="petForm">
            <h1 className="petForm__title pet_header">Create Pet</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name*: </label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="Enter pet's name" value={pet.name} onChange={handleInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="photoUrls">Images: </label>                     
                    <input type="text" id="photoUrls" required autoFocus className="form-control" placeholder="Image URL" value={pet.photoUrls} onChange={handleInputChange} />
                    <br/>
                    If more than one photo, please add commas.
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="category">Breed*: </label>
                    <input type="text" id="category" required autoFocus className="form-control" placeholder="Breed" value={pet.category} onChange={handleInputChange} />
                </div>
            </fieldset>
            <div className="buttons">
                <button className="btns" onClick={(event) => {
                    event.preventDefault();
                    addNewPet();
                }}>
                    {"Save"}
                </button>
                <button className="btns" onClick={() => navigate("/")}>Cancel</button>
            </div>
        </form>
    )
}

export default PetForm;