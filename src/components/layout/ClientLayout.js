"use client";

import React, { useState } from "react";
import ClientSidebar from "../sidebar/ClientSidebar";
import NavbarClient from "../navbar/NavbarClient";
import { usePathname } from "next/navigation";
import Footer from "../footer";

const ClientLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const path = [
    "/user/home",
    "/user/berkas",
    "/user/list-formasi",
    "/user/data-diri",
    "/user/resume",
  ];
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
        <div className="relative w-full flex flex-1 flex-col overflow-y-auto overflow-x-hidden justify-between">
          <section>
            <NavbarClient
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            <main className="z-30 mx-auto w-full pb-16">{children}</main>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ClientLayout;
