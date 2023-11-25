"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="md:px-10 py-5 bg-white fixed w-full hidden lg:flex justify-between items-center z-50">
        <div>
          <Link href="/">
            <Image src="/assets/logo.png" width={80} height={80} />
          </Link>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/agenda" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Agenda
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/partners" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Partners & Sponsors
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/speakers" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Speakers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/events" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Events
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/exhibitors" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Exhibitors
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/floor-map" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Floor map
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/gallery" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Gallery
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/user-guide" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    User guide
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
      <nav className="px-5 py-5 bg-white fixed w-full lg:hidden flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src="/assets/logo.png" width={80} height={80} />
          </Link>
        </div>
        <div>
          <svg
            onClick={() => setOpen(!open)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer text-xl font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        {open && (
          <div className="absolute top-20 left-0 bg-white z-50 w-72 h-screen shadow-md">
            <ul className="p-5">
              <li className="my-1">
                <Link href="/" className="text-md font-semibold">
                  Home
                </Link>
              </li>
              <li className="my-1">
                <Link href="/agenda" className="text-md font-semibold">
                  Agenda
                </Link>
              </li>
              <li className="my-1">
                <Link href="/partners" className="text-md font-semibold">
                  Partners & Sponsors
                </Link>
              </li>
              <li className="my-1">
                <Link href="/speakers" className="text-md font-semibold">
                  Speakers
                </Link>
              </li>
              <li className="my-1">
                <Link href="/exhibitors" className="text-md font-semibold">
                  Exhibitors
                </Link>
              </li>
              <li className="my-1">
                <Link href="/floor-map" className="text-md font-semibold">
                  Floor map
                </Link>
              </li>
              <li className="my-1">
                <Link href="/gallery" className="text-md font-semibold">
                  Gallery
                </Link>
              </li>
              <li className="my-1">
                <Link href="/user-guide" className="text-md font-semibold">
                  User Guide
                </Link>
              </li>
              <li className="my-1">
                <Link href="/contact-us" className="text-md font-semibold">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
