"use client";
import React, { useEffect, useState } from "react";
import Category from "../../components/categoryPage/CategoryPage";
import { useCategoriesContext } from "@/context/CategoriesContext";
import { notFound } from "next/navigation";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";

const CategoryPage = ({ params }) => {
  const { category } = params;
  const { categories, collectionCategories, labelCategories } = useCategoriesContext();

  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const fetchCategoryPage = async () => {
      const qc = query(collection(db, category));
      try {
        const querySnapshot = await getDocs(qc);
        setTotalPage(querySnapshot.size);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategoryPage();
  }, []);

  // if (collectionCategories && !collectionCategories.includes(category)) {
  //   return notFound();
  // }

  return <Category totalPage={totalPage} category={category} />;
};

export default CategoryPage;
