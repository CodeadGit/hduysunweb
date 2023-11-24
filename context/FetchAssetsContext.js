"use client";
import { storage } from "@/firebase/firebase.config";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { createContext, useContext } from "react";
import { useEffect, useState } from "react";

const FetchAssetsContext = createContext();

export const FetchAssetsContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const pathReference = ref(storage, "assets");
        const imagesList = await listAll(pathReference);

        const imagePromises = imagesList.items.map(async (imageRef) => {
          const imageUrl = await getDownloadURL(imageRef);
          return imageUrl;
        });

        const images = await Promise.all(imagePromises);
        setImages(images);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const values = {
    images,
  };
  return (
    <FetchAssetsContext.Provider value={values}>{children}</FetchAssetsContext.Provider>
  );
};
export const useFetchAssetsContext = () => useContext(FetchAssetsContext);
