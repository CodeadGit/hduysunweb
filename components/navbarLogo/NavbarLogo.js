"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import navLogo from "./HDLogoWhite.svg";
import darkLogo from "./HDLogo.svg";
import { useThemeContext } from "@/context/ThemeContext";

const NavbarLogo = ({wrapper}) => {

  const { mode } = useThemeContext();
  const modeStatus = mode === 'light';
  const logo = modeStatus ? darkLogo : navLogo;
  
  return (
    <Link href="/" className={wrapper}>
      <Image src={logo} alt="navbarLogo" priority />
    </Link>
  );
};

export default NavbarLogo;
