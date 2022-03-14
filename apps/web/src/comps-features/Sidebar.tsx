import React from 'react';

import { Navigation } from './Navigation';

export const Sidebar = () => {
    return (
        <div className="border-r hidden md:flex flex-col h-full w-56">
            <div className="w-100 flex p-5 justify-center flex-shrink-0">
                <h4 className="py-2.5 px-3 font-bold bg-gray-300">Logo Placeholder</h4>
            </div>
            <div className="flex-grow overflow-auto">
                <Navigation />
            </div>
        </div>
    );
};
