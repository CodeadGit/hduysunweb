"use client"
import React from 'react';
import "./categoryPage.scss";
import Breadcrumb from '../breadcrumb/Breadcrumb';
// import HomePage from '../homePage/HomePage';
import Stories from '../homePageStories/Stories';
// import Haber from '../haberPage/Haber';
import Category from "../homePage/category/Category";
import Caption from '../homePage/caption/Caption';
import AllCategories from '../homePage/allCategories/AllCategories';
import Register from '../homePage/register/Register';
import { categoryConvertor } from '@/context/utils';
import { useThemeContext } from '@/context/ThemeContext';


const CategoryPage= ({category}) => {

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
      <Category category={category} />
      {/* <Register /> */}
    </div>
  )
};

export default CategoryPage;
