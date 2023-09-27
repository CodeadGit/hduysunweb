"use client";
import React from "react";
import "./tags.scss";
import Image from "next/image";
import Link from "next/link";
import watsapp from "../assets/watsapp.png";
import { useThemeContext } from "@/context/ThemeContext";

const Tags = () => {

  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  return (
    <div className={`tagsContainer ${modeStatus ? "dark" : ""}`}>
      <div className="tags">
        <h6>Popüler Etiketler</h6>
        <div className="line"></div>
        <p className="tag1">#Nato</p>
        <div className="line"></div>
        <p className="tag1">#Dışİşler</p>
        <div className="line"></div>
        <p className="tag1">#Cumhurbaşkanlığı</p>
      </div>
      <Link href="/ekonomi">
        <Image src={watsapp} alt="Watsapp İhbar" />
      </Link>
    </div>
  );
};

export default Tags;
