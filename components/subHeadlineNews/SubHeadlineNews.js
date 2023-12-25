"use client";
import { db } from "@/firebase/firebase.config";
//import Breadcrumb from "../breadcrumb/Breadcrumb";
//import SubHeadlineNewsCard from "./SubHeadlineNewsCard";
import "./subHeadlineNews.scss";
import { useState, useEffect } from "react";
import { useThemeContext } from "@/context/ThemeContext";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useModeContext } from "@/context/ModeContext";
import dynamic from "next/dynamic";

const Breadcrumb = dynamic(
  () => import("../breadcrumb/Breadcrumb"),
  { ssr: false }
);
const SubHeadlineNewsCard = dynamic(
  () => import("./SubHeadlineNewsCard"),
  { ssr: false }
);
const SubHeadlineNews = () => {
  const { surMansetNewsList } = useThemeContext();
  const {mode } = useModeContext();
  const [surMansets, setSurmansets] = useState([]);
  const [loading, setLoading] = useState(true);
  const modeStatus = mode === "dark";

  useEffect(() => {
    const fetchSurmansets = async () => {
      const q = query(
        collection(db, "isSurmanset"),
        orderBy("datePublished", "desc"),
        limit(20)
      );
      try {
        const querySnapshot = await getDocs(q);
        var surMansetArr = [];

        querySnapshot.forEach((doc) => {
          if (doc.data()) {
            surMansetArr.push({ ...doc.data(), doc: doc.id });
          }
        });
        setSurmansets(surMansetArr);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSurmansets();
  }, []);

  const surMansetNews = surMansets.map((item,idx) => {
    return (
      <SubHeadlineNewsCard
        key={idx}
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
