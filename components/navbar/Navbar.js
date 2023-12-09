"use client";
import React, { useState, useEffect } from "react";
import "./navbar.scss";
import NavbarLogo from "../navbarLogo/NavbarLogo";
import Categories from "../categories/Categories";
import Finance from "../finance/Finance";
import Weather from "../weather/Weather";
import Buttons from "../buttons/Buttons";
import Link from "next/link";
import BreakingNews from "../breakingNews/BreakingNews";
import { useThemeContext } from "@/context/ThemeContext";
import DrawerMenu from "./DrawerMenu";
import { useAdsContext } from "@/context/AdsContext";
import { useModeContext } from "@/context/ModeContext";

const Navbar = () => {
  const { setSearchWord } = useThemeContext();
  const { mode, toggle } = useModeContext();
  const { storyModall } = useAdsContext();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [location ,setLocation] = useState({})
  const modeStatus = mode === "dark";

  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       setLocation(position.coords);
  //     })
  //   }

  return (
    <div className={`navbar ${mode} ${storyModall ? "none" : ""}`} 
    style={{backgroundColor:mode&&"#3e474f"}}
    >
      <div className="navbar-top-header">
         <NavbarLogo wrapper="logo-wrapper"/>
        <div className="top-right-wrapper">
          <div className="info-section">
         {/* <Finance />  */}
          {/* <Weather showSearchBar={showSearchBar}/> */}
            <Buttons wrapper="buttons" showSearchBar={showSearchBar} setShowSearchBar={setShowSearchBar} />
          </div>
          <Categories wrapper="categories" />
        </div>
        <DrawerMenu toggle={toggle} modeStatus={mode} />
      </div>
      <BreakingNews />
    </div>
  );
};

export default Navbar;