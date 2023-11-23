"use client";
import { categoryList, useThemeContext } from "@/context/ThemeContext";
import React, { useEffect, useState } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import Link from "next/link";
import "./format.scss";
import { useCategoriesContext } from "@/context/CategoriesContext";

const SingleTag = ({ params }) => {
  const { tagsList, handleReadIncrement } = useThemeContext();
  const { categories } = useCategoriesContext();
  const [thisTag, setThisTag] = useState([]);
  const [relatedTagsNews, setRelatedTagsNews] = useState([]);
  const [loading, setLoading] = useState(true)
  let { etiket } = params;
 


  if (etiket.includes("%C5%9F")) {
    etiket = etiket.replaceAll("%C5%9F", "ş");
  };

  const filterData = tagsList.filter((i) => i.tag === etiket)
    console.log(filterData)

  return (
      <div className="tagsListWrapper">
        {relatedTagsNews.map((item,idx) => {
          const { id, eng, category, image, title, datePublished } = item;
          const timePublished = new Date(datePublished.seconds * 1000);
          const options = { year: "numeric", month: "numeric", day: "2-digit" };
          const formattedDate = timePublished.toLocaleString("tr-TR", options);
          return (
            <div className="tagCardContainer" key={idx}>
              <div className="tagCardContainer-top">
                <Link target="_blank" href={`/${category}/${eng}-${id}`}>
                  <img src={image} className="tagCardContainer-top-img" />
                </Link>
              </div>
              <div className="tagCardContainer-bottom">
                <Link
                  target="_blank"
                  href={`/${category}/${eng}-${id}`}
                  className="tagCardContainer-bottom-title"
                  onClick={()=>handleReadIncrement(category,id)}
                >
                  {title}
                </Link>
                <div className="tagCardContainer-bottom-line"></div>
                <div className="tagCardContainer-bottom-date">
                  <span className="video-date-title">Yayınlanma T.</span>
                  <span className="video-date">{formattedDate}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
  );
};

export default SingleTag;