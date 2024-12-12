import React, { useEffect, useState } from 'react'

export default function HomePage() {

    const [eData, setEData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const url = "http://localhost:2222/getAllEmp"
            const response = await fetch(url);
            const empData = await response.json();
            setEData(empData);

        };
        fetchData();
    }, [])

    console.log(eData);


    return (
        <>

            <div className='container text-center'>
                <h1>Employee Details</h1>
            </div>

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
                        {eData.map((d) => (
                            <tr key={d.id}>
                                <th scope="row">{d.id}</th>
                                <td>{d.name}</td>
                                <td>{d.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}
