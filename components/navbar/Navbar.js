"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "./navbar.scss";
//import NavbarLogo from "../navbarLogo/NavbarLogo";
//import Categories from "../categories/Categories";
//import Finance from "../finance/Finance";
//import Weather from "../weather/Weather";
//import Buttons from "../buttons/Buttons";
import Link from "next/link";
//import BreakingNews from "../breakingNews/BreakingNews";
import { useThemeContext } from "@/context/ThemeContext";
//import DrawerMenu from "./DrawerMenu";
import { useAdsContext } from "@/context/AdsContext";
import { useModeContext } from "@/context/ModeContext";

const NavbarLogo = dynamic(
  () => import("../navbarLogo/NavbarLogo"),
  { ssr: false }
);
const Categories = dynamic(
  () => import("../categories/Categories"),
  { ssr: false }
);
const Finance = dynamic(
  () => import("../finance/Finance"),
  { ssr: false }
);
const Weather = dynamic(
  () => import("../weather/Weather"),
  { ssr: false }
);
const Buttons = dynamic(
  () => import("../buttons/Buttons"),
  { ssr: false }
);
const DrawerMenu = dynamic(
  () => import("./DrawerMenu"),
  { ssr: false }
);
const BreakingNews = dynamic(
  () => import("../breakingNews/BreakingNews"),
  { ssr: false }
);

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