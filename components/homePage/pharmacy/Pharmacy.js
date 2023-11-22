import React, { useEffect, useState } from "react";
import "./pharmacy.scss";
import Link from "next/link";
import axios from "axios";
import { useThemeContext } from "@/context/ThemeContext";

const Pharmacy = () => {

  const API_KEY = process.env.NEXT_PUBLIC_GENERAL_API_KEY;

  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  const [eczaneList, setEczaneList] = useState([]);

  const [info] = useState({
    city: "Bursa",
    region: "",
  });

  const fetchEczaneInfo = async () => {
    try {
      const res = await axios.get(
        `https://api.collectapi.com/health/dutyPharmacy?ilce=${info.region}&il=${info.city}`,
        {
          headers: {
            "Content-Type": "application/json",
             Authorization: API_KEY,
          },
        }
      );
      const list = res.data.result;
      setEczaneList(list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEczaneInfo();
  }, []);

  return (
    <div className="pharmacy">
      <div className="pharmacy-info">
        <h3 className={`pharmacy-info-title ${modeStatus ? "dark" : ""}`}>Nöbetçi Eczaneler</h3>
        <Link
          className={`pharmacy-info-link ${modeStatus ? "dark" : ""}`}
          href="/nobetci-eczane"
          target="_blank"
        >
          Tümünü Gör
        </Link>
      </div>
      <div className="pharmacy-list">
        <h5 className={`pharmacy-list-title ${modeStatus ? "dark" : ""}`}>Bursa</h5>
        {/* <div className="pharmacy-list-cities">
          {eczaneList?.slice(0, 5).map((item,idx) => {
            const { name, dist, phone } = item;
            return (
              <div key={name} className="pharmacy-single">
                <p className={`pharmacy-single-top ${modeStatus ? "dark" : ""}`}>{name}</p>
                <div className="pharmacy-single-bottom">
                  <span className={`pharmacy-single-bottom-district ${modeStatus ? "dark" : ""}`}>
                    {dist}
                  </span>
                  <span className={`pharmacy-single-bottom-district phone ${modeStatus ? "dark" : ""}`}>
                    0{phone}
                  </span>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Pharmacy;