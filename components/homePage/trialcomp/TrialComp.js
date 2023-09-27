"use client";
import React, { useEffect, useState } from "react";
import "./tiral.scss";
import { useThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import football1 from "../assets/football1.png";
import football2 from "../assets/football2.png";
import football3 from "../assets/football3.png";
import Image from "next/image";
import { CircularProgress } from "@mui/material";

const TrialComp = () => {

  const { mode, news, fetching, total = {} } = useThemeContext();
  const modeStatus = mode === "dark";

  const [number, setNumber] = useState(0);
  const [teams, setTeams] = useState([...total?.league]);
  const filteredNews = news.filter((item) => item.category === "spor");

  const handleLeague1 = () => {
    setTeams([...total.league]);
    setNumber(0);
  };

  const handleLeague2 = () => {
    setTeams([...total.league1]);
    setNumber(1);
  };

  const handleLeague3 = () => {
    setTeams([...total.league2]);
    setNumber(2);
  };

useEffect(() => {
setTeams([...total.league]);
}, [total]);

  return (
    <div className="all">
      <div className="points">
        <div className="points-left-section">
          <div className="points-left-section-logos">
            <Image src={football1} alt="" className={`logo-img ${number === 0 ? "selected" : ""} ${modeStatus ? "dark" : ""}`} onClick={handleLeague1} />
            <Image src={football2} alt="" className={`logo-img ${number === 1 ? "selected" : ""} ${modeStatus ? "dark" : ""}`} onClick={handleLeague2} />
            <Image src={football3} alt="" className={`logo-img ${number === 2 ? "selected" : ""} ${modeStatus ? "dark" : ""}`} onClick={handleLeague3} />
          </div>
          <div className="points-left-section-points">
            <table className="content-table">
              <thead>
                <tr className={modeStatus ? "dark" : ""}>
                  <th className="cat">S</th>
                  <th>TAKIM</th>
                  <th className="cat">O</th>
                  <th className="cat">G</th>
                  <th className="cat">B</th>
                  <th className="cat">M</th>
                  <th className="cat">A</th>
                  <th className="cat">P</th>
                </tr>
              </thead>
              <tbody>
                { fetching ? (
                 <tr>
                 <td colSpan="8" style={{ textAlign: "center"}}>
                   <CircularProgress />
                 </td>
               </tr>
                ) :
                teams?.map((team, index) => {
                  return (
                    <tr key={index} className={`tr ${modeStatus ? "dark" : ""}`}>
                      <td>{index + 1}</td>
                      <td>{team.name}</td>
                      <td>{team.played}</td>
                      <td>{team.wins}</td>
                      <td>{team.draws}</td>
                      <td>{team.losses}</td>
                      <td>{team.average}</td>
                      <td>{team.points}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="points-right-section">
          {filteredNews?.slice(0,9).map((item) => {
            return <CategoryItem key={item.id} item={item} modeStatus={modeStatus} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TrialComp;

const CategoryItem = ({ item, modeStatus }) => {
  const { title, image, category, eng, id } = item;

  return (
    <Link href={`/${category}/${eng}-${id}`} target="_blank" className="itemm">
      <img className="img" src={image} alt={title} />
      <p className={`caption ${modeStatus ? "dark" : ""}`}>{title}</p>
    </Link>
  );
};
