"use client";
import React, { useEffect, useState } from "react";
import Category from "../../components/categoryPage/CategoryPage";
import { useCategoriesContext } from "@/context/CategoriesContext";
import { notFound } from "next/navigation";

const CategoryPage = ({ params }) => {
  const { category } = params;
  const { categories, collectionCategories, labelCategories } = useCategoriesContext();

  // useEffect(() => {
  //   if (collectionCategories && !collectionCategories.includes(category)) {
  //     return notFound();
  //   }
  // },[])

  return <Category category={category} />;
};

export default CategoryPage;
