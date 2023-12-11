"use client"
import React, { useEffect, useState } from "react";
import Category from "../../components/categoryPage/CategoryPage";
import { categories } from "@/context/utils";
import { notFound } from "next/navigation";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import BikHeader from "@/components/BikHeader";

const CategoryPage = ({ params }) => {
  
  const { category } = params;

  if (!categories.includes(category)) {
    return notFound();
  };

  const [totalPage, setTotalPage] = useState(0);

useEffect(() => {
  const fetchCategoryPage = async () => {
    const qc = query(collection(db, category));
    try {
      const querySnapshot = await getDocs(qc);
      setTotalPage(querySnapshot.size);
    }
    catch(error) {
       console.log(error)
    }
  }
   fetchCategoryPage();
},[]);

  return (<>
  <BikHeader/>
  <Category totalPage={totalPage} category={category} />
  </>);
};

export default CategoryPage;
