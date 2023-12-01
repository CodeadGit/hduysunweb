import "./financeCurrency.scss";
import dolar from "./dolar.svg";
import euro from "./euro.svg";
import Image from "next/image";

const FinanceCurrency = ({ modeStatus, item }) => {
  const { buying, name, price, code, BanknoteBuying, Isim } = item;

  const isGold = name === "Gram Altın";

  return (
    <li className={`singleFinanceCurrency ${modeStatus ? "dark" : ""}`}>
      <div className="topFinanceCurrency">
        {/* <div 
        //className={difference ? "arrow-up" : "arrow-down"}
        ></div> */}
        {/* <Image src={BanknoteBuying._text==="EURO" ? euro : dolar}/> */}
        <p className={`type ${modeStatus ? "dark" : ""}`}>{Isim._text}</p>
        <p 
        className="buying"
        >
          {" "+BanknoteBuying._text}
        </p>
      </div>
      <div className="bottomFinanceCurrency">
        <span 
       // className={`percentage ${difference ? "increase" : "decrease"}`}
        >
          {/*%{d_oran}*/}
        </span>
        {/* <span
          className={`change ${modeStatus ? "dark" : ""}`}
        >{`(${degisim})`}</span> */}
      </div>

      <div className={`line ${modeStatus ? "dark" : ""}`}></div>
    </li>
  );
};
export default FinanceCurrency;
