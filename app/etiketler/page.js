"use client";
import React from "react";
import "./style.scss";
import { useThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

const TagsPage = () => {

  const { news, loading } = useThemeContext();

  const res = news.reduce((acc, item) => {
    for (const tag of item.tags) {
      acc[tag] = (acc[tag] || 0) + 1;
    }
    return acc;
  }, {});

  const categories = Object.entries(res);

  const result = categories.sort((a, b) => b[1] - a[1]).slice(0, 10);

  if (loading) return <h2>LOADING...</h2>

  return (
    <>
      <h3>Popüler Etiketler</h3>
      <div className="tags-container">
        {result.map((item, idx) => (
          <TagList key={idx} item={item} />
        ))}
      </div>
    </>
  );
};

export default TagsPage;

const TagList = ({ item }) => {
  return <Link href={`/etiketler/${item[0]}`}># {item[0]}</Link>
};
