import React from 'react';

import {Head, Sidebar} from '@comps-features';

import {Outlet} from 'react-router';

const App = () => {
  return (
    <div className="flex h-screen flex-1">
      <Sidebar />
      <div className="relative flex h-full w-full flex-1 flex-grow flex-col overflow-hidden p-4">
        <Head />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
