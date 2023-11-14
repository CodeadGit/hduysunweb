"use client";
import React from "react";
import "./buttons.scss";
import { BiSearch } from "react-icons/bi";
import { BsMoonFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useThemeContext } from "@/context/ThemeContext";
import { useAuthenticationContext } from "@/context/AuthenticationContext";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";

const Buttons = ({ wrapper }) => {
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

  console.log(reader, readerData);

  return (
    <div className={wrapper}>
      <button type="button" className={`search ${modeStatus ? "dark" : ""}`}>
        <BiSearch />
      </button>
      <button
        type="button"
        className={`switch ${modeStatus ? "dark" : ""}`}
        onClick={toggle}
      >
        <BsMoonFill />
      </button>
      {reader ? (
        <>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            className={`user ${modeStatus ? "dark" : ""}`}
            onClick={handleClick}
          >
            <span>{reader.displayName.slice(0, 1)}</span>
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
        </>
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
