"use client";
import "./formalAdverts.scss";
import { formalAdv, useThemeContext } from "../../context/ThemeContext";
import FormalAdvertCard from "./FormalAdvertsCard";

const FormalAdverts = () => {
  const { formalAdv } = useThemeContext();

  const formalAdvList = formalAdv.map((item, id) => (
    <FormalAdvertCard key={id} item={item} content={item.content} />
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
