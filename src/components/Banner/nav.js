"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { HiBars3, HiOutlineUserCircle, HiXMark } from "react-icons/hi2";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import Login from "../auth/login";
import Register from "../auth/register";

const NavbarBanner = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#", label: "Alur" },
    { href: "/#", label: "FAQ" },
    { href: "/#", label: "Helpdesk" },
    { href: "/#", label: "Buku Petunjuk" },
  ];

  return (
    <nav className="sticky top-0 z-40 flex w-full border-stroke bg-white px-4 md:px-5 lg:px-10 py-3 h-[76px]">
      <div className="w-full flex items-center justify-between">
        <Image src="/images/rsuhLogo.png" alt="logo" width={180} height={180} />

        <ul className="hidden md:flex flex items-center space-x-8 text-sm text-slate-400 font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={
                  pathname === item.href
                    ? "text-slate-800 border-b-2 pb-1 border-redt"
                    : ""
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="none"
                className="py-2 px-4 text-xs"
              >
                Login
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[725px]">
              <Login />
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="none"
                className="py-2 px-4 bg-red-500  text-xs text-white hover:bg-red-500/85 hover:text-white"
              >
                Register
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[725px]">
              <Register />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <HiXMark className="h-6 w-6" />
        ) : (
          <HiBars3 className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[76px] left-0 right-0 bg-white border-t border-stroke">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={
                    pathname === item.href
                      ? "text-slate-800 border-b-2 pb-1 border-redt"
                      : "text-slate-400"
                  }
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="flex space-x-2 mt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="none"
                    className="py-2 px-4 text-xs"
                  >
                    Login
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[725px]">
                  <Login />
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="none"
                    className="py-2 px-4 bg-red-500 text-xs text-white hover:bg-red-500/85 hover:text-white"
                  >
                    Register
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[725px]">
                  <Register />
                </DialogContent>
              </Dialog>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarBanner;
