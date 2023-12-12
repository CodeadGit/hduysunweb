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

  //etiket = decodeURIComponent(etiket);
  console.log(etiket)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const qa = query(doc(db, "TagsList",etiket));
        const querySnapshot = await getDoc(qa);
        setRelatedTagsNews(querySnapshot.data()?.related)
      } catch (error) {
        console.error("Etiketler yüklenirken hata:", error);
      }
    };

      fetchData();
    
  }, [etiket]);

  useEffect(() => {
    const fetchTagNews = async () => {
      let newsArray=[]
      var sliced=relatedTagsNews.slice(0,19)
      for (const related of sliced) {
        var splitted=String(related)?.split("/")
        try {
          const docRef = doc(db, splitted[0], splitted[1]);
          const result = await getDoc(docRef);
          if(result.exists){
            newsArray.push(result.data());
          }
           } catch (error) {
          console.log(error);
        }
        //newsArray.push({coll:splitted[0],id:splitted[1]})

      }
      var filtered=newsArray.filter(Boolean)
      setShownNews(filtered)
      setShownNewsLoading(false)
    };
    fetchTagNews();
  }, [relatedTagsNews]);


  if (shownNewsLoading) return <h4>yükleniyor...</h4>

  return (
    <div className="tagsListWrapper">
      {shownNews.map((item, idx) => {
       const timePublished = new Date(item.datePublished.seconds * 1000);
       const options = { year: "numeric", month: "numeric", day: "2-digit" };
       const formattedDate = timePublished.toLocaleString("tr-TR", options);

        return (
          <div className="tagCardContainer" key={idx}>
            <div className="tagCardContainer-top">
              <Link 
             // target="_blank" 
              href={`/${item.category}/${item.eng}-${item.id}`}>
                <img src={item.image} alt={item.title} className="tagCardContainer-top-img" />
              </Link>
            </div>
            <div className="tagCardContainer-bottom">
              <Link
               // target="_blank"
                href={`/${item.category}/${item.eng}-${item.id}`}
                className="tagCardContainer-bottom-title"
                onClick={() => handleReadIncrement(category, id)}
              >
                {item.title}
              </Link>
              <div className="tagCardContainer-bottom-line"></div>
              <div className="tagCardContainer-bottom-date">
                <span className="video-date-title">Yayınlanma T.</span>
                {/* <span className="video-date">{formattedDate}</span> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleTag;