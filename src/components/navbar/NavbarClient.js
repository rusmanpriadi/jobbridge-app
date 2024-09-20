"use client";

// import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
// import { Bars3Icon } from "@heroicons/react/24/outline";
// import Drawer from "./Drawer";
// import Drawerdata from "./Drawerdata";
// import Signdialog from "./Signdialog";
// import Registerdialog from "./Registerdialog";

const navigation = [
  { name: "Home", href: "#/", current: true },
  { name: "Alur", href: "#courses", current: false },
  { name: "Formasi", href: "#mentor", current: false },
  { name: "FAQ", href: "#mentor", current: false },
  { name: "Buku Petunjuk", href: "/", current: false },
  { name: "Testimonial", href: "#testimonial", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CustomLink = ({ href, onClick, children }) => {
  return (
    <Link href={href} passHref>
      <span onClick={onClick} className="px-3 py-4 text-lg font-normal">
        {children}
      </span>
    </Link>
  );
};

const NavbarClient = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [currentLink, setCurrentLink] = useState("/");
  const pathname = usePathname();
const path = ["/user/home", "/user/berkas", "/user/list-formasi", "/user/data-diri", "/user/resume"];
  // Cek apakah pathnya adalah /home
  const isHomePath = path.includes(pathname);

  const handleLinkClick = (href) => {
    setCurrentLink(href);
  };

  return (
    // <Disclosure as="nav" className="navbar">
    <>
      <div className=" px-6 py-1 lg:px-8 border border-b-muted w-full">
        <div className="relative flex h-3 md:h-16 items-center justify-between">
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
            {/* LOGO */}

            {!isHomePath && (
              <div className="flex flex-shrink-0 items-center">
                <Image
                  className="block h-12 w-40 lg:hidden"
                  src={"/images/rsuhLogo.png"}
                  alt="dsign-logo"
                  width={20}
                  height={20}
                />
                <img
                  className="hidden h-full w-full lg:block"
                  src={"/images/rsuhLogo.png"}
                  alt="dsign-logo"
                  width={20}
                  height={20}
                />
              </div>
            )}

            {/* LINKS */}

            <div className="hidden lg:block m-auto">
              <div className="flex space-x-2">
                {navigation.map((item) => (
                  <CustomLink
                    key={item.name}
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                  >
                    <span
                      className={classNames(
                        item.href === currentLink
                          ? "underline-links"
                          : "text-slategray",
                        "px-2 py-4 text-sm font-normal opacity-75 hover:opacity-100"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </span>
                  </CustomLink>
                ))}
              </div>
            </div>
          </div>

          {/* SIGNIN DIALOG */}

          {/* <Signdialog /> */}

          {/* REGISTER DIALOG */}
          {/* 
            <Registerdialog /> */}

          {/* DRAWER FOR MOBILE VIEW */}

          {/* DRAWER ICON */}

          <div className="block lg:hidden">
            {/* <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              /> */}
            <Button>Burger</Button>
          </div>

          <div className="space-x-4">
            <Button variant="none" className="font-semibold">
              <Link href="/login">Masuk</Link>
            </Button>
            <Button
              size="none"
              className=" px-4 py-2 bg-red-500 hover:bg-red-600"
            >
              <Link href="/register"> Buat Akun</Link>
            </Button>
          </div>
          {/* DRAWER LINKS DATA */}

          {/* <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer> */}
        </div>
      </div>
    </>
    // </Disclosure>
  );
};

export default NavbarClient;
