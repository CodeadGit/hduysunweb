"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  increment,
  orderBy,
  query,
  updateDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "@/firebase/firebase.config";

const AdsContext = createContext();

export const AdsContextProvider = ({ children }) => {
  const [adsList, setAdsList] = useState([]);
  const [storiesList, setStoriesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [storiesLoading, setStoriesLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [storyList, setstoryList] = useState([]);
  const [storyModall, setStoryModall] = useState(false);
  const [advertPage, setAdvertPage] = useState(true);

  const handleReadIncrementAds = async (id) => {
    var referance = doc(db, "Ads", id);
    try {
      await updateDoc(referance, {
        read: increment(1),
      });
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(adsList);

  useEffect(() => {
    const fetchAds = async () => {
      const q = query(collection(db, "Ads"), orderBy("datePublished", "asc"));
      try {
        const adsSnapshot = await getDocs(q);
        var adsList = [];

        adsSnapshot.forEach((doc) => {
          if (doc.data().active && doc.data().expired === false)
            adsList.push(doc.data());
        });
        setAdsList(adsList);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAds();
  }, []);

  useEffect(() => {
     const fetchStories = async () => {
      const q = query(collection(db, "Stories"),  orderBy("datePublished", "asc"))
      try {
        const querySnapshot = await getDocs(q);
        var storiesList = [];

        querySnapshot.forEach((doc) => {
          if (doc.data().isNow && doc.data().active) {
            storiesList.push(doc.data());
        }});
        setStoriesList(storiesList);
        setStoriesLoading(false);
      }catch(error) {
        console.log(error)
      }
      }
      fetchStories();
     
  },[]);



  storiesList.sort((a, b) => b.datePublished.seconds - a.datePublished.seconds);
  // console.log(storiesList)

  // const y = storiesList.map((i) => moment(i.datePublished.seconds * 1000).format("DD.MM.YYYY - HH:mm"))
  // console.log(y)

  const uniqueCategories = [...new Set(storiesList.map((i) => i.category))];

  // console.log(uniqueCategories);

  const singleStories = storiesList.filter((i) => {
    if (uniqueCategories.includes(i.category)) {
      const idx = uniqueCategories.indexOf(i.category);
      uniqueCategories.splice(idx, 1);
      return i;
    }
  });

  const combineStories = (cat) => {
    const categories = storiesList.filter((item) => item.category === cat);
    setCategory(cat);
    setstoryList(categories);
  };

  const changeStoryModall = () => setStoryModall((prevState) => !prevState);
  const closeStoryModall = () => setStoryModall(false);

  const closeAdv = () => setAdvertPage(false);

  const handleStories = (cat) => {
    changeStoryModall();
    combineStories(cat);
  };

  const values = {
    adsList,
    loading,
    handleReadIncrementAds,
    storiesList,
    storiesLoading,
    combineStories,
    category,
    storyModall,
    changeStoryModall,
    closeStoryModall,
    storyList,
    handleStories,
    singleStories,
    closeAdv,
    advertPage,
  };

  return <AdsContext.Provider value={values}>{children}</AdsContext.Provider>;
};

export const useAdsContext = () => useContext(AdsContext);
