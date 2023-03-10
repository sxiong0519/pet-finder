import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../action/User/userAction";
import "../../styles/Login/Login.css"



const Login = () => {
    //#region State
    const [login, setLogin] = useState({});
    const [user, setUser] = useState({});
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();
    //#endregion

    //#region Helper Functions    
    const handleInputChange = (event) => {
        const newLogin = { ...login }
          newLogin[event.target.id] = event.target.value
          setLogin(newLogin)
        };

    const handleLogin = (e) => {
        e.preventDefault();
        if (login.userName === undefined || login.password === undefined) {
            window.alert("Please complete all required(*) fields.")
        } else {
        userLogin(login.userName)
            .then(user => {
                setUser(user);
                if (login.password === user.password) {
                    localStorage.setItem("petFinder_user", `${user.username}`);
                    localStorage.setItem("userIdentity", `${user.userStatus}`);
                    localStorage.setItem("FirstLast", `${user.firstName} ${user.lastName}`);
                    navigate("/");
                } else {
                    navigate("/login")
                    setShowError(true)
                }
            });
        };
    }
    //#endregion

    //#region JSX Element
    return (
        <div className="loginform">
            {showError === true ? <h3>Incorrect username/password. Please try again.</h3> : <h2>Welcome back! Please sign in!</h2>}
            <div className='login-form'>
                <div className='login'>
                    <form className="form--login">
                        <fieldset>
                            <label htmlFor="inputUsername"> Username* </label>
                            <input value={login.userName} type="userName"
                                id="userName"
                                className="form-control"
                                placeholder="Username"
                                required autoFocus
                                onChange={handleInputChange} />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="inputPassword"> Password* </label>
                            <input type="password"
                                value={login.password} 
                                id="password"
                                className="form-control"
                                placeholder="Password"
                                required autoFocus 
                                onChange={handleInputChange}/>
                        </fieldset>
                        <fieldset>
                            <button className='btns' onClick={(e) => {
                                e.preventDefault();
                                handleLogin(e);
                            }}>
                                Sign in
                            </button>
                        </fieldset>
                    </form>
                </div>
                <div className="link--register">
                    <Link className="navbar__link" to="/register">Not a member yet?</Link>
                </div>
            </div>
        </div>                
    )
};
//#endregion

export default Login;