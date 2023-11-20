"use client";
import React, { useEffect, useRef, useState } from "react";
import "./search.scss";
import { useRouter } from "next/navigation";
import { useThemeContext } from "@/context/ThemeContext";
import { BiSearch } from "react-icons/bi";
import { usePathname } from "next/navigation";

const Search = ({showSearchBar, setShowSearchBar}) => {

  const { searchWord, setSearchWord } = useThemeContext();

  const pathname = usePathname();

  const router = useRouter();

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchWord.length <= 3) {
      setSearchWord("");
      return;
    }
    router.push("/arama");
  };

  const handleClick = (e) => {

    if (!showSearchBar) {
      setShowSearchBar(true);
      inputRef?.current?.focus();
      return;
    }
    setShowSearchBar(false);
    handleSubmit(e);
  };

  useEffect(() => {
    if (showSearchBar) {
      setShowSearchBar(false);
      setSearchWord("");
    }
  }, [pathname]);
  
  return (
    <form onSubmit={handleSubmit} className="searchForm">
      <input
        ref={inputRef}
        type="text"
        onChange={handleChange}
        value={searchWord}
        className={`searchInput ${showSearchBar ? "show" : ""}`}
      />
      <button
        type="submit"
        className="searchButton"
        onClick={handleClick}
      >
        <BiSearch />
      </button>
    </form>
  );
};

export default Search;
