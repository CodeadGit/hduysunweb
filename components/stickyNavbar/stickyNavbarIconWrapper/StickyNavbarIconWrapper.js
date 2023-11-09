"use client";
import Link from "next/link";
import "./stickyNavbarIconWrapper.scss";
import Image from "next/image";
import { useThemeContext } from "@/context/ThemeContext";
const StickyNavbarIconWrapper = ({ item }) => {
  const { icon, color, url, title, kindOf, work, clickedFunc } = item;

  const {fontIncBtnClickHandler, fontDecBtnClickHandler} = useThemeContext();

  return (
    <>
      {kindOf === "link" ? (
        <Link target="_blank" href={url} className={`iconWrapper ${color}`}>
          {/* <svg src={icon} /> */}
          <Image src={icon} className="iconWrapper-icon" />
        </Link>
      ) : (
        <button
          className={`iconWrapper ${color}`}
          onClick={work === "inc" ? fontIncBtnClickHandler : fontDecBtnClickHandler}
        >
          <Image src={icon} className="iconWrapper-icon" />
        </button>
      )}
    </>
  );
};

export default StickyNavbarIconWrapper;
