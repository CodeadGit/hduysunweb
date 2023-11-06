"use client";
import React from "react";
import "./miniNavbar.scss";
import NavbarLogo from "../navbarLogo/NavbarLogo";
import Categories from "../categories/Categories";
import Buttons from "../buttons/Buttons";
import { useThemeContext } from "@/context/ThemeContext";

const MiniNavbar = () => {

  const { mode } = useThemeContext();
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
