import React from "react";
import "./currencyItem.scss";

const currencyLabel = {
  USD: "DOLAR",
  EUR: "EURO",
  GA: "G.ALTIN",
  BTC: "BITCOIN",
  GBP: "STERLIN",
};

const CurrencyItem = ({ type, info, modeStatus }) => {

    const { d_yon, alis, d_oran, degisim } = info;
     const difference = d_yon === "caret-up";
     const price = +alis;

  return (
    <div className="singleCurrency">
      <div className="topCurrency">
        <div className={difference ? "arrow-up" : "arrow-down"}>
        </div>
        <p className={`type ${modeStatus ? "dark" : ""}`}>{currencyLabel[type]}</p>
        <p className={difference ? "greenValue" : "redValue"}>{price.toFixed(2)}</p>
      </div>
      <div className="bottomCurrency">
        <span className={`percentage ${difference ? "increase" : "decrease"}`}>%{d_oran}</span>
        <span className={`change ${modeStatus ? "dark" : ""}`}>{`(${degisim})`}</span>
      </div>
    </div>
  );
};

export default CurrencyItem;
