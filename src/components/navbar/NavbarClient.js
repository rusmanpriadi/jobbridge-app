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
import Link from "next/link";

const NavbarClient = (props) => {
  const pathname = usePathname();

  const navbarData = [
    {
      name: "Home",
      path: "/user/home",
    },
    {
      name: "Pelamar Information",
      path: "/user/data-diri",
    },
    {
      name: "Formasi",
      path: "/user/list-formasi",
    },
    {
      name: "Berkas",
      path: "/user/berkas",
    },
    {
      name: "Resume",
      path: "/user/resume",
    },
  ];
  // Fungsi untuk mendapatkan nama berdasarkan path saat ini
  const getTitle = () => {
    const found = navbarData.find((item) => pathname.startsWith(item.path));
    return found ? found.name : "Page Not Found";
  };

  const title = getTitle(); // Set title berdasarkan path

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
        router.push("/");
      }
    } catch (error) {
      console.error("Error saat logout:", error);
    } finally {
      setLoading(false); // Selesai loading
    }
  };

  return (
    <nav className="sticky top-0 z-40 flex w-full border-b border-stroke bg-white px-4 py-3 h-[74px]">
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
        <h1 className="text-lg font-medium text-slate-600">{title}</h1>

        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="none"
            className=" px-4 py-2 text-xs  text-slate-800 "
          >
            Portal
          </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="flex items-center space-x-3"
            >
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
      </div>
    </nav>
  );
};

export default NavbarClient;
