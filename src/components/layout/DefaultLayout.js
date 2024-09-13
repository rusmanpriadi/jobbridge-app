"use client";

import React, { useState } from 'react'
import Sidebar from '../sidebar'
import Navbar from '../navbar';

const DefaultLayout = ({children}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  // Mengecek apakah path dimulai dengan '/admin'
  //  const isAdminPath = ["/dashboard", "/pelamar", "/formasi"].some((path) =>
  //    pathname.startsWith(path)
  //  );
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* {isAdminPath && (
          <> */}
            <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <Navbar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <main className="z-30 mx-auto w-full">{children}</main>
            </div>
          {/* </>
        )} */}
      </div>
    </>
  );
}

export default DefaultLayout