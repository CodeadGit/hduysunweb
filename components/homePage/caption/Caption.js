"use client";
import React from "react";
// import { useRouter } from "next/navigation";
import "./caption.scss";
import { useThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

const Caption = ({ title, link }) => {
  
  // const router = useRouter();
  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  return (
    <div className={`caption ${modeStatus ? "dark" : ""}`}>
      <h3>{title}</h3>
      <div className="line"></div>
      {/* <p className={modeStatus ? "dark" : ""} onClick={() => router.push(`/${link}`)}>Hepsini Gör</p>  */}
      <Link className={modeStatus ? "dark" : ""} href={`/${link}`} target="_blank">Hepsini Gör</Link>
    </div>
  );
};

export default Caption;
