import React from "react";
import Category from "../../components/categoryPage/CategoryPage";
import { categories } from "@/context/utils";
import { notFound } from "next/navigation";

const CategoryPage = ({ params }) => {
  
  const { category } = params;

  if (!categories.includes(category)) {
    return notFound();
  };

  return <Category category={category} />;
};

export default CategoryPage;
