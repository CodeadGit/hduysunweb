"use client";
import React, { useEffect, useState } from "react";
import "./relatedNews.scss";
import SingleRelatedNews from "./SingleRelatedNews";
import { useThemeContext } from "@/context/ThemeContext";

const RelatedNews = ({ subCategories, id, category }) => {

  const { mode, news } = useThemeContext();
  const modeStatus = mode === "dark";
  const [relatedNews, setRelatedNews] = useState([]);

  // console.log(news);
  const relatedCategoryNews = news.filter((item) => item.category === category && item.id !== id).sort((a,b) => b.datePublished.seconds - a.datePublished.seconds).slice(0,3);

  useEffect(() => {
    const arr = [];

    if (subCategories?.length > 2) {
      subCategories?.forEach((cat) => {
        const subCategoryNews = news.find((item) => item.category === cat && item.id !== id);
        if (subCategoryNews) {
          arr.push(subCategoryNews);
        }   
      });
      setRelatedNews(arr);
    }

    else if (subCategories?.length > 1) {
      subCategories?.forEach((cat, idx) => {
        if (idx === 0) {
          const subCategoryNews = news.filter((item) => item.category === cat && item.id !== id).sort((a,b) => b.datePublished.seconds - a.datePublished.seconds).slice(0,2);
          arr.push(...subCategoryNews);
        }
        else {
          const subCategoryNews = news.find((item) => item.category ===  cat && item.id !== id);

          if (subCategoryNews) arr.push(subCategoryNews);

          else {
            const extraNews = news.find((item) => item.category === category && !(arr.includes(item)) && item.id !== id);
            arr.push(extraNews);
          } // bu satırı faruk abiye sor!!!
          
        }
      });
      setRelatedNews(arr);
    }

    else if (subCategories?.length > 0) {
      const [ cat ] = subCategories;
      const subCategoryNews = news.filter((item) => item.category === cat && item.id !== id).sort((a,b) => b.datePublished.seconds - a.datePublished.seconds).slice(0,3);
      arr.push(...subCategoryNews);
      setRelatedNews(arr);
    }

    else {
      setRelatedNews(relatedCategoryNews);
    }
  }, []);

  // console.log(relatedNews);

  return (
    <div className="related-news">
      <div className="related-news-container">
        {relatedNews?.sort((a,b) => b.datePublished.seconds - a.datePublished.seconds).slice(0,3).map((item) => {
          return (
             <SingleRelatedNews key={item?.id} item={item} mode={modeStatus} />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedNews;
