
import { Routes, Route} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import SinglePet from "./pages/Pet/SinglePet";


export const ApplicationViews = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path ="/pet/detail/:id" element={<SinglePet/>}/>
      </Routes>
    </div>
);
}