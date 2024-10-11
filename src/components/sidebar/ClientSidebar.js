"use client";

import React from "react";
import ClickOutside from "../layout/ClickOutside";
import SidebarData from "./SidebarData";
import useLocalStorage from "../../hooks/useLocalStorage";
import SidebarItem from "./SidebarItem";
import Link from "next/link";
import { MdAnalytics } from "react-icons/md";
import {
  HiChevronUpDown,
  HiBuildingLibrary,
  HiMiniXMark,
} from "react-icons/hi2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import Image from "next/image";
import ClientData from "./ClientData";


const ClientSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");
  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`absolute left-0 top-0 z-50 flex h-screen w-[220px] flex-col overflow-y-hidden border-b border-stroke bg-muted/40 border-r bg-slate-100 lg:static lg:translate-x-0 transition ${
          sidebarOpen
            ? "translate-x-0 duration-300 ease-linear"
            : "-translate-x-full"
        }`}
      >
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <div className="flex w-full items-center border-b px-3 h-[74px] lg:px-6 justify-between">
            <Link
              href={"/user/home"}
              className="flex items-center w-full space-x-2"
            >
              <Image
                src="/images/rsuhLogo.png"
                alt="logo"
                width={170}
                height={170}
              />
              {/* <HiBuildingLibrary className="h-6 w-6"/> */}
              {/* <span className="font-semibold">JobBridge</span> */}
            </Link>

            <Button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="block lg:hidden bg-inherit hover:bg-accent hover:text-accent-foregroun"
              size="xs"
            >
              <HiMiniXMark className="h-6 w-6 text-slate-950 hover:text-slate-600" />
            </Button>
          </div>
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-1 px-2 lg:px-3">
            {ClientData.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-5 text-sm font-medium text-dark-4 dark:text-dark-6">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-1">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default ClientSidebar;
