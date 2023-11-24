"use client";
import React from "react";
import "./allCategories.scss";
import CategoryItem from "./CategoryItem";
import SmallCatItem from "./SmallCatItem";
import { useThemeContext } from "@/context/ThemeContext";
import { useFetchAssetsContext } from "@/context/FetchAssetsContext";


const AllCategories = () => {

  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";
  const {images} = useFetchAssetsContext();


const categories = [
  {
    id: 1,
    image: images[81],
    category: "spor",
    title:"Spor"
  },
  {
    id: 2,
    image: images[38],
    category: "kultursanat",
    title:"Kültür Sanat"
  },
  {
    id: 3,
    image: images[26],
    category: "egitim",
    title:"Eğitim"
  },
  {
    id: 4,
    image: images[23],
    category: "dunya",
    title:"Dünya"
  },
];

const smallCategories = [
  {
    id: 1,
    image: images[36],
    category: "gundem",
    title:"Gündem"
  },
  {
    id: 2,
    image: images[72],
    category: "siyaset",
    title:"Siyaset"
  },
  {
    id: 3,
    image: images[24],
    category: "ekonomi",
    title:"Ekonomi"
  },
  {
    id: 4,
    image: images[67],
    category: "saglik",
    title:"Sağlık"
  },
  {
    id: 5,
    image: images[103],
    category: "video-galeri",
    title:"Video Galeri"
  },
  {
    id: 6,
    image: images[98],
    category: "teknoloji",
    title:"Teknoloji"
  },
  {
    id: 7,
    image: images[50],
    category: "otomobil",
    title:"Otomobil"
  },
  {
    id: 8,
    image: images[69],
    category: "seyahat",
    title:"Seyahat"
  },
  {
    id: 9,
    image: images[32],
    category: "gastro",
    title:"Gastro"
  },
];


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
