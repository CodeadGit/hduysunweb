"use client";
import React from "react";
import "./buttons.scss";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsMoonFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useThemeContext } from "@/context/ThemeContext";
import Search from "../search/Search";
import { useAuthenticationContext } from "@/context/AuthenticationContext";

const Buttons = ({
  wrapper,
  getReaderData,
  showSearchBar,
  setShowSearchBar,
}) => {
  const router = useRouter();
  const { mode, toggle } = useThemeContext();
  const [isClicked, setIsClicked] = useState("close");
  const { reader, readerData, logout } = useAuthenticationContext();

  const handleToggle = () => {
    setIsClicked((curr) => (curr === "close" ? "" : "close"));
  };

  const navigateLogin = (e) => {
    e.preventDefault();
    router.push("/login");
  };
  const modeStatus = mode === "dark";

  return (
    <div className={wrapper}>
      <Search
        showSearchBar={showSearchBar}
        setShowSearchBar={setShowSearchBar}
      />
      {/* <button type="button" className={`search ${modeStatus ? "dark" : ""}`}>
        <BiSearch />
      </button> */}
      <button
        type="button"
        className={`switch ${modeStatus ? "dark" : ""}`}
        onClick={toggle}
      >
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
            <span>
              {reader?.name === undefined
                ? reader?.displayName?.substring(0, 2) + "."
                : reader?.name?.substring(0, 2) + "."}
              {/* {String( reader?.name?.substring(0, 1) + "." ||
                  reader?.displayName?.substring(0, 1) + "."
              )} */}
            </span>
          </button>
          <button className={`logout-btn ${isClicked}`} onClick={logout}>
            Çıkış Yap
          </button>
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
