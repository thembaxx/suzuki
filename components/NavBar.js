"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Logo from "../public/suzuki logo.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

import Menu from "./Menu";
import menuItems from "../data/menu.json";

const Header = ({ email }) => {
  return (
    <div className="flex py-2 px-6 justify-end text-xs text-teal-700 font-medium">
      <a className="flex align-middle" href="mailto:hello@heycarter.co.za">
        <EnvelopeIcon className="h-4 mr-2" />
        <p>{email}</p>
      </a>
    </div>
  );
};

const Nav = ({ menuOpen, toggleMenu }) => {
  return (
    <div className="px-4 py-5 pr-6 flex justify-between items-center">
      <Link href="/">
        <div className="flex justify-left">
          <Image className="h-6" src={Logo} alt="" />
          <p className="text-xs font-bold mt-[6px] -ml-1">Carter</p>
        </div>
      </Link>
      <div className="hidden md:flex uppercase font-semibold text-xs gap-4 tracking-wide">
        {menuItems.map(({ title, route }) => (
          <Link key={title} href={route}>
            {title}
          </Link>
        ))}
      </div>
      <div className="md:hidden flex">
        {!menuOpen && (
          <button
            className="flex items-center justify-center h-10 w-10"
            onClick={toggleMenu}
          >
            <Bars3Icon height={24} width={24} />
          </button>
        )}
        {menuOpen && (
          <button
            className="flex items-center justify-center h-10 w-10"
            onClick={toggleMenu}
          >
            <XMarkIcon height={24} width={24} />
          </button>
        )}
      </div>

      <Menu menuOpen={menuOpen} />
    </div>
  );
};

const NavBar = ({ ...company }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Header {...company} />
      <Nav
        {...company}
        menuOpen={menuOpen}
        toggleMenu={() => setMenuOpen((prev) => !prev)}
      />
    </div>
  );
};

export default NavBar;
