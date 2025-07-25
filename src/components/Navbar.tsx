'use client';

import React from 'react';


export default function Navbar(){
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed w-full z-40">
            {/* Hamburger Icon (visible on small screens only) */}
            <i
                className="pi pi-bars text-2xl cursor-pointer md:hidden"
                
            ></i>

            {/* Logo */}
            <span className="text-2xl font-extrabold tracking-wide text-gray-700">
                MonyFlow
            </span>

            {/* Right Side Text */}
            <span className="text-lg font-semibold text-gray-500 hidden sm:inline">
                Send/Receive Mony
            </span>
        </nav>
    );
};




