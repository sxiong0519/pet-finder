import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AllPets from './Pet/AllPets';
import "./../styles/App.css"



const HomePage = () => {
    //#region States
    const [status, setStatus] = useState();
    const statuses = ['available','pending', 'sold'];
    const navigate = useNavigate();
    const webStatus = useParams();    
    const [searchTerm, setSearchTerm] = useState();
    //#endregion

    //#region Hooks
    //need to refresh based on filtered status chosen
    useEffect(() => {
        //clear search term when status changes
        setSearchTerm("");
        console.log('status change');
    }, [status]);
    //#endregion

    //#region Helper Functions
    const handleSearch = (e) => {
        const newSearch = e.target.value
        setSearchTerm(newSearch);
    }
    //#endregion 

    //#region JSX Element
    return (
        <div className="App">
            <div className='nav-bar'>
            {localStorage.getItem("userIdentity") ? <button className='btns add-btn' onClick={() => navigate("/pet/create")}>Add Pet</button> : ""}
                <fieldset className='filter-option'>
                    <div className="form-group">
                        <label htmlFor="status">Filter: </label>
                        <select name="status" id="status" value={status} className="form-control" onChange={(e) => { 
                                setStatus(e.target.value); }}>
                        <option>Pick Status</option>
                        {statuses.map(s => (
                            <option className="status_options" key={s} value={s}>
                            {s}
                            </option>
                        ))};
                        </select>
                    </div>
                </fieldset>
            </div>
            <div>
                <center>
                    <br/>
                    {status === 'Pick Status' || !webStatus.status && !status ? "" : 
                    <input type="text" id="categorysearch" 
                    className="categorysearch" 
                    value={searchTerm} 
                    onChange={handleSearch}  
                    placeholder="Search by general category. Ex: Dog" />}
                </center>
                <AllPets searchTerm={searchTerm} webStatus={webStatus.status} status={status}/>
            </div>
        </div>
    );
};
//#endregion

export default HomePage;
