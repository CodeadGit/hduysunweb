"use client";
import React, { useEffect, useState } from "react";
import "./finance.scss";
import { useThemeContext } from "@/context/ThemeContext";
import axios from "axios";

const currencyLabel = {
  USD: "DOLAR",
  EUR: "EURO",
  GA: "G.ALTIN",
  BTC: "BITCOIN",
};

const Finance = () => {

  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  const necessaryCurrencyTypes = ["USD", "EUR", "BTC", "GA"];

  const [currencyInfo, setCurrencyInfo] = useState([]);

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
    <ul className="finance">
      {currencyInfoArray.map((item) => {
        return <Currency key={item.type} {...item} modeStatus={modeStatus} />
      })}
    </ul>
  );
};

export default Finance;

const Currency = ({ modeStatus, type, info }) => {

  const direction = info.d_yon === "caret-up";
  const price = +info.alis;

  return (
    <li className={`column ${modeStatus ? "dark" : ""}`}>
      {direction ? (
        <div className="arrow-up"></div>
      ) : (
        <div className="arrow-down"></div>
      )}
      <span className={`currency ${modeStatus ? "dark" : ""}`}>
        {currencyLabel[type]}{" "}
        <span className={direction ? "green" : "red"}>{price.toFixed(2)}</span>
      </span>
      <div className={`line ${modeStatus ? "dark" : ""}`}></div>
    </li>
  );
};





