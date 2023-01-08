import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AllPets from './Pet/AllPets';

const HomePage = () => {
    
    const [status, setStatus] = useState("Available");
    const statuses = ['Available','Pending', 'Sold'];
    const navigate = useNavigate();

    useEffect(() => {
        console.log('click')
    }, [status])

    return (
        <div className="App">
            <button onClick={() => navigate("/pet/create")}>Add Pet</button>
            <fieldset>
            <div className="form-group">
                <label htmlFor="status">Filter: </label>
                <select  name="status" id="status" value={status} className="form-control" onChange={(e) => {console.log(e.target.value); setStatus(e.target.value)}}>
                <option value="">Pick Status</option>
                {statuses.map(c => (
                    <option key={c} value={c}>
                    {c}
                    </option>
                ))}
                </select>
            </div>
            </fieldset>
        <AllPets status={status}/>
        </div>
    );
}

export default HomePage;
