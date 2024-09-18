"use client";

import React, { useState } from "react";
import ClientSidebar from "../sidebar/ClientSidebar";
import NavbarClient from "../navbar/NavbarClient";
import { usePathname } from "next/navigation";

const ClientLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
const path = ["/home", "/berkas", "/list-formasi", "/data-diri", "/resume"];
    const isHomePath = path.includes(pathname);
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* {isAdminPath && (
          <> */}
        {isHomePath && (
          <ClientSidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        )}
        {/* <ClientSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <NavbarClient
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
};

export default ClientLayout;
