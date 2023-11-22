"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { useThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import MostReadNews from "@/components/haberPage/MostReadNews";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import CategoryNewsTitle from "@/components/haberPage/CategoryNewsTitle";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";

const TagsPage = () => {

  const { mode, mostReadNewsList } = useThemeContext();

  const [tagsList, setTagsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const modeStatus = mode === "dark";

  // const res = news.reduce((acc, item) => {
  //   for (const tag of item.tags) {
  //     acc[tag] = (acc[tag] || 0) + 1;
  //   }
  //   return acc;
  // }, {});

  // const categories = Object.entries(res);

  // const result = categories.sort((a, b) => b[1] - a[1]);

  useEffect(() => {
    const fetchTags = async () => {
      const q = query(collection(db, "TagsList"));
      try {
        const tagsArray = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          tagsArray.push({...doc.data(), tag:doc.id});
        });
        setTagsList(tagsArray);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTags();
  }, []);
  
  const links = [
    {
      id: 1,
      title: "Etiketler",
      link: "/etiketler",
    },
  ];

  if (loading) return <h2>LOADING...</h2>;

  return (
    <div className="whole-tags-page">
      <Breadcrumb links={links} />
      <div className="tags-page-container">
        <div className="tags-page-container-left">
          <h3 className="tags-page-title">Popüler Etiketler</h3>
          <div className="tags-list">
            {tagsList?.map((item, idx) => (
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
  const { tag, related } = item;
  const numberOfNews = related.length;
  return (
    <Link href={`/etiketler/${tag}`} className="tag-link">
      <span className="tag-link-item">#{tag}</span>
      <span className="tag-link-info">{numberOfNews} haber</span>
    </Link>
  );
};