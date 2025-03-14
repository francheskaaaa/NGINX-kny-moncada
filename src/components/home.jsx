import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/logo.png";

const Home = () => {
    return (
        <div
            className="flex flex-col w-screen h-screen items-center justify-start bg-white"
            style={{overflow: "hidden", paddingTop: "2rem"}} // Added top padding
        >
            {/* Logo */}
            <img
                alt="Kaya Natin Moncada Youth logo with colorful arrows"
                className="w-64 mb-2" // Reduced bottom margin for tighter spacing
                src={logo}
            />

            {/* Description Text */}
            <p className="text-black text-lg leading-relaxed text-center px-4 mb-6">
                A non-profit and non-government organization that promotes good
                governance and ethical leadership in the Philippines.
            </p>

            {/* Buttons */}
            <div className="flex space-x-4 pb-60">
                <Link to="/donate">
                    <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg">
                        Donate Now
                    </button>
                </Link>
                <Link to="/volunteer">
                    <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-6 rounded-lg">
                        Volunteer Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;