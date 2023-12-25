"use client";
import React from "react";
import dynamic from "next/dynamic";
import "./miniNavbar.scss";
//import NavbarLogo from "../navbarLogo/NavbarLogo";
//import Categories from "../categories/Categories";
//import Buttons from "../buttons/Buttons";
import { useModeContext } from "@/context/ModeContext";

const NavbarLogo = dynamic(
  () => import("../navbarLogo/NavbarLogo"),
  { ssr: false }
);
const Categories = dynamic(
  () => import("../categories/Categories"),
  { ssr: false }
);
const Buttons = dynamic(
  () => import("../buttons/Buttons"),
  { ssr: false }
);

const MiniNavbar = () => {

  const { mode } = useModeContext();
  const modeStatus = mode === "dark";

  return (
    <nav className={`mini-navbar ${modeStatus ? "dark" : null}`}>
      <div className="mini-navbar-centered">
        <NavbarLogo wrapper="logo-wrapper" />
        <Categories wrapper="types" active="underline" isActive='active' />
        <Buttons wrapper="buttons" />
      </div>
    </nav>
  );
};

export default MiniNavbar;
