import { useEffect, useState } from "react";
import { useNavigate} from "react-router"
import { getPetById, updateStatus } from "../../action/Pet/petActions"
import { createStoreOrder } from "../../action/Store/storeAction";



const OrderForm = (id) => {
    //#region State
    const navigate = useNavigate();
    const [pet, setPet] = useState({});
    //ship date is 15 days after order is placed "today" + 15
    const date = new Date();
    const shipDate = date.setDate(date.getDate() + 15);
    const newOrder = {
                id: Math.floor(Math.random()*10) + 1,
                petId: id.id,
                quantity: 1,
                shipDate: new Date(shipDate).toISOString(),
                status: "placed",
                complete: true
            };
    //#endregion

    //#region Hooks
    useEffect(() => {
        if(id){
        getPetById(id)
        .then(p => setPet(p));}
    }, [id])
    //#endregion

    //#region Helper Functions
    const completeOrder = () => {
        //create order, then update pet status to pending, and lastly return to home page
        if(pet.status === 'available'){
            createStoreOrder(newOrder)
            .then(() => updateStatus(pet.id, "pending"))
            .then(() => navigate(`/pending`));
        } else {
            updateStatus(pet.id, "sold")
            .then(() => navigate(`/sold`));
        }
    }
    //#endregion
    
    // #region JSX Element
    return (
        <div>
            <br/>
            {pet.status === 'available' && localStorage.getItem("userIdentity") ? <button className="btns" onClick={() => {
                completeOrder();}}>Apply</button> :
                (pet.status === 'pending' && localStorage.getItem("userIdentity") ? <button className="btns" onClick={() => {
                completeOrder();}}>Sold</button> : (localStorage.getItem("userIdentity") === null && pet.status === 'available' ? 'Interested? Login to apply!' : ''))
            }
        </div>
    )
};
//#endregion
export default OrderForm;