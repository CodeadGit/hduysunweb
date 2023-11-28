"use client";
import React, { useEffect, useState } from "react";
import "./finance.scss";
import { useThemeContext } from "@/context/ThemeContext";
import axios from "axios";

const currencyLabel = {
  USD: "DOLAR",
  EUR: "EURO",
  BTC: "BITCOIN",
  Gram: "G.ALTIN",
};

const currencyArray = ["US DOLLAR", "EURO"];

const Finance = () => {

  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  const API_KEY = process.env.NEXT_PUBLIC_GENERAL_API_KEY;

  const [currencyInfo, setCurrencyInfo] = useState([]);

    const fetchFinanceInfo = async () => {

    const resCurrency = await axios.get("https://docapi.herkesduysun.com/money", {
      headers: {
        "Content-Type" : "application/json",
        Authorization: API_KEY,
      }
    });

    const resGold = await axios.get("https://api.collectapi.com/economy/goldPrice", {
      headers: {
        "Content-Type" : "application/json",
        Authorization: API_KEY,
      }
    });

    // const resBitcoin = await axios.get("https://api.collectapi.com/economy/cripto", {
    //   headers: {
    //     "Content-Type" : "application/json",
    //     Authorization: API_KEY,
    //   }
    // });

    const currencyData = resCurrency.data.result.Tarih_Date.Currency;
    const resultCurrency = currencyData.filter((currency) => currencyArray.includes(currency.CurrencyName._text));
    console.log(resultCurrency);

    const goldData = resGold.data.result;
    const resultGold = goldData.filter((gold) => gold.name === "Gram Altın");
    console.log(resultGold);

    // const bitcoinData = resBitcoin.data.result;
    // const resultBitcoin = bitcoinData?.filter((item) => item.code === "BTC");
    // console.log(resultBitcoin);

    // const resultArray = [...resultCurrency, ...resultGold];

    setCurrencyInfo(resultArray);
  };


  // const currencyInfoArray = currencyInfo?.filter((item) =>
  //   necessaryCurrencyTypes.includes(item.type)
  // );

  useEffect(() => {
    fetchFinanceInfo();
  }, []);

  console.log(currencyInfo)
  return (
    <ul className="finance">
      {currencyInfo?.map((item,idx) => {
        return <Currency key={idx} item={item} modeStatus={modeStatus} />
      })}
    </ul>
  );
};

export default Finance;

// const Currency = ({ modeStatus, item }) => {

//   const { buying, name, price, code } = item;

//   const isGold = name === "Gram Altın";

//   return (
//     <li className={`column ${modeStatus ? "dark" : ""}`}>
//         <div className={isGold ? "arrow-down" : "arrow-up"}></div>
//       <span className={`currency ${modeStatus ? "dark" : ""}`}>
//      { isGold ? currencyLabel[name.substring(0,4)] : currencyLabel[code] }
//         <span className={"green"}>{isGold ? buying.toFixed(3) * 1000 : buying ? buying?.toFixed(2) : price.toFixed(0)}</span>
//       </span>
//       <div className={`line ${modeStatus ? "dark" : ""}`}></div>
//     </li>
//   );
// };