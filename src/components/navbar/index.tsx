"use client";
import React, { useState } from "react";

import { Menu } from "lucide-react";
import { Links } from "@/data";
import { Logo } from "../ui/Logo";
import { JoinWaitlistButton } from "../ui/JoinWaitlistButton";
import { MobileNav } from "./MobileNav";
import { NavLinks } from "./NavLinks";

export const Navbar: React.FC = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed flex justify-between items-center top-0 left-0 w-full py-5 px-5 md:px-20 border h-20">
      <div className="flex justify-center">
        <Logo />
      </div>
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center">
        <ul className="flex  space-x-10">
          {Links.map(({ title, href }, i) => (
            <li
              key={i}
              className="list-none text-base text-light md:hover:underline decoration-black font-medium"
            >
              <NavLinks href={href}>{title}</NavLinks>
            </li>
          ))}
        </ul>
      </div>
      {/* Join waitlist desktop view  */}
      <div className="hidden md:flex">
        <JoinWaitlistButton />
      </div>

      {/* Mobile Menu Elements */}

      {/* Mobile Menu */}
      <MobileNav navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />

      {/* Mobile Menu button */}
      <button
        className="border p-1 md:hidden cursor-pointer text-primary"
        onClick={(): void => setNavIsOpen((prev) => !prev)}
      >
        <Menu />
      </button>
    </nav>
  );
};
