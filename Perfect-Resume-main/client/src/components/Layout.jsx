import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";

function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="print:items-start flex-1 flex items-center bg-back">
                <Outlet />
            </div>
            <ToastContainer />
        </div>
    );
}

export default Layout;
