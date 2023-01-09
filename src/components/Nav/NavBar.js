
import { Link, useNavigate } from 'react-router-dom';
import "../../styles/Nav.css"

const NavBar = () => {
    //#region States 
    const navigate = useNavigate();
    //#endregion 

    //#region Helper Functions
    const logout = () =>  {
      localStorage.removeItem("petFinder_user")
      localStorage.removeItem("userIdentity")
    };
    //#endregion
    return (
        <>
        <div className="navigation">
            <ul className="navbar">
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/">Home</Link>
                </li>
                <li className="navbar__item">
                {localStorage.getItem("petFinder_user") ?
                    <Link className="navbar__link" onClick={() => { logout(); navigate('/login');}}>Logout</Link> : <Link className="navbar__link" to={"/login"}>Login</Link> }
                </li>
            </ul>
        </div>
        </>    
    )
};

export default NavBar;