"use client";
import React from "react";
import "./buttons.scss";
import { BiSearch } from "react-icons/bi";
import { BsMoonFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useThemeContext } from "@/context/ThemeContext";
import Search from "../search/Search";

const Buttons = ({wrapper, showSearchBar, setShowSearchBar}) => {
  // const router = useRouter();
  const { mode, toggle } = useThemeContext();
  const user = true;
  const navigateLogin = () => router.push("/login");
  const modeStatus = mode === "dark";
  
  return (
    <div className={wrapper}>
      <Search showSearchBar={showSearchBar} setShowSearchBar={setShowSearchBar} />
      {/* <button type="button" className={`search ${modeStatus ? "dark" : ""}`}>
        <BiSearch />
      </button> */}
      <button type="button" className={`switch ${modeStatus ? "dark" : ""}`} onClick={toggle}>
        <BsMoonFill />
      </button>
      {user ? (
        <div className={`user ${modeStatus ? "dark" : ""}`}>
          <span>FD</span>
        </div>
      ) : (
        <button type="button" className={`login-button ${modeStatus ? "dark" : ""}`} onClick={navigateLogin}>
          Giriş
        </button>
      )}
    </div>
  );
};

export default Buttons;