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

const Navbar = (props) => {
  return (
    <nav className="sticky top-0 z-40 flex w-full border-b border-stroke bg-white px-4 py-3">
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
          Dashboard
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
            <DropdownMenuItem >Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
