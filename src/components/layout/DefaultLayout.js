"use client";

import React, { useState } from 'react'
import Sidebar from '../sidebar'
import Navbar from '../navbar';

const DefaultLayout = ({children}) => {
      const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="z-30 mx-auto w-full  p-4 md:p-6 2xl:p-10">
          {children}
          </main>
        </div>
      </div>
    </>
  );
}

export default DefaultLayout