import { useState } from "react";
import { useNavigate } from "react-router"
import { createNewPet } from "../../action/Pet/petActions"



const PetForm = () => {
    //#region States
    const navigate = useNavigate();
    //created categories list to ensure consistency
    const categories = ['Dog', 'Cat', 'Bird', 'Reptile', 'Bunnies', 'Other'];
    const [pet, setPet] = useState({
        name: "",
        photoUrls: "",
        category: "",
        tags:[],
        status: ""          
    });
    //#endregion
    
    //#region Helper Functions
    const handleInputChange = (event) => {
        const newPet = { ...pet }
          newPet[event.target.id] = event.target.value
          setPet(newPet)
        };

    const addNewPet = () => {
        if (pet.name.length === 0 || pet.category.length === 0) {
            window.alert("Please complete all required(*) fields.")
        } else {
            //random id created due to no consistency currently
            const newPet = {
                id: Math.floor(Math.random()*10000) + 1,
                name: pet.name,
                photoUrls: pet.photoUrls.split(', '),
                //based on categories list above
                category: {
                    id:categories.indexOf(`${pet.category}`),
                    name:pet.category
                },
                tags:[],
                //automatically available when first created
                status: 'available'          
          }
          createNewPet(newPet)
            .then(() => navigate("/"))
          }
        };
    //#endregion

    //#region JSX Element
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
                    <br/>
                    If more than one photo, please add commas.
                    <br/>                    
                    <textarea rows="2" type="text" id="photoUrls" required autoFocus className="form-control" placeholder="Image URL" value={pet.photoUrls} onChange={handleInputChange} />
                </div>
            </fieldset>
            <fieldset className='filter-option'>
                    <div className="form-group">
                        <label htmlFor="category">Category*: </label>
                        <select  name="category" id="category" value={pet.category} className="form-control" onChange={handleInputChange} >
                        <option value="">Type</option>
                        {categories.map(c => (
                            <option key={c} value={c}>
                            {c}
                            </option>
                        ))}
                        </select>
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
};
//#endregion

export default PetForm;