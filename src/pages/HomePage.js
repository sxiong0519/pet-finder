import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AllPets from './Pet/AllPets';



const HomePage = () => {
    //#region States
    //automatically set as available as landing homepage filtered status
    const [status, setStatus] = useState("Available");
    const statuses = ['Available','Pending', 'Sold'];
    const navigate = useNavigate();
    //#endregion

    //#region Hooks
    //need to refresh based on filtered status chosen
    useEffect(() => {
        console.log('status change')
    }, [status]);
    //#endregion

    //#region JSX Element
    return (
        <div className="App">
            <div className='nav-bar'>
                <button className='add-btn' onClick={() => navigate("/pet/create")}>Add Pet</button>
                <fieldset className='filter-option'>
                    <div className="form-group">
                        <label htmlFor="status">Filter: </label>
                        <select  name="status" id="status" value={status} className="form-control" onChange={(e) => { 
                                setStatus(e.target.value); }}>
                        <option>Pick Status</option>
                        {statuses.map(s => (
                            <option key={s} value={s}>
                            {s}
                            </option>
                        ))};
                        </select>
                    </div>
                </fieldset>
            </div>
            <div>
                <AllPets status={status}/>
            </div>
        </div>
    );
};
//#endregion

export default HomePage;
