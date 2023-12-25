"use client"
import dynamic from "next/dynamic";
import "./categoryPage.scss";
import { useState, useEffect } from 'react';
//import Breadcrumb from '../breadcrumb/Breadcrumb';
import { useThemeContext } from '@/context/ThemeContext';
//import CategoryPageNews from './CategoryPageNews';
import { notFound } from "next/navigation";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { useModeContext } from '@/context/ModeContext';
import { useCategoriesContext } from '@/context/CategoriesContext';

const Breadcrumb = dynamic(
  () => import("../breadcrumb/Breadcrumb"),
  { ssr: false }
);
const CategoryPageNews = dynamic(
  () => import("./CategoryPageNews"),
  { ssr: false }
);
const CategoryPage= ({category}) => {
  const { categoryConvertor} = useCategoriesContext()

  //const [totalPage, setTotalPage] = useState(0);
 
  // useEffect(() => {
  //   const fetchCategoryPage = async () => {
  //     const qc = query(collection(db, category));
  //     try {
  //       const querySnapshot = await getDocs(qc);
  //       setTotalPage(querySnapshot.size);
  //     }
  //     catch(error) {
  //        console.log(error)
  //     }
    // }
     // fetchCategoryPage();
  // },[]);

  const links = [
    {
      id: 1,
      title: categoryConvertor[category],
      link: `/${category}`,
    },
  ]; 

  const { mode } = useModeContext();
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
      <CategoryPageNews category={category}/>
      {/* <SubCategory category={category}/> */}
      {/* <Register /> */}
    </div>
  )
};

export default CategoryPage;
