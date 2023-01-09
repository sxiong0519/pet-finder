
import { Routes, Route, Link} from "react-router-dom"
import HomePage from "./HomePage";
import OrderForm from "./Inventory/OrderForm";
import PetForm from "./Pet/PetForm";
import SinglePet from "./Pet/SinglePet";
import logo from '../images/logo.jpg';
import "./../styles/App.css"
import Login from "./User/Login";
import CreateAccount from "./User/CreateAccount";
import NavBar from "./NavBar";


export const ApplicationViews = () => {


    //logo & welcome on this component to always show throughout all pages
    
    //#region JSX Elements
    return (
      <div>
        <div className='nav-logo'>
          <div>
          <Link to={"/"}>
            <center>
            <img className='logo' src={logo}/>
            </center>
          </Link>
          </div>
          <div>
          <NavBar/> 
          </div>
        </div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/:status" element={<HomePage/>}/>
          <Route path ="/pet/detail/:id" element={<SinglePet/>}/>
          <Route path="/pet/create" element={<PetForm/>}/>
          <Route path="/order/create/:petId" element={<OrderForm/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<CreateAccount/>}/>
        </Routes>
      </div>
    );
};
//#endregion