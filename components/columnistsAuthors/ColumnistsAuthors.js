"use client";
import { useThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import "./columnistsAuthors.scss";
//import ColumnistsAuthorsCard from "./ColumnistsAuthorsCard";
import dynamic from "next/dynamic";
import { useModeContext } from "@/context/ModeContext";

const ColumnistsAuthorsCard = dynamic(
  () => import("./ColumnistsAuthorsCard"),
  { ssr: false }
);

const ColumnistsAuthors = (item) => {
  const { eng, tittle } = item;
  const { autors } = useThemeContext();
  const { mode } = useModeContext();

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
