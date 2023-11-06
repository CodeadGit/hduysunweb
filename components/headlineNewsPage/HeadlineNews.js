"use client";
import "./headlineNews.scss";

import HeadlineNewsCard from "./HeadlineNewsCard";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { useThemeContext } from "@/context/ThemeContext";

const HeadlineNewsPage = () => {
  const { mansetNewsList, mode } = useThemeContext();
  const modeStatus = mode === "dark";

  const links = [{ id: 1, title: "Manşetler", link: "/mansetler" }];

  const mansetNews = mansetNewsList.map((item) => {
    return (
      <HeadlineNewsCard
        key={item.id}
        item={item}
      />
    );
  });

  return (
    <div className="mansetPage">
      <div className="mansetBreadcrump">
        <Breadcrumb links={links} />
      </div>
      <div className="mansetNews">
        <span className={`mansetNews-title ${modeStatus ? "dark" : ""}`}>
          Manşetler
        </span>
        <div className="mansetNews-news">{mansetNews}</div>
      </div>
    </div>
  );
};

export default HeadlineNewsPage;
