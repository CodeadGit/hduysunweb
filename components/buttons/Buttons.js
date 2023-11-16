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
  const { reader, readerData, logout } = useAuthenticationContext();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <div style={{position:"relative"}}> 
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            className={`user ${modeStatus ? "dark" : ""}`}
            onClick={handleClick}
          >
            <span>{String(reader.displayName.slice(0,1)+".")}</span>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            sx={{padding:0,margin:0, fontSize:".5rem"}}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem  sx={{padding:"0.5rem",margin:0}} onClick={logout}>Çıkış Yap</MenuItem>
          </Menu>
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