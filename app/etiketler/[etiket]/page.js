"use client";
import { useThemeContext } from "@/context/ThemeContext";
import React, { useEffect, useState } from "react";
import { doc, getDoc, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import Link from "next/link";
import "./format.scss";

const SingleTag = ({ params }) => {

  const { handleReadIncrement } = useThemeContext();
  const [relatedTagsNews, setRelatedTagsNews] = useState([]);
  const [shownNews, setShownNews] = useState([]);
  const [shownNewsLoading, setShownNewsLoading] = useState(true);
  let { etiket } = params;

  etiket = decodeURIComponent(etiket);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const qa = query(doc(db, "TagsList",etiket));
        const querySnapshot = await getDoc(qa);
        setRelatedTagsNews(querySnapshot.data().related)
      } catch (error) {
        console.error("Etiketler yüklenirken hata:", error);
      }
    };

      fetchData();
    
  }, [etiket]);


  useEffect(() => {
    const fetchTagNews = async () => {
      let newsArray=[]
      for (const related of relatedTagsNews) {
        var splitted=String(related).split("/")
        try {
          const docRef = doc(db, splitted[0], splitted[1]);
          const result = await getDoc(docRef);
          newsArray.push(result.data());
          setShownNewsLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
      setShownNews(newsArray)
      setShownNewsLoading(false)
    };
    fetchTagNews();
  }, [relatedTagsNews]);


  if (shownNewsLoading) return <h4>yükleniyor...</h4>
console.log(shownNews)
  return (
    <div className="tagsListWrapper">
      {shownNews.map((item, idx) => {

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
                onClick={() => handleReadIncrement(category, id)}
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