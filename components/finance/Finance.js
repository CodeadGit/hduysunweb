"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import "./finance.scss";
import { useThemeContext } from "@/context/ThemeContext";
import axios from "axios";
//import FinanceCurrency from "./FinanceCurrency";
import dolar from "./dolar.svg";
import euro from "./euro.svg";
import { useModeContext } from "@/context/ModeContext";

const currencyLabel = {
  USD: "DOLAR",
  EUR: "EURO",
  BTC: "BITCOIN",
  Gram: "G.ALTIN",
};

const FinanceCurrency = dynamic(
  () => import("./FinanceCurrency"),
  { ssr: false }
);

const currencyArray = ["US DOLLAR", "EURO"];

const Finance = () => {
  const { mode } = useModeContext();
  const modeStatus = mode === "dark";

  const API_KEY = process.env.NEXT_PUBLIC_GENERAL_API_KEY;

  const [currencyInfo, setCurrencyInfo] = useState([]);

  const fetchFinanceInfo = async () => {
    const resCurrency = await axios.get(
      "https://docapi.herkesduysun.com/money",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: API_KEY,
        },
      }
    );

    // const resGold = await axios.get(
    //   "https://api.collectapi.com/economy/goldPrice",
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: API_KEY,
    //     },
    //   }
    // );

    //  const resBitcoin = await axios.get("https://api.collectapi.com/economy/cripto", {
    //    headers: {
    //      "Content-Type" : "application/json",
    //      Authorization: API_KEY,
    //    }
    //   });

    const currencyData = resCurrency.data.result.Tarih_Date.Currency;
    const resultCurrency = currencyData.filter((currency) =>
      currencyArray.includes(currency.CurrencyName._text)
    );

    // const goldData = resGold.data.result;
    // const resultGold = goldData.filter((gold) => gold.name === "Gram Altın");

    // const bitcoinData = resBitcoin.data.result;
    // const resultBitcoin = bitcoinData?.filter((item) => item.name === "Bitcoin");
    // console.log(resBitcoin);

    // const resultArray = [...resultCurrency, ...resultGold];
    const resultArray = [...resultCurrency];

    //setCurrencyInfo(resultArray);

    setCurrencyInfo(resultArray);
  };

  // const currencyInfoArray = currencyInfo?.filter((item) =>
  //   necessaryCurrencyTypes.includes(item.type)
  // );

  useEffect(() => {
    fetchFinanceInfo();
  }, []);

  const svgObject = {dolar, euro}

  const mergedObject = Object.entries(currencyInfo).map(([key, value]) => value)

  return (
    <div className="finance">
      {/* {currencyInfo?.map((item, idx) => {
        return <FinanceCurrency key={idx} item={item} modeStatus={modeStatus} />;
      })} */}
      <FinanceCurrency mergedObject={mergedObject}/>
    </div>
  );
};

export default Finance;

