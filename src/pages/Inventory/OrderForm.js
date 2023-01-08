import { useState } from "react";
import { useNavigate, useParams } from "react-router"
import { createNewPet, updateStatus } from "../../action/Pet/petActions"
import { createStoreOrder } from "../../action/Store/storeAction";



const OrderForm = (petId) => {
    const navigate = useNavigate();
    const date = new Date();
    const shipDate = date.setDate(date.getDate() + 15)

    const newOrder = {
                id: Math.floor(Math.random()*10) + 1,
                petId: petId.petId,
                quantity: 1,
                shipDate: new Date(shipDate).toISOString(),
                status: "placed",
                complete: true
          }
    const createOrder = () => {
        createStoreOrder(newOrder).then(() => updateStatus(petId.petId, "pending")).then(() => navigate(`/`))
    }
    

    return (
        <div>
            <button className="btns" onClick={() => {
                createOrder();
                }}>Apply</button>
        </div>
    )
}

export default OrderForm;