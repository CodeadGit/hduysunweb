"use client";
import React, { useEffect, useState } from "react";
import "./homeCategory.scss";
import HomeCategoryItem from "./HomeCategoryItem";
import { useParams } from "next/navigation";
import CategorySkeleton from "../../categoryPage/CategorySkeleton";
import CategoryPagination from "./HomeCategoryPagination";
import {
  collection,
  limit,
  orderBy,
  query,
  doc,
  startAfter,
  getDocs,
} from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { useModeContext } from "@/context/ModeContext";
const HomeCategory = ({ category, totalPage }) => {
  const { mode } = useModeContext();
  const modeStatus = mode === "dark";
  const [filteredNews, setFilteredNews] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchHomeCategory = async () => {
      const q = query(
        collection(db, category),
        orderBy("datePublished", "desc"),
        limit(12)
      );
      try {
        const querySnapshot = await getDocs(q);
        var breakingNewsList = [];

        querySnapshot.forEach((doc) => {
          if (doc.data().active) {
            breakingNewsList.push(doc.data());
          }
        });
        setFilteredNews(breakingNewsList);
        setCategoryLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchHomeCategory();
  }, []);


  if (categoryLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CategorySkeleton />
      </div>
    );
  }

  if (filteredNews.length > 0) {
    return (
      <div className="homeCategoryWrapper">
        <div className="homeCategoryWrapper_container">
          {filteredNews?.map((item, idx) => {
            return (
              <HomeCategoryItem key={idx} item={item} modeStatus={modeStatus} />
            );
          })}
        </div>
      </div>
    );
  }
};

export default HomeCategory;
