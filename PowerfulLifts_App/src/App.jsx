import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import DashboardLayout from "./Components/Misc/DashboardLayout.jsx";
import PrivateRoute from "./Components/Misc/PrivateRoute.jsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<DashboardLayout/>}/>
            <Route path="/admin" element={<PrivateRoute/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App