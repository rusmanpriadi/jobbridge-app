"use client";

import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Button } from "../ui/button";
import { HiBars3, HiOutlineUserCircle } from "react-icons/hi2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Navbar = (props) => {
  const pathname = usePathname();

  const navbarData = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      name: "Pelamar",
      path: "/admin/pelamar",
    },
  ];
  const title = navbarData[pathname === navbarData[0].path ? 0 : 1].name;

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true); // Mulai loading

    try {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Token tidak tersedia.");
      }
      // Panggil API logout Laravel
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Sertakan token untuk autentikasi
          },
        }
      );

      if (response.status === 200) {
        // Hapus token dan role dari Cookies
        Cookies.remove("token");
        Cookies.remove("role");

        // Redirect ke halaman login
        router.push("/login");
      }
    } catch (error) {
      console.error("Error saat logout:", error);
    } finally {
      setLoading(false); // Selesai loading
    }
  };

  return (
    <nav className="sticky top-0 z-40 flex w-full border-b border-stroke bg-white px-4 py-3 h-[60px]">
      <div className="flex flex-grow items-center gap-2 sm:gap-4 lg:hidden justify-between px-4 py-5 shadow-2 md:px-5 ">
        <Button
          aria-controls="sidebar"
          onClick={(e) => {
            e.stopPropagation();
            props.setSidebarOpen(!props.sidebarOpen);
          }}
          className="z-40 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm hover:bg-accent hover:text-accent-foreground  lg:hidden"
        >
          <HiBars3 className="h-4 w-4 text-black" />
        </Button>
      </div>
      <div className="w-full flex items-center justify-between">
        <h1 className="mb-0.5 text-heading-5 font-bold text-dark dark:text-white">
          {title}
        </h1>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <HiOutlineUserCircle className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button onClick={handleLogout} disabled={loading}>
                {loading ? "Logging out..." : "Logout"}
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
