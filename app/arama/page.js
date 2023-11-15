"use client";
import React, { useEffect } from "react";
import { useThemeContext } from "@/context/ThemeContext";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./search.scss";

const SearchPage = () => {

  const { searchWord, setSearchWord, wordNews, setWordNews } = useThemeContext();

  const router = useRouter();

  useEffect(() => {
    let controller = new AbortController();
    let tagsListArray = [];

    if (searchWord.length <= 3) {
      setWordNews([]);
      return;
    };

    (async () => {
      const q = query(collection(db, "HDSearch"));
      const newsGetting = onSnapshot(q, (snap) => {
        snap.forEach((doc) => {
          if (doc.data().searchArray.includes(searchWord)) {
            tagsListArray.push({ ...doc.data(), doc: doc.id });
          }
        });
        setWordNews(tagsListArray);
      });
      return () => newsGetting();
    })();

    return () => {
      controller?.abort();
      setSearchWord("");
    }
  }, [searchWord]);

  // console.log(wordNews);

  // if (wordNews.length === 0) {
  //   router.push("/");
  // };

  return (
    <>
      <h3>{searchWord}</h3>
      <div className="tagsListWrapper">

        {wordNews.map((item) => {

          const { id, eng, category, image, title, datePublished } = item;
          const timePublished = new Date(datePublished.seconds * 1000);
          const options = { year: "numeric", month: "numeric", day: "2-digit" };
          const formattedDate = timePublished.toLocaleString("tr-TR", options);

          return (
            <div className="tagCardContainer">
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
    </>
  );
};

export default SearchPage;
