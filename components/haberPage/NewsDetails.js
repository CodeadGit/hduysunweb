"use client";
import React, { useEffect } from "react";
import DOMPurify from "dompurify";
import "./newsDetails.scss";
import { useThemeContext } from "@/context/ThemeContext";

const NewsDetails = ({ modeStatus, source, body }) => {
  const newsSource = source ? source : "Haber Merkezi";

  return (
    <div className="news-details">
      {body ? (
        <p
          className={`content ${modeStatus ? "dark" : ""}`}
          //style={{fontSize: `${fontDec}rem !important`}}
          dangerouslySetInnerHTML={{
            // __html: DOMPurify.sanitize(body),
            __html: body,
          }}
        ></p>
      ) : (
        <h3 className={`coming-soon ${modeStatus ? "dark" : ""}`}>
          DETAYLAR BİRAZDAN...
        </h3>
      )}
      <h3 className={`source-title ${modeStatus ? "dark" : ""}`}>
        Kaynak: <span>{newsSource}</span>
      </h3>
    </div>
  );
  const currentFontSize = window.getComputedStyle(content, null).getPropertyValue('font-size');
};

export default NewsDetails;
