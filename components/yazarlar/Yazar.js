"use client"
import React from "react";
import "./yazar.scss";
import YazarData from "../yazarlar/YazarData.json";
import { useModeContext } from "@/context/ModeContext";

const Yazar = () => {

  const { mode } = useModeContext();
  const modeStatus = mode === "dark";

  return (
    <div className="yazarcard">
      <div className="yazarcard-card">
        {YazarData.map((item,idx) => (
          <div key={idx} className={`yazarcard-card-one ${modeStatus ? "dark" : ""}`}>
            <div className="yazarcard-card-one-top" >
              <img 
              className="yazarcard-card-one-top-img"
               src={item.image}
                alt={item.yazar}>
                </img>
            </div>
            

            <div className="yazarcard-card-one-bottom">
              <div className={`yazarcard-card-one-bottom-header ${modeStatus ? "dark" : ""}`}>
                {item.yazar}
              </div>
              <div className="yazarcard-card-one-bottom-line"></div>

              <div className={`yazarcard-card-one-bottom-number ${modeStatus ? "dark" : ""}`}>
                <div>Yazdığı yazı sayısı</div>
                <div>{item.yazisayisi}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Yazar;
