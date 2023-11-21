"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  limit,
  orderBy,
  query,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "@/firebase/firebase.config";

const CategoryContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const q = query(collection(db, "Categories"));
      try {
        const querySnapshot = await getDocs(q);
        var categoriesList = [];

        querySnapshot.forEach((doc) => {
          if (doc.data().showAtHeader) {
            //header true olanlar geliyor
            categoriesList.push({ ...doc.data(), doc: doc.id });
          }
        });
        setCategories(categoriesList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  const values = {
    categories,
  };

  return (
    <CategoryContext.Provider value={values}>
      {children}
    </CategoryContext.Provider>
  );
};
export const useCategoriesContext = () => useContext(CategoryContext);
