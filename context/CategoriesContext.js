"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  doc,
} from "firebase/firestore";
import { db } from "@/firebase/firebase.config";

const CategoryContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    let controller = new AbortController();
    var categoriesList = [];
    (async () => {
        const q = query(collection(db, "Categories"));
        const categoryGetting = onSnapshot(q, (snap) => {
            snap.forEach((doc) => {
                if(doc.data().showAtHeader){ //header true olanlar geliyor
                  categoriesList.push({...doc.data(), doc: doc.id});
                }
            });
            setCategories(categoriesList);
        });
        return () => categoryGetting();
    })();
    return () => controller?.abort();
  }) 

  const values = {
    categories
  }

  return (
    <CategoryContext.Provider value={values}>{children}</CategoryContext.Provider>
  )
};
export const useCategoriesContext = () => useContext(CategoryContext);
