"use client";
import React, { useEffect, useState } from "react";
import "./category.scss";
import CategoryItem from "./CategoryItem";
import { useThemeContext } from "@/context/ThemeContext";
import { useParams } from "next/navigation";
import CategorySkeleton from "./CategorySkeleton";
import CategoryPagination from "./CategoryPagination";
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
const Category = ({ category, totalPage }) => {
  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";
  const [filteredNews, setFilteredNews] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const newsNumber = Object.keys(params).length ? 20 : 9;

  const [page, setPage] = useState(1);
  const [pagList, setPagList] = useState([]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [lastData, setLastData] = useState({});

  useEffect(() => {
    let controller = new AbortController();
    var demopagList = [];
    (async () => {
      const qc = query(
        collection(db, category),
        orderBy("datePublished", "desc"),
        limit(20),
        startAfter(page > 1 ? lastData.datePublished : new Date())
      );
      const pagListGetting = onSnapshot(qc, (snap) => {
        if (!snap.empty) {
          snap.forEach((doc) => {
            if (
              doc.data().datePublished.seconds * 1000 <
              new Date().getTime()
            ) {
              demopagList.push({ ...doc.data(), doc: doc.id });
            }
          });
          console.log(demopagList);
          setPagList(demopagList);
          setLastData(demopagList[19]);
          setLoading(false);
        }
      });
      return () => pagListGetting();
    })();
    return () => controller?.abort();
  }, [page]);

  console.log(pagList);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  // useEffect(() => {
  //   let controller = new AbortController();
  //   (async () => {
  //     const q = query(
  //       collection(db, category),
  //       orderBy("datePublished", "desc"),
  //       limit(newsNumber),
  //     );
  //     const sondakikaGetting = onSnapshot(q, (snap) => {
  //       var breakingNewsList = [];

  //       snap.forEach((doc) => {
  //         breakingNewsList.push(doc.data());
  //       });

  //       setFilteredNews(breakingNewsList);
  //       setCategoryLoading(false);
  //     });

  //     return () => sondakikaGetting();
  //   })();

  //   return () => controller?.abort();
  // }, []);

  // console.log(news);

  // if (categoryLoading) {
  //   return (
  //     <div style={{display: "flex", justifyContent:"center"}}>
  //      <CategorySkeleton/>
  //     </div>
  //   )
  // };

  if (pagList.length > 0) {
    return (
      <div className="categoryWrapper">
        <div className="categoryWrapper_container">
          {pagList?.map((item) => {
            return (
              <CategoryItem key={item.id} item={item} modeStatus={modeStatus} />
            );
          })}
        </div>
        <div>
        <CategoryPagination
          totalPage={totalPage}
          handleChange={handleChange}
          page={page}
        />
        </div>
      </div>
    );
  }
};

export default Category;
