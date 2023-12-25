"use client";
import React from "react";
import dynamic from "next/dynamic";
import "./allCategories.scss";
//import CategoryItem from "./CategoryItem";
//import SmallCatItem from "./SmallCatItem";
import { useFetchAssetsContext } from "@/context/FetchAssetsContext";
import { useModeContext } from "@/context/ModeContext";

const CategoryItem = dynamic(
  () => import("./CategoryItem"),
  { ssr: false }
);
const SmallCatItem = dynamic(
  () => import("./SmallCatItem"),
  { ssr: false }
);
const AllCategories = () => {
  const { mode } = useModeContext();
  const modeStatus = mode === "dark";
  const { images } = useFetchAssetsContext();

  const categories = [
    {
      id: 1,
      image: images[81],
      category: "spor",
      title: "Spor",
    },
    {
      id: 2,
      image: images[38],
      category: "kultursanat",
      title: "Kültür Sanat",
    },
    {
      id: 3,
      image: images[26],
      category: "egitim",
      title: "Eğitim",
    },
    {
      id: 4,
      image: images[23],
      category: "dunya",
      title: "Dünya",
    },
  ];

  const smallCategories = [
    {
      id: 1,
      image: images[36],
      category: "gundem",
      title: "Gündem",
    },
    {
      id: 2,
      image: images[70],
      category: "siyaset",
      title: "Siyaset",
    },
    {
      id: 3,
      image: images[24],
      category: "ekonomi",
      title: "Ekonomi",
    },
    {
      id: 4,
      image: images[67],
      category: "saglik",
      title: "Sağlık",
    },
    {
      id: 5,
      image: images[103],
      category: "videogaleri",
      title: "Video Galeri",
    },
    {
      id: 6,
      image: images[98],
      category: "bilim-teknoloji",
      title: "Bilim Teknoloji",
    },
    {
      id: 7,
      image: images[50],
      category: "otomobil",
      title: "Otomobil",
    },
    {
      id: 8,
      image: images[69],
      category: "gezi",
      title: "Gezi",
    },
    {
      id: 9,
      image: images[8],
      category: "asayis",
      title: "Asayiş",
    },
  ];

  return (
    <div className="allCats">
      <div className="left-side">
        {categories.map((item, idx) => {
          return <CategoryItem key={idx} {...item} modeStatus={modeStatus} />;
        })}
      </div>

      <div className="right-side">
        {smallCategories.map((item, idx) => {
          return <SmallCatItem key={idx} {...item} modeStatus={modeStatus} />;
        })}
      </div>
    </div>
  );
};

export default AllCategories;
