import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Authentification/Login';
import Boisson from './components/Boisson/Boisson';
import NewDrink from "./components/Boisson/NewDrink";
import ProtectedRoute from "./Temp/ProtectedRoute";
import AdminRoute from "./Temp/AdminRoute";
import Sidebar from "./components/sidebar/Sidebar";
import Notification from "./components/notification/Notification";

function App() {

  return (
    <div className="homeContainer">
        <Routes>
            <Route path='/' element={<AdminRoute/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route element={<ProtectedRoute />} >
                <Route path="/newdrink" element={<NewDrink/>}/>
            </Route>
            <Route path="/drink" element={<Boisson/>}/>
            <Route path="/sidebar" element={<Sidebar/>}/>
            <Route path='/notification' element={<Notification/>}/>
        </Routes>
    </div>
  );
}

export default App;