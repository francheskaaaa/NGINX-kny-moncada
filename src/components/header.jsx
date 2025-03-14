import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
import user from "../assets/user.png";

const Header = () => {
    // Placeholder user data
    const username = "John Doe"; // Replace with actual user data
    const role = "Admin"; // Replace with actual role data

    return (
        <div
            className="navbar bg-violet-700 h-100 shadow-sm bg-opacity-90 backdrop-blur-sm backdrop-filter backdrop-saturate-150">
            {/* Left: Logo */}
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost hover:bg-violet-700 hover:shadow-lg">
                    {/* Logo image */}
                    <img src={logo} alt="Logo" className="w-24 h-24"/>
                </Link>
            </div>

            {/* Center: Navigation for larger screens */}
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal text-white text-lg">
                    <li>
                        <Link to="/" className="hover:text-white font-semibold">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-white font-semibold">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/donate" className="hover:text-white font-semibold">
                            Donate
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/volunteer"
                            className="hover:text-white font-semibold"
                        >
                            Volunteer
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Right: Profile dropdown */}
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} className="btn btn-ghost btn-circle avatar hover:bg-white-500">
                        <img
                            className="w-10 rounded-full"
                            src={user} // Replace with actual profile picture
                            alt="Profile"
                        />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li className="text-gray-700">
                            <div>
                                <strong>{username}</strong>
                                <br/>
                                <small>{role}</small>
                            </div>
                        </li>
                        <li>
                            <hr className="border-gray-300"/>
                        </li>
                        <li>
                            <Link to="/profile"
                                  className="text-violet-700 hover:font-bold hover:shadow-lg hover:bg-gray-300">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <button
                                className="text-red-500 hover:shadow-lg hover:font-bold hover:bg-gray-300"
                                onClick={() => {
                                    // Logout logic here
                                    alert("Logging out!");
                                }}
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;