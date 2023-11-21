"use client";
import React, { useEffect, useRef } from "react";
import { useThemeContext } from "@/context/ThemeContext";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import Link from "next/link";
import "./search.scss";
import CategoryNewsTitle from "@/components/haberPage/CategoryNewsTitle";
import MostReadNews from "@/components/haberPage/MostReadNews";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

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
  const {
    searchWord,
    setSearchWord,
    wordNews,
    setWordNews,
    mode,
    mostReadNewsList,
    handleSearchButton,
    searchButtonStatus,
  } = useThemeContext();

  const modeStatus = mode === "dark";

  const inputRef = useRef(null);

  const links = [
    {
      id: 1,
      title: "Arama Sayfası",
      link: "/arama",
    },
  ];

  useEffect(() => {
    let controller = new AbortController();
    let tagsListArray = [];

    if (searchWord.length <= 3) {
      setWordNews([]);
      return;
    }

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
    };
  }, [searchButtonStatus]);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearchButton();
    }
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, [searchButtonStatus]);

  return (
    <div className="whole-search-page">
      <Breadcrumb links={links} />
      <div className="buttons-container">
        <input
          style={{ width: "50%" }}
          type="text"
          value={searchWord}
          ref={inputRef}
          onChange={(e) => setSearchWord(e.target.value)}
          onKeyDown={handleEnter}
        />
        <button type="button" onClick={handleSearchButton}>Search</button>
      </div>
      <div className="search-wrapper">
        <div className="search-wrapper-left">
          {wordNews.map((item, idx) => {
            const { id, eng, category, image, title, datePublished } = item;
            const timePublished = new Date(datePublished.seconds * 1000);
            const options = {
              year: "numeric",
              month: "numeric",
              day: "2-digit",
            };
            const formattedDate = timePublished.toLocaleString(
              "tr-TR",
              options
            );

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

        <div className="search-wrapper-right">
          <CategoryNewsTitle title="En Çok Okunan" modeStatus={modeStatus} />
          <MostReadNews
            modeStatus={modeStatus}
            mostReadNews={mostReadNewsList}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
