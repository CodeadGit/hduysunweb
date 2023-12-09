"use client";
import React, { useEffect, useState } from "react";
import Category from "../../components/categoryPage/CategoryPage";
import { useCategoriesContext } from "@/context/CategoriesContext";
import { notFound } from "next/navigation";
import BikHeader from "@/components/BikHeader";

const CategoryPage = ({ params }) => {
  const { category } = params;
  const { categories, collectionCategories, labelCategories } = useCategoriesContext();

  // if (collectionCategories && !collectionCategories.includes(category)) {
  //   return notFound();
  // }

  return (<>
  <BikHeader/>
  <Category totalPage={totalPage} category={category} />
  </>);
};

export default CategoryPage;
