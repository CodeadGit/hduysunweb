"use client";
import React, { useEffect, useState } from "react";
import "./currency.scss";
import Link from "next/link";
import CurrencyItem from "./CurrencyItem";
import axios from "axios";
import { useThemeContext } from "@/context/ThemeContext";

const Currency = () => {

  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  const [currencyInfo, setCurrencyInfo] = useState([]);

  const necessaryCurrencyTypes = ["USD", "EUR", "BTC", "GA", "GBP"];

  const fetchCurrency = async () => {
    const res = await axios.get("https://payment.onlinekesif.com/money", {
      headers: {
        "Content-Type" : "application/json",
      }
    });
    const { data } = res;
    const obj = data.result;
    const result = Object.entries(obj).map(([type, info]) => ({ type, info }));
    setCurrencyInfo(result);
  };

  const currencyInfoArray = currencyInfo?.filter((item) =>
  necessaryCurrencyTypes.includes(item.type)
);
  
  useEffect(() => {
    fetchCurrency();
  }, []);

  return (
    <div className="currency-container">
      <div className="currency-container-section">
        {currencyInfoArray.map((item,idx) => {
          return (
            <div key={idx} className="wrapper">
                <CurrencyItem key={item.id} {...item} modeStatus={modeStatus} />
                <div className="rightLine"></div>
            </div>
          )
        })}       
      </div>
      <div className={`borsa-section ${modeStatus ? "dark" : ""}`}>
        <Link href="/video">CANLI BORSA</Link>
      </div>
    </div>
  );
};

export default Currency;
