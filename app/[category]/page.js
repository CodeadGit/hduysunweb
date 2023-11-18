"use client"
import React, { useEffect, useState } from "react";
import Category from "../../components/categoryPage/CategoryPage";
import { categories } from "@/context/utils";
import { notFound } from "next/navigation";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";

const CategoryPage = ({ params }) => {
  
  const { category } = params;

  if (!categories.includes(category)) {
    return notFound();
  };

  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    let controller = new AbortController();
    var demopagList = [];
    (async () => {
      const qc = query(
        collection(db, category)
      );
      const pagListGetting = onSnapshot(qc, (snap) => {
         setTotalPage(snap.size)
      });
      return () => pagListGetting();
    })();
    return () => controller?.abort();
  }, []);


  return <Category totalPage={totalPage} category={category} />;
};

export default CategoryPage;
