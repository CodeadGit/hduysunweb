"use client";
import React from "react";
import "./buttons.scss";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsMoonFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useThemeContext } from "@/context/ThemeContext";
import Search from "../search/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { useAuthenticationContext } from "@/context/AuthenticationContext";

const Buttons = ({wrapper, showSearchBar, setShowSearchBar}) => {
  
  const router = useRouter();
  const { mode, toggle } = useThemeContext();
  const [isClicked, setIsClicked] = useState("close");
  const { reader, readerData, logout } = useAuthenticationContext();

  const handleToggle = () => {
    setIsClicked((curr)=>(curr=== "close" ? "" : "close") )
  }

  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const navigateLogin = (e) => {
    e.preventDefault();
    router.push("/login");
  };
  const modeStatus = mode === "dark";
  console.log(reader)
  
  return (
    <div className={wrapper}>
      <Search showSearchBar={showSearchBar} setShowSearchBar={setShowSearchBar} />
      {/* <button type="button" className={`search ${modeStatus ? "dark" : ""}`}>
        <BiSearch />
      </button> */}
      <button type="button" className={`switch ${modeStatus ? "dark" : ""}`} onClick={toggle}>
        <BsMoonFill />
      </button>
      {/* {user ? (
        <div className={`user ${modeStatus ? "dark" : ""}`}>
          <span>FD</span>
        </div>
      ) : (
        <button type="button" className={`login-button ${modeStatus ? "dark" : ""}`} onClick={navigateLogin}>
          Giriş
        </button>
      )} */}
      {reader ? (
        <div className={`loginBtn-wrapper ${isClicked}`}> 
          <button
            className={`user ${isClicked} ${modeStatus ? "dark" : ""}`}
            onClick={handleToggle}
          >
            <span>{String(reader.displayName)}</span>
          </button>
          <button className={`logout-btn ${isClicked}`} onClick={logout}>Çıkış Yap</button>
        </div>
      ) : (
        <button
          type="button"
          className={`login-button ${modeStatus ? "dark" : ""}`}
          onClick={navigateLogin}
        >
          Giriş
        </button>
      )}
      </div>
  );
};

export default Buttons;