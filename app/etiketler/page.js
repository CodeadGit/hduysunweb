"use client";
import React from "react";
import "./style.scss";
import { useThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import MostReadNews from "@/components/haberPage/MostReadNews";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import CategoryNewsTitle from "@/components/haberPage/CategoryNewsTitle";

const TagsPage = () => {
  const { news, loading, mode, mostReadNewsList } = useThemeContext();

  const modeStatus = mode === "dark";

  const res = news.reduce((acc, item) => {
    for (const tag of item.tags) {
      acc[tag] = (acc[tag] || 0) + 1;
    }
    return acc;
  }, {});

  const categories = Object.entries(res);

  const result = categories.sort((a, b) => b[1] - a[1]);


  const links = [
    {
      id: 1,
      title: "Etiketler",
      link: "/etiketler",
    },
  ];


  return (
    <div className="whole-tags-page">
      <Breadcrumb links={links} />
      <div className="tags-page-container">
        <div className="tags-page-container-left">
          <h3 className="tags-page-title">Popüler Etiketler</h3>
          <div className="tags-list">
            {result.map((item, idx) => (
              <TagList key={idx} item={item} />
            ))}
          </div>
        </div>
        <div className="tags-page-container-right">
          <CategoryNewsTitle title="En Çok Okunan" modeStatus={modeStatus} />
          <MostReadNews modeStatus={modeStatus} mostReadNews={mostReadNewsList}
          />
        </div>
      </div>
    </div>
  );
};

export default TagsPage;

const TagList = ({ item }) => {
  return (
    <Link href={`/etiketler/${item[0]}`} className="tag-link">
      <span className="tag-link-item">#{item[0]}</span>
      <span className="tag-link-info">{item[1]} haber</span>
    </Link>
  );
};