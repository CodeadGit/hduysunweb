"use client";
import React from "react";
import "./allCategories.scss";

import spor from "../assets/spor.png";
import magazin from "../assets/magazin.png";
import gelisim from "../assets/gelisim.png";
import dunya from "../assets/dunya.png";
import gundem from "../assets/gundem.png";
import siyaset from "../assets/siyaset.png";
import ekonomi from "../assets/ekonomi.png";
import saglik from "../assets/saglik.png";
import video from "../assets/video.png";
import teknoloji from "../assets/teknoloji.png";
import otomobil from "../assets/otomobil.png";
import seyahat from "../assets/seyahat.png";
import gastro from "../assets/gastro.png";

import CategoryItem from "./CategoryItem";
import SmallCatItem from "./SmallCatItem";
import { useThemeContext } from "@/context/ThemeContext";

const categories = [
  {
    id: 1,
    image: spor,
    category: "spor",
  },
  {
    id: 2,
    image: magazin,
    category: "magazin",
  },
  {
    id: 3,
    image: gelisim,
    category: "gelisim",
  },
  {
    id: 4,
    image: dunya,
    category: "dunya",
  },
];

const smallCategories = [
  {
    id: 1,
    image: gundem,
    category: "gundem",
  },
  {
    id: 2,
    image: siyaset,
    category: "siyaset",
  },
  {
    id: 3,
    image: ekonomi,
    category: "ekonomi",
  },
  {
    id: 4,
    image: saglik,
    category: "saglik",
  },
  {
    id: 5,
    image: video,
    category: "video",
  },
  {
    id: 6,
    image: teknoloji,
    category: "teknoloji",
  },
  {
    id: 7,
    image: otomobil,
    category: "otomobil",
  },
  {
    id: 8,
    image: seyahat,
    category: "seyahat",
  },
  {
    id: 9,
    image: gastro,
    category: "gastro",
  },
];

const AllCategories = () => {

  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  return (
    <div className="allCats">
      <div className="left-side">
        {categories.map((item) => {
          return <CategoryItem key={item.id} {...item} modeStatus={modeStatus} />;
        })}
      </div>

      <div className="right-side">
        {smallCategories.map((item) => {
          return <SmallCatItem key={item.id} {...item} modeStatus={modeStatus} />;
        })}
      </div>
    </div>
  );
};

export default AllCategories;
