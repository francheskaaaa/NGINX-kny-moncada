import React from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Layout from "./components/layout.jsx";
import About from "./components/about.jsx";
import Donate from "./components/donate.jsx";
import Volunteer from "./components/volunteer.jsx";
import Profile from "./components/profile.jsx";
import Home from "./components/home.jsx";

function App() {
    return (
        <Router>
            <Routes>
                {/* Login and Signup Routes */}
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>

                {/* Layout and its nested routes */}
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/donate" element={<Donate/>}/>
                    <Route path="/volunteer" element={<Volunteer/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Route>

                {/* Catch-all route for unmatched paths */}
                <Route path="*" element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default App;