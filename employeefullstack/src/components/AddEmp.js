import React, { useState } from 'react'

function AddEmp() {

    const [ename, setEname] = useState("");
    const [ecity, setEcity] = useState("");

    const addData = async (e) => {

        const url = "http://localhost:2222/addEmp"
        const details = {
            ename: ename,
            ecity: ecity
        }

        await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details)
        })
            .then(() => { alert("Data Added ") })

    }


    return (
        <>
            <div className='container border mt-5 p-4'>
                <form onSubmit={addData}>
                    <div className="mb-3">
                        <label htmlFor="ename" className="form-label">Employeee Name</label>
                        <input type="text" className="form-control" id="ename" onChange={(e) => {
                            setEname(e.target.value)
                        }} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ecity" className="form-label">Empployee City</label>
                        <input type="text" className="form-control" id="ecity" onChange={(e) => {
                            setEcity(e.target.value)
                        }} />
                    </div>
                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div> */}
                    {/* <span> {ename} {ecity}</span> <br /> */}

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>

        </>
    )

}


export default AddEmp