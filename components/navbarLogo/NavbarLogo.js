"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import navLogo from "./newNormalLogo.svg";
import darkLogo from "./newWhiteLogo.svg";
import { useModeContext } from "@/context/ModeContext";

const NavbarLogo = ({wrapper}) => {

  const { mode } = useModeContext();
  const modeStatus = mode === 'light';
  const logo = modeStatus ? darkLogo : navLogo;
  
  return (
    <Link href="/" className={wrapper}>
      <Image width={213} src={logo} alt="navbarLogo" priority />
    </Link>
  );
};

export default NavbarLogo;
