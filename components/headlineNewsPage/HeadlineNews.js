"use client";
import "./headlineNews.scss";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
//import HeadlineNewsCard from "./HeadlineNewsCard";
//import Breadcrumb from "../breadcrumb/Breadcrumb";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { useModeContext } from "@/context/ModeContext";

const HeadlineNewsCard = dynamic(
  () => import("./HeadlineNewsCard"),
  { ssr: false }
);
const Breadcrumb = dynamic(
  () => import("../breadcrumb/Breadcrumb"),
  { ssr: false }
);
const HeadlineNewsPage = () => {
  const { mode } = useModeContext();
  const modeStatus = mode === "dark";
  const [mansetList, setMansetList] = useState([]);
  const [loading, setLoading] = useState(true)

  const links = [{ id: 1, title: "Manşetler", link: "/mansetler" }];

  useEffect(() => {
    const fetchMansets = async () => {
      const q = query(
        collection(db, "isManset"),
        orderBy("datePublished", "desc"),
        limit(20)
      );
      try {
        const querySnapshot = await getDocs(q);
        var mansetsList = [];

        querySnapshot.forEach((doc) => {
          //header true olanlar geliyor
          if (doc.data()) {
            mansetsList.push({ ...doc.data(), doc: doc.id });
          }
        });
        setMansetList(mansetsList);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMansets();
  }, []);

  const mansetNews = mansetList.map((item,idx) => {
    return (
      <HeadlineNewsCard
        key={idx}
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
