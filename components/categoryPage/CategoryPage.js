"use client"
import React from 'react';
import "./categoryPage.scss";
import Breadcrumb from '../breadcrumb/Breadcrumb';
// import HomePage from '../homePage/HomePage';
import Stories from '../homePageStories/Stories';
// import Haber from '../haberPage/Haber';
import Category from "../homePage/category/Category";
// import user1 from "../homePage/assets/user1.png";
// import user2 from "../homePage/assets/user2.png";

// import category1 from "../homePage/assets/category1.png";
// import category2 from "../homePage/assets/category2.png";
// import category3 from "../homePage/assets/category3.png";
// import category4 from "../homePage/assets/category4.png";
// import category5 from "../homePage/assets/category5.png";
// import category6 from "../homePage/assets/category6.png";
// import category7 from "../homePage/assets/category7.png";
// import category8 from "../homePage/assets/category8.png";
import Caption from '../homePage/caption/Caption';
import AllCategories from '../homePage/allCategories/AllCategories';
import Register from '../homePage/register/Register';
import { categoryConvertor } from '@/context/utils';
import { useThemeContext } from '@/context/ThemeContext';

// const categoryArray = [
//   {
//     id: 1,
//     title: "Bakan Tekin'den Türkiye Maarif Vakfı'na Ziyaret",
//     name: "Emery Ambrose",
//     img: category1,
//     userImg: user1,
//     content:
//       "Starting from the moment I saw that this skateboarding game was going viral on the internet made me feel like trying but because this is the first time, so I can...",
//     time: "Haziran 10, 2023",
//     like: 124,
//     comments: 37,
//   },
//   {
//     id: 2,
//     title: "Bakan Tekin'den Türkiye Maarif Vakfı'na Ziyaret",
//     name: "Wesley Sneijder",
//     img: category2,
//     userImg: user2,
//     content:
//       "Starting from the moment I saw that this skateboarding game was going viral on the internet made me feel like trying but because this is the first time, so I can...",
//     time: "Haziran 09, 2023",
//     like: 161,
//     comments: 48,
//   },
//   {
//     id: 3,
//     title: "Bakan Tekin'den Türkiye Maarif Vakfı'na Ziyaret",
//     name: "Francesco Totti",
//     img: category3,
//     userImg: user1,
//     content:
//       "Starting from the moment I saw that this skateboarding game was going viral on the internet made me feel like trying but because this is the first time, so I can...",
//     time: "Haziran 10, 2023",
//     like: 124,
//     comments: 37,
//   },
//   {
//     id: 4,
//     title: "Bakan Tekin'den Türkiye Maarif Vakfı'na Ziyaret",
//     name: "Wesley Sneijder",
//     img: category4,
//     userImg: user2,
//     content:
//       "Starting from the moment I saw that this skateboarding game was going viral on the internet made me feel like trying but because this is the first time, so I can...",
//     time: "Haziran 10, 2023",
//     like: 124,
//     comments: 37,
//   },
//   {
//     id: 5,
//     title: "Bakan Tekin'den Türkiye Maarif Vakfı'na Ziyaret",
//     name: "Emery Ambrose",
//     img: category5,
//     userImg: user1,
//     content:
//       "Starting from the moment I saw that this skateboarding game was going viral on the internet made me feel like trying but because this is the first time, so I can...",
//     time: "Haziran 10, 2023",
//     like: 124,
//     comments: 37,
//   },
//   {
//     id: 6,
//     title: "Bakan Tekin'den Türkiye Maarif Vakfı'na Ziyaret",
//     name: "Emery Ambrose",
//     img: category6,
//     userImg: user2,
//     content:
//       "Starting from the moment I saw that this skateboarding game was going viral on the internet made me feel like trying but because this is the first time, so I can...",
//     time: "Haziran 10, 2023",
//     like: 124,
//     comments: 37,
//   },
//   {
//     id: 7,
//     title: "Bakan Tekin'den Türkiye Maarif Vakfı'na Ziyaret",
//     name: "Emery Ambrose",
//     img: category7,
//     userImg: user1,
//     content:
//       "Starting from the moment I saw that this skateboarding game was going viral on the internet made me feel like trying but because this is the first time, so I can...",
//     time: "Haziran 10, 2023",
//     like: 124,
//     comments: 37,
//   },
//   {
//     id: 8,
//     title: "Bakan Tekin'den Türkiye Maarif Vakfı'na Ziyaret",
//     name: "Emery Ambrose",
//     img: category8,
//     userImg: user2,
//     content:
//       "Starting from the moment I saw that this skateboarding game was going viral on the internet made me feel like trying but because this is the first time, so I can...",
//     time: "Haziran 10, 2023",
//     like: 124,
//     comments: 37,
//   },
// ];

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
