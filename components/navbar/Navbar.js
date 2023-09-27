"use client";
import React from "react";
import "./navbar.scss";
import NavbarLogo from "../navbarLogo/NavbarLogo";
import Categories from "../categories/Categories";
import Finance from "../finance/Finance";
import Weather from "../weather/Weather";
import Buttons from "../buttons/Buttons";
import BreakingNews from "../breakingNews/BreakingNews";
import { useThemeContext } from "@/context/ThemeContext";
import DrawerMenu from "./DrawerMenu";

const Navbar = () => {

  const { mode, toggle } = useThemeContext();
  const modeStatus = mode === "dark";

  return (
    <div className={`navbar ${modeStatus ? "dark" : ""}`}>
      <div className="navbar-top-header">
        <NavbarLogo wrapper="logo-wrapper" />
        <div className="top-right-wrapper">
          <div className="info-section">
            <Finance />
            <Weather />
            <Buttons wrapper="buttons" />
          </div>
          <Categories wrapper="categories" />
        </div>
        <DrawerMenu toggle={toggle} modeStatus={modeStatus} />
      </div>
      <BreakingNews />
    </div>
  );
};

export default Navbar;
