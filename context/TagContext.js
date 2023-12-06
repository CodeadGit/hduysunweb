"use client";
import { db } from "@/firebase/firebase.config";
import { collection, getDocs, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
const TagContext = createContext();

export const TagProvider = ({children}) => {
  const [tagsList, setTagsList] = useState([]);
  const [tagsListLoading, setTagsListLoading] = useState(true);

  useEffect(() => {
    const fetchTags = async () => {
      const q = query(collection(db, "TagsList"));
      try {
        const tagsArray = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          tagsArray.push({ ...doc.data(), tag: doc.id });
        });
        setTagsList(tagsArray);
        setTagsListLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTags();
  }, []);

  const values = {
    tagsListLoading,
    tagsList,
  };

  return <TagContext.Provider value={values}>{children}</TagContext.Provider>;
};
export const useTagContext = () => useContext(TagContext);
