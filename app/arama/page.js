"use client";
import React, { useEffect } from "react";
import { useThemeContext } from "@/context/ThemeContext";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import "./search.scss";

function replaceTurkishCharacters(inputString) {
  const turkishToEnglishMap = {
    ı: "i",
    i: "i",
    ş: "s",
    Ş: "s",
    ğ: "g",
    Ğ: "g",
    ü: "u",
    Ü: "u",
    ö: "o",
    Ö: "o",
    ç: "c",
    Ç: "c",
  };
  return inputString.replace(
    /[\u0130\u0049\u0131\u0069\u015F\u015E\u011F\u011E\u00FC\u00DC\u00F6\u00D6\u00E7\u00C7]/g,
    function (match) {
      return turkishToEnglishMap[match];
    }
  );
}

const SearchPage = () => {

  const { searchWord, setSearchWord, wordNews, setWordNews } = useThemeContext();

  useEffect(() => {
    let controller = new AbortController();
    let tagsListArray = [];

    if (searchWord.length <= 3) {
      setWordNews([]);
      return;
    };

    let willBeSearched = replaceTurkishCharacters(searchWord);

    (async () => {
      const q = query(collection(db, "HDSearch"));
      const newsGetting = onSnapshot(q, (snap) => {
        snap.forEach((doc) => {
          if (doc.data().searchArray.includes(willBeSearched)) {
            tagsListArray.push({ ...doc.data(), doc: doc.id });
          }
        });
        setWordNews(tagsListArray);
      });
      return () => newsGetting();
    })();

    return () => {
      controller?.abort();
      // setSearchWord("");
    }
  }, [searchWord]);

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