"use client";
import React, { useEffect, useState } from "react";
import "./category.scss";
import CategoryItem from "./CategoryItem";
import { useThemeContext } from "@/context/ThemeContext";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { useParams } from "next/navigation";
import CategorySkeleton from "./CategorySkeleton";

const Category = ({ category }) => {

  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";
  const [filteredNews, setFilteredNews] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);

  const params = useParams();
  const newsNumber = Object.keys(params).length ? 20 : 9;

  useEffect(() => {
    let controller = new AbortController();
    (async () => {
      const q = query(
        collection(db, category),
        orderBy("datePublished", "desc"),
        limit(newsNumber),
      );
      const sondakikaGetting = onSnapshot(q, (snap) => {
        var breakingNewsList = [];

        snap.forEach((doc) => {
          breakingNewsList.push(doc.data());
        });

        setFilteredNews(breakingNewsList);
        setCategoryLoading(false);
      });

      return () => sondakikaGetting();
    })();

    return () => controller?.abort();
  }, []);

  // console.log(news);

  if (categoryLoading) {
    return (
      <div style={{display: "flex", justifyContent:"center"}}>
       <CategorySkeleton/>
      </div>
    )
  };

  if (filteredNews.length > 0) {
    return (
      <div className="categoryContainer">
        {filteredNews?.map((item) => {
          return (
            <CategoryItem key={item.id} item={item} modeStatus={modeStatus} />
          );
        })}
      </div>
    );
  }
};

export default Category;
