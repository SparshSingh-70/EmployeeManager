import React, { useState } from 'react';

const SearchEmployee = () => {
    const [empData, setEmpData] = useState([]);
    const [empNameData, setEmpNameData] = useState([]);
    const [searchId, setSearchId] = useState("");
    const [searchName, setSearchName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let url = "http://localhost:2222/getEmp/" + searchId;
        console.log("URL: " + url);

        const response = await fetch(url);
        const empResponse = await response.json();
        setEmpData(empResponse);
    }

    const handleChange = async (e) => {
        setSearchName(e.target.value);

        let url = "http://localhost:2222/getEmpByName/" + searchName;
        console.log("URL: " + url);

        const response = await fetch(url);
        const empResponse = await response.json();
        setEmpNameData(empResponse);


    }

    return (
        <div className='container'>
            <div className='container text-center'>
                <h1 >Search Employee</h1>
            </div>

            <div className='container mt-4 border border-3 ' id="cntrSearchId">
                <h3 className='p-3'> Search Employee By ID</h3>

                <form onSubmit={handleSubmit} className="row g-3 p-3">
                    <div className="col-auto">
                        <label htmlFor="staticEmail2" >Enter Employee ID</label>
                        <input type="text" readOnly className="form-control-plaintext" id="staticEmail2" />
                    </div>
                    <div className="col-auto">
                        <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                        <input type="number" min="1" onChange={(e) => setSearchId(e.target.value)} className="form-control" placeholder="ID" />
                        <span className='p-2'>{searchId}</span>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Search</button>
                    </div>
                </form>

                <div className='container text-center'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">City</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {empData.map((d) => (
                                <tr key={d.id}>
                                    <th scope="row">{d.id}</th>
                                    <td>{d.name}</td>
                                    <td>{d.city}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </div>

            <div className='container mt-4 border border-3 mt-5' id="cntrSearchName">
                <h3 className='p-3'> Search Employee By Name</h3>

                <form className="row g-3 p-3">
                    <div className="col-auto">
                        <label htmlFor="staticEmail2" >Enter Name</label>
                        <input type="text" readOnly className="form-control-plaintext" id="staticEmail2" />
                    </div>
                    <div className="col-auto">
                        <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                        <input type="text" onChange={handleChange} className="form-control" placeholder="Name" />
                        <span className='p-2'>{searchName}</span>
                    </div>
                    {/* <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3"></button>
                    </div> */}
                </form>

                <div className='container text-center'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">City</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {empNameData.map((d) => (
                                <tr key={d.id}>
                                    <th scope="row">{d.id}</th>
                                    <td>{d.name}</td>
                                    <td>{d.city}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </div>

        </div>
    );
}

export default SearchEmployee;
