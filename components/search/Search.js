"use client";
import React, { useEffect, useRef, useState } from "react";
import "./search.scss";
import { useRouter } from "next/navigation";
import { useThemeContext } from "@/context/ThemeContext";
import { BiSearch } from "react-icons/bi";

const Search = ({showSearchBar, setShowSearchBar}) => {

  const { searchWord, setSearchWord } = useThemeContext();

  const router = useRouter();

  const inputRef = useRef(null);

  function replaceTurkishCharacters(inputString) {
    const turkishToEnglishMap = {
      ı: "i",
      i: "i",
      ş: "s",
      Ş: "s",
      ğ: "g",
      Ğ: "g",
      ü: "u",
      Ü: "u",
      ö: "o",
      Ö: "o",
      ç: "c",
      Ç: "c",
    };
    return inputString.replace(
      /[\u0130\u0049\u0131\u0069\u015F\u015E\u011F\u011E\u00FC\u00DC\u00F6\u00D6\u00E7\u00C7]/g,
      function (match) {
        return turkishToEnglishMap[match];
      }
    );
  }

  //   const y = replaceTurkishCharacters("şükRÜŞ");
  //   console.log(y);

  const handleChange = (e) => {
    const text = replaceTurkishCharacters(e.target.value);
    setSearchWord(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchWord.length <= 3) {
      setSearchWord("");
      return;
    }
    router.push("/arama");
  };

  const toggleSearchButton = () => setShowSearchBar((prev) => !prev);

  const handleClick = (e) => {
    toggleSearchButton();
    handleSubmit(e);
  };

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
