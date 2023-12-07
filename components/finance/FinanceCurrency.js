import "./financeCurrency.scss";
import dolar from "./dolar.svg";
import euro from "./euro.svg";
import Image from "next/image";
import { MdAttachMoney } from "react-icons/md";
import { MdOutlineEuroSymbol } from "react-icons/md";
import { useModeContext } from "@/context/ModeContext";

const FinanceCurrency = ({ mergedObject }) => {
  const { mode } = useModeContext();
  const modeStatus = mode === "dark";
  //const { buying, name, price, code, BanknoteBuying, Isim } = item;

  // const isGold = name === "Gram Altın";

  return (
    <ul className="singleFinanceCurrency">
      <li className={`topFinanceCurrency ${modeStatus ? "dark" : ""}`}>
        <p className={`type ${modeStatus ? "dark" : ""}`}>
          <MdAttachMoney className={`icon ${modeStatus ? "dark" : ""}`} />
        </p>
        <p className={`buying ${modeStatus ? "dark" : ""}`}>
          {mergedObject[0]?.BanknoteBuying?._text}
        </p>
      </li>
      <li className={`topFinanceCurrency ${modeStatus ? "dark" : ""}`}>
        <p className={`type ${modeStatus ? "dark" : ""}`}>
          <MdOutlineEuroSymbol className={`icon ${modeStatus ? "dark" : ""}`} />
        </p>
        <p className={`buying ${modeStatus ? "dark" : ""}`}>
          {mergedObject[1]?.BanknoteBuying?._text}
        </p>
        {/*euro*/}
      </li>
      {/*<div>
         <div 
        //className={difference ? "arrow-up" : "arrow-down"}
        ></div> 
        {/* <Image src={BanknoteBuying._text==="EURO" ? euro : dolar}/> 
      </div>*/}
      {/*<div className="bottomFinanceCurrency">
        <span 
       // className={`percentage ${difference ? "increase" : "decrease"}`}
        >
          {/*%{d_oran}
        </span>
         <span
          className={`change ${modeStatus ? "dark" : ""}`}
        >{`(${degisim})`}</span> 
      </div>*/}
      {/* <div className={`line ${modeStatus ? "dark" : ""}`}></div> */}
    </ul>
  );
};
export default FinanceCurrency;
