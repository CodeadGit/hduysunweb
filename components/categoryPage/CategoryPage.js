"use client"
import React from 'react';
import "./categoryPage.scss";
import { useState, useEffect } from 'react';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import { categoryConvertor } from '@/context/utils';
import { useThemeContext } from '@/context/ThemeContext';
import CategoryPageNews from './CategoryPageNews';
import { categories } from "@/context/utils";
import { notFound } from "next/navigation";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";

const CategoryPage= ({category}) => {

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

  const links = [
    {
      id: 1,
      title: categoryConvertor[category],
      link: `/${category}`,
    },
  ]; 

  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  return (
    <div className={`categoryPageContainer ${modeStatus ? "dark" : ""}`}>
      <Breadcrumb links={links} />
      {/* <Stories /> */}
      {/* <HomePage /> */}
      {/* <Haber category arr={categoryArray} /> */}
      {/* <Caption title={categoryConvertor[category]} link="spor" /> */}
      {/* <AllCategories /> */}
      {/* <Category category={category} /> */}
      <CategoryPageNews category={category} totalPage={totalPage}/>
      {/* <Register /> */}
    </div>
  )
};

export default CategoryPage;
