"use client";
import { categoryList, useThemeContext } from "@/context/ThemeContext";
import React, { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import Link from "next/link";
import "./format.scss";
import { useCategoriesContext } from "@/context/CategoriesContext";

const SingleTag = ({ params }) => {
  const { tagsList, handleReadIncrement } = useThemeContext();
  const { categories } = useCategoriesContext();
  const [relatedTagsNews, setRelatedTagsNews] = useState([]);
  const [loading, setLoading] = useState(true);

  let { etiket } = params;

  if (etiket.includes("%C5%9F")) {
    etiket = etiket.replaceAll("%C5%9F", "ş");
  };

  useEffect(() => {
    const fetchRelatedNews = async () => {
      const q = query(collection(db, "TagsList"));
      try {
        const tagsArray = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          console.log({...doc});
        });

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRelatedNews();
  }, []);

  // useEffect(() => {
  //   const categoryNumber = categories.length;
  //   for (let i = 0; i < categoryNumber; i++) {

  //     const fetchTags = async () => {
  //       const q = query(collection(db, categories[i].collection));
  //       try {
  //         const querySnapshot = await getDocs(q);
  //         var tagsList = [];
  //         querySnapshot.forEach((doc) => {
  //           if (doc.data().tags.includes(etiket)) {
  //             tagsList.push({ ...doc.data(), doc: doc.id });
  //           }
  //         });
  //         setRelatedTagsNews(tagsList);
  //         setLoading(false);
  //       } 
  //     catch(error){
  //       console.log(error);
  //     }
  //   }
  //   fetchTags()
  // }
  // },[]);

  console.log(etiket);

  // if (loading) return <h2>LOADING...</h2>;

  // if (!tagsList.includes(etiket)) return <h2>NOT FOUND</h2>;

  return (
      <div className="tagsListWrapper">
        {relatedTagsNews.map((item,idx) => {
          const { id, eng, category, image, title, datePublished } = item;
          const timePublished = new Date(datePublished.seconds * 1000);
          const options = { year: "numeric", month: "numeric", day: "2-digit" };
          const formattedDate = timePublished.toLocaleString("tr-TR", options);
          return (
            // <div className="tagCardContainer" key={idx}>
            //   <div className="tagCardContainer-top">
            //     <Link target="_blank" href={`/${category}/${eng}-${id}`}>
            //       <img src={image} className="tagCardContainer-top-img" />
            //     </Link>
            //   </div>
            //   <div className="tagCardContainer-bottom">
            //     <Link
            //       target="_blank"
            //       href={`/${category}/${eng}-${id}`}
            //       className="tagCardContainer-bottom-title"
            //       onClick={()=>handleReadIncrement(category,id)}
            //     >
            //       {title}
            //     </Link>
            //     <div className="tagCardContainer-bottom-line"></div>
            //     <div className="tagCardContainer-bottom-date">
            //       <span className="video-date-title">Yayınlanma T.</span>
            //       <span className="video-date">{formattedDate}</span>
            //     </div>
            //   </div>
            // </div>
            <h2>{etiket}</h2>
          );
        })}
      </div>
  );
};

export default SingleTag;