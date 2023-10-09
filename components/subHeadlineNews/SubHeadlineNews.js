"use client";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import SubHeadlineNewsCard from "./SubHeadlineNewsCard";
import "./subHeadlineNews.scss";
import { useThemeContext } from "@/context/ThemeContext";

const SubHeadlineNews = () => {
  const { mansetNewsList, mode } = useThemeContext();
  const modeStatus = mode === "dark";

  const surMansetNews = mansetNewsList.map((item) => {
    return (
      <SubHeadlineNewsCard
        key={item.id}
        item={item}
      />
    );
  });

  const links = [{ id: 1, title: "SürManşetler", link: "/sur-mansetler" }];

  return (
    <div className="surMansetPage">
      <div className="surMansetBreadcrump">
        <Breadcrumb links={links} />
      </div>
      <div className="surMansetNews">
        <span className={`surMansetNews-title ${modeStatus ? "dark" : ""}`}>
          Yan Manşetler
        </span>
        <div className="surMansetNews-news">{surMansetNews}</div>
      </div>
    </div>
  );
};

export default SubHeadlineNews;
