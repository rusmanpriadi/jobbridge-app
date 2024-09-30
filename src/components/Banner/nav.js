
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

import Link from "next/link";
import Image from "next/image";

const NavbarBanner = () => {

  return (
    <nav className="sticky top-0 z-40 flex w-full border-b border-stroke bg-white px-5 sm:px-24 py-3 h-[76px]">
      
      <div className="w-full flex items-center justify-between">
        <Image src="/images/rsuhLogo.png" alt="logo" width={180} height={180} />

        <ul className="flex items-center space-x-8">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <div className="flex items-center space-x-2">
          <Link href="/login"   >
            <Button
              variant="outline"
              size="none"
              className=" px-4 py-2 text-xs  text-slate-800 "
            >
              Login
            </Button>
          </Link>
          <Link href="/register" >
            <Button
              variant="outline"
              size="none"
              className=" px-4 py-2 text-xs bg-redt text-white hover:bg-redt/90 hover:text-white "
            >
              Register
            </Button>
          </Link>
       
        </div>
      </div>
    </nav>
  );
};

export default NavbarBanner;
