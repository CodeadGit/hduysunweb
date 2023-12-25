"use client";
import "./formalAdverts.scss";
import { formalAdv, useThemeContext } from "../../context/ThemeContext";
//import FormalAdvertCard from "./FormalAdvertsCard";
import dynamic from "next/dynamic";

const FormalAdvertCard = dynamic(
  () => import("./FormalAdvertsCard"),
  { ssr: false }
);
const FormalAdverts = () => {
  const { formalAdv } = useThemeContext();

  const formalAdvList = formalAdv.map((item, idx) => (
    <FormalAdvertCard key={idx} item={item} content={item.content} />
  ));

  return (
    <div className="formalAdv">
      <div className="formalAdv-searchBox">
        
      </div>
      <div className="formalAdv-list">{formalAdvList}</div>
    </div>
  );
};

export default FormalAdverts;
