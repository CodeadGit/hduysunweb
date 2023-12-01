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
    <div className="yazarlist">
      {autors.map((item, idx) => (
        <ColumnistsAuthorsCard item={item} key={idx}/>
      ))}
    </div>
  );
};

export default ColumnistsAuthors;
