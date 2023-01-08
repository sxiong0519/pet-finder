
import { Routes, Route, Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import HomePage from "./HomePage";
import OrderForm from "./Inventory/OrderForm";
import PetForm from "./Pet/PetForm";
import SinglePet from "./Pet/SinglePet";
import logo from '../images/logo.jpg';
import "./../styles/App.css"


export const ApplicationViews = () => {
  //logo & welcome on this component to always show throughout all pages
  
    return (
      <div>
        <div className='nav-logo'>
          <Link to={"/"}>
            <img className='logo' src={logo}/>
          </Link>
          <h2>Welcome to PetFinder!</h2>
        </div>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path ="/pet/detail/:id" element={<SinglePet/>}/>
          <Route path="/pet/create" element={<PetForm/>}/>
          <Route path="/order/create/:petId" element={<OrderForm/>}/>
        </Routes>
      </div>
  );
};