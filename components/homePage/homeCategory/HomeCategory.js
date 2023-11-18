"use client";
import React, { useEffect, useState } from "react";
import "./homeCategory.scss";
import CategoryItem from "./HomeCategoryItem";
import { useThemeContext } from "@/context/ThemeContext";
import { useParams } from "next/navigation";
import CategorySkeleton from "../../categoryPage/CategorySkeleton";
import CategoryPagination from "./HomeCategoryPagination";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  doc,
  startAfter,
} from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
const HomeCategory = ({ category, totalPage }) => {
  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";
  const [filteredNews, setFilteredNews] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
   let controller = new AbortController();
     (async () => {
       const q = query(
         collection(db, category),
         orderBy("datePublished", "desc"),
         limit(9),
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
      <div className="categoryWrapper">
        <div className="categoryWrapper_container">
          {filteredNews?.map((item) => {
            return (
              <CategoryItem key={item.id} item={item} modeStatus={modeStatus} />
            );
          })}
        </div>
      </div>
    );
  }
};

export default HomeCategory;
