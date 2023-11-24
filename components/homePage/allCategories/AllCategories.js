"use client";
import React from "react";
import "./allCategories.scss";

import spor from "../assets/spor.jpeg";
import magazin from "../assets/magazin.png";
import egitim from "../assets/egitim.jpeg";
import dunya from "../assets/dunya.jpeg";
import gundem from "../assets/gundem.jpeg";
import siyaset from "../assets/siyaset.jpeg";
import ekonomi from "../assets/economy.jpeg";
import saglik from "../assets/saglik.jpeg";
import video from "../assets/video.jpeg";
import teknoloji from "../assets/teknoloji.jpeg";
import otomobil from "../assets/otomobil.jpeg";
import seyahat from "../assets/seyahat.jpeg";
import gastro from "../assets/gastro.jpeg";
import kultursanat from "../assets/kultursanat.jpeg";
import CategoryItem from "./CategoryItem";
import SmallCatItem from "./SmallCatItem";
import { useThemeContext } from "@/context/ThemeContext";
import { useFetchAssetsContext } from "@/context/FetchAssetsContext";

const categories = [
  {
    id: 1,
    image: spor,
    category: "spor",
    title:"Spor"
  },
  {
    id: 2,
    image: kultursanat,
    category: "kultursanat",
    title:"Kültür Sanat"
  },
  {
    id: 3,
    image: egitim,
    category: "egitim",
    title:"Eğitim"
  },
  {
    id: 4,
    image: dunya,
    category: "dunya",
    title:"Dünya"
  },
];

const smallCategories = [
  {
    id: 1,
    image: gundem,
    category: "gundem",
    title:"Gündem"
  },
  {
    id: 2,
    image: siyaset,
    category: "siyaset",
    title:"Siyaset"
  },
  {
    id: 3,
    image: ekonomi,
    category: "ekonomi",
    title:"Ekonomi"
  },
  {
    id: 4,
    image: saglik,
    category: "saglik",
    title:"Sağlık"
  },
  {
    id: 5,
    image: video,
    category: "video-galeri",
    title:"Video Galeri"
  },
  {
    id: 6,
    image: teknoloji,
    category: "teknoloji",
    title:"Teknoloji"
  },
  {
    id: 7,
    image: otomobil,
    category: "otomobil",
    title:"Otomobil"
  },
  {
    id: 8,
    image: seyahat,
    category: "seyahat",
    title:"Seyahat"
  },
  {
    id: 9,
    image: gastro,
    category: "gastro",
    title:"Gastro"
  },
];

const AllCategories = () => {

  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";
  const {images} = useFetchAssetsContext();

  console.log(images[0])

  return (
    <div className="allCats">
      <div className="left-side">
        {categories.map((item,idx) => {
          return <CategoryItem key={idx} {...item} modeStatus={modeStatus} />;
        })}
      </div>

      <div className="right-side">
        {smallCategories.map((item,idx) => {
          return <SmallCatItem key={idx} {...item} modeStatus={modeStatus} />;
        })}
      </div>
    </div>
  );
};

export default AllCategories;
