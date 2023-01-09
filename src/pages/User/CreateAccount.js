import { useState } from "react";
import { createNewUser } from "../../action/User/userAction";
import { useNavigate } from "react-router-dom";
import "../../styles/App.css"


const CreateAccount = () => {
    //#region State 
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    //#endregion

    //#region Helper Functions
    const handleInputChange = (event) => {
        const newUser = { ...user }
          newUser[event.target.id] = event.target.value
          setUser(newUser)
        };

    const addNewUser = () => {
        if (user.username.length === 0 || user.password.length === 0) {
            window.alert("Please complete all required(*) fields.")
        } else {
            //random id created due to no consistency currently
            const newUser = {
                id: Math.floor(Math.random()*100) + 1,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                phone: user.phone,
                userStatus: 0
            }
          createNewUser(newUser)
            .then(() => navigate("/login"))
          }
        };         
    //#endregion
    return (
            <div className="loginform">
            <center>
            <form className="createAccount">
                <h1 className="createAccount__title">Create Account</h1>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="username">Username*: </label>
                        <input type="text" id="username" required autoFocus className="form-control" placeholder="Username" value={user.username} onChange={handleInputChange} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="password">Password*: </label>
                        <input type="text" id="password" required autoFocus className="form-control" placeholder="Password" value={user.password} onChange={handleInputChange} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name*: </label>
                        <input type="text" id="firstName" required autoFocus className="form-control" placeholder="Enter first name" value={user.firstName} onChange={handleInputChange} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name*: </label>
                        <input type="text" id="lastName" required autoFocus className="form-control" placeholder="Enter last name" value={user.lastName} onChange={handleInputChange} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="email">Email*: </label>
                        <input type="text" id="email" required autoFocus className="form-control" placeholder="Enter email" value={user.email} onChange={handleInputChange} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number*: </label>
                        <input type="text" id="phone" required autoFocus className="form-control" placeholder="Enter phone" value={user.phone} onChange={handleInputChange} />
                    </div>
                </fieldset>
                <div className="buttons">
                    <button className="btns save-btn" onClick={(event) => {
                        event.preventDefault();
                        addNewUser();
                    }}>
                        {"Save"}
                    </button>
                    <button className="btns" onClick={() => navigate("/")}>Cancel</button>
                </div>
            </form>
            </center>
        </div>
    )
};


export default CreateAccount;