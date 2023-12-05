"use client";
import { useThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import "./columnistsAuthors.scss";
import ColumnistsAuthorsCard from "./ColumnistsAuthorsCard";

const ColumnistsAuthors = (item) => {
  const { eng, tittle } = item;
  const { mode, autors } = useThemeContext();

  const modeStatus = mode === "dark";

  return (
    <div className="yazarlar">
      <div className="yazarlar-list">
      {autors.map((item, idx) => (
        <ColumnistsAuthorsCard item={item} key={idx}/>
      ))}
      </div>
    </div>
  );
};

export default ColumnistsAuthors;
