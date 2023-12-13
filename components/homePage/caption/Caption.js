"use client";
import React from "react";
// import { useRouter } from "next/navigation";
import "./caption.scss";
import Link from "next/link";
import { useModeContext } from "@/context/ModeContext";

const Caption = ({ title, link }) => {
  // const router = useRouter();
  const { mode } = useModeContext();
  const modeStatus = mode === "dark";

  return (
    <div className={`categoryCaption ${modeStatus ? "dark" : ""}`}>
      <h3 className={`${modeStatus ? "dark" : ""}`} style={{ fontSize: "1.25rem", fontWeight: "600" }}>
        {title}
      </h3>
      <div className={`line ${modeStatus ? "dark" : ""}`}></div>
      {/* <p className={modeStatus ? "dark" : ""} onClick={() => router.push(`/${link}`)}>Hepsini Gör</p>  */}
      <Link
        className={modeStatus ? "dark" : ""}
        href={`/${link}`}
        target="_blank"
      >
        Hepsini Gör
      </Link>
    </div>
  );
};

export default Caption;
