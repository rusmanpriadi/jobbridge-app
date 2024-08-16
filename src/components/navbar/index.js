import { Button } from "../ui/button";
import { HiBars3 } from "react-icons/hi2";

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
          className="z-40 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-dark-3  lg:hidden"
        >
          <HiBars3 />
        </Button>
      </div>
      <div className="w-full flex items-center justify-between">
        <h1 className="mb-0.5 text-heading-5 font-bold text-dark dark:text-white">
          Dashboard
        </h1>

        <Button>Kirim</Button>
      
      </div>
    </nav>
  );
};

export default Navbar;
