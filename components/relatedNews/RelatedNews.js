"use client";
import React, { useEffect, useState } from "react";
import "./relatedNews.scss";
import dynamic from "next/dynamic";
//import SingleRelatedNews from "./SingleRelatedNews";
import { useThemeContext } from "@/context/ThemeContext";
import { useModeContext } from "@/context/ModeContext";

const SingleRelatedNews = dynamic(
  () => import("./SingleRelatedNews"),
  { ssr: false }
);

const RelatedNews = ({ subCategories, id, category }) => {

  const { news, loading } = useThemeContext();
  const { mode } = useModeContext();
  const modeStatus = mode === "dark";
  const [relatedNews, setRelatedNews] = useState([]);

  const relatedCategoryNews = news //Kategoriye göre ilgili haberler
    ?.filter((item) => item?.category === category && item.id !== id)
    .sort((a, b) => b.datePublished?.seconds - a.datePublished?.seconds)
    .slice(0, 3);

  useEffect(() => {
     const arr = [];

     if (subCategories?.length > 2) {
       subCategories?.forEach((cat) => {
         const subCategoryNews = news.find(
           (item) => item.category === cat && item.id !== id
         );
         arr.push(subCategoryNews);
         console.log(arr)
       });
       setRelatedNews(arr);
     } else if (subCategories?.length > 1) {
       subCategories?.forEach((cat, idx) => {
         if (idx === 0) {
           const subCategoryNews = news
             .filter((item) => item.category === cat && item.id !== id)
             .sort((a, b) => b?.datePublished?.seconds - a?.datePublished?.seconds)
             .slice(0, 2);
           arr.push(...subCategoryNews);
         } else {
           const subCategoryNews = news.find(
             (item) => item.category === cat && item.id !== id
           );

           if (subCategoryNews) arr.push(subCategoryNews);
           else {
             const extraNews = news.find(
               (item) =>
                 item.category === category &&
                 !arr.includes(item) &&
                 item.id !== id
             );
             arr.push(extraNews);
           } 
         }
       });
       setRelatedNews(arr);
     } else if (subCategories?.length > 0) {
       const [cat] = subCategories;
       const subCategoryNews = news
         .filter((item) => item.category === cat && item.id !== id)
         .sort((a, b) => b?.datePublished?.seconds - a?.datePublished?.seconds)
         .slice(0, 3);
       arr.push(...subCategoryNews);
       setRelatedNews(arr);
     } else {
       setRelatedNews(relatedCategoryNews);
     }
   }, []);

  return (
    <div className="related-news">
      <div className="related-news-container">
        {relatedCategoryNews &&
          relatedCategoryNews
            ?.sort((a, b) => b?.datePublished?.seconds - a?.datePublished?.seconds)
            .slice(0, 3)
            .map((item, idx) => {
              return (
                <SingleRelatedNews key={idx} item={item} mode={modeStatus} />
              );
            })}
      </div>
    </div>
  );
};

export default RelatedNews;
