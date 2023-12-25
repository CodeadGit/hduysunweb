"use client";
import  { useEffect } from "react";
import DOMPurify from "dompurify";
import "./newsDetails.scss";
import { useThemeContext } from "@/context/ThemeContext";
import { useModeContext } from "@/context/ModeContext";

const NewsDetails = ({ source, body }) => {
  const newsSource = source ? source : "Haber Merkezi";

  const { mode } = useModeContext();
  const modeStatus = mode === "dark";

  return (
    <div className="news-details">
      <p
        className={`content ${modeStatus ? "dark" : ""}`}
        //style={{fontSize: `${fontDec}rem !important`}}
        dangerouslySetInnerHTML={{
          // __html: DOMPurify.sanitize(body),
          __html: body,
        }}
      ></p>
      <h3 className={`source-title ${modeStatus ? "dark" : ""}`}>
        Kaynak: <span>{newsSource}</span>
      </h3>
    </div>
  );
  const currentFontSize = window
    .getComputedStyle(content, null)
    .getPropertyValue("font-size");
};

export default NewsDetails;
