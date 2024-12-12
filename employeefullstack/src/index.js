import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import AddEmp from './components/AddEmp';
import NavComponent from './components/NavComponent';
import HomePage from './components/HomePage';
import SearchEmployee from './components/SearchEmployee';
import UpdateEmp from './components/UpdateEmp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavComponent />
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<App />} />
        <Route path="/addEmp" element={<AddEmp />} />
        <Route path="/display" element={<HomePage />} />
        <Route path="/displaySpecific" element={<SearchEmployee />} />
        <Route path="/updateEmp" element={<UpdateEmp />} />
      </Routes>


    </BrowserRouter>
    {/* <App />
    <AddEmp /> */}
  </React.StrictMode>
);



