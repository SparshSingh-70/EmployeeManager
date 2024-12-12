import React from 'react';
import { Link } from 'react-router-dom';

const NavComponent = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
        <div className="container-fluid ">


          <a className="navbar-brand" href="#">Employee Details</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item btn">
                <Link className="nav-link toggle" to="/">Home</Link>
              </li>
              <li className="nav-item btn">
                <Link className="nav-link toggle" to="addEmp">Add Employee</Link>
              </li>
              <li className="nav-item btn">
                <Link className="nav-link toggle" to="display">Display All</Link>
              </li>
              <li className="nav-item btn">
                <Link className="nav-link toggle" to="displaySpecific">Search</Link>
              </li>
              <li className="nav-item btn">
                <Link className="nav-link toggle" to="updateEmp">Update</Link>
              </li>
              <li className="nav-item dropdown">

                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div></nav>

    </>


  );
}

export default NavComponent;
