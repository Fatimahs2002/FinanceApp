'use client';

import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
// Required import
import Navbar from './Navbar';
const AppSidebar: React.FC = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
             <Navbar/>
            {/* Sidebar for small screens (toggleable) */}
            <Sidebar
                visible={visible}
                onHide={() => setVisible(false)}
                className="md:hidden"
                style={{ width: '16rem', backgroundColor: '#f8fafc' }}
            >
                <SidebarContent />
            </Sidebar>

            {/* Sidebar for medium and large screens (always visible) */}
            <div className="hidden md:block fixed top-0 left-0 h-screen w-64 bg-white border-r shadow-sm pt-20 px-4">
                <SidebarContent />
                
            </div>

            {/* Pass toggle handler to Navbar */}
       
        </>
    );
};

const SidebarContent = () => (
    <ul className="flex flex-col gap-4 mt-8">
        <li className="hover:bg-blue-100 rounded px-4 py-2 cursor-pointer">Send Mony</li>
        <li className="hover:bg-blue-100 rounded px-4 py-2 cursor-pointer">Receive Mony</li>
        <li className="hover:bg-blue-100 rounded px-4 py-2 cursor-pointer">Reports</li>
        <li className="hover:bg-blue-100 rounded px-4 py-2 cursor-pointer">Settings</li>
    </ul>
);

export default AppSidebar;


