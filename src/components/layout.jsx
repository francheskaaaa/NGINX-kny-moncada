import React from "react";
import Header from "./Header";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Header at the top */}
            <header className="fixed top-0 w-full z-10">
                <Header/>
            </header>

            {/* Main Content */}
            <main className="flex-grow mt-[4rem] w-full">
                <Outlet/>
            </main>

            {/* Footer */}
            <footer className="fixed bottom-0 w-full bg-gray-200 text-center py-4">
                <p className="text-gray-700 text-sm">
                    © 2025 Kaya Natin Youth - Moncada. NGINX. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Layout;