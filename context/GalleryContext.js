"use client";
import { db } from "@/firebase/firebase.config";
import {
  collection,
  doc,
  getDocs,
  increment,
  orderBy,
  query,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { createContext, useContext } from "react";

const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [photoGallery, setPhotoGallery] = useState([]);
  const [videoGallery, setVideoGallery] = useState([]);

  useEffect(() => {
    const fetchPhotoGallery = async () => {
      const q = query(
        collection(db, "PhotoGallery"),
        orderBy("datePublished", "desc")
      );
      try {
        const querySnapshot = await getDocs(q);
        var photoGalleryList = [];

        querySnapshot.forEach((doc) => {
          photoGalleryList.push({ ...doc.data(), doc: doc.id });
        });
        setPhotoGallery(photoGalleryList);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPhotoGallery();
  }, []);

  useEffect(() => {
    const fetchVideoGallery = async () => {
      const q = query(
        collection(db, "VideoGallery"),
        orderBy("datePublished", "desc")
      );
      try {
        var videoGalleryList = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          videoGalleryList.push({ ...doc.data(), doc: doc.id });
        });
        setVideoGallery(videoGalleryList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideoGallery();
  }, []);

  const handlePhotoGallerySliderReadInc = async (gDoc, fDoc) => {
    var referance = doc(db, "PhotoGallery", gDoc, "Photos", fDoc);
    var referanceUp = doc(db, "PhotoGallery", gDoc);
    try {
      await updateDoc(referanceUp, {
        read: increment(1),
      });
      await updateDoc(referance, {
        read: increment(1),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handlePhotoGalleryReadInc = async (id) => {
    var referance = doc(db, "PhotoGallery", id);
    try {
      await updateDoc(referance, {
        read: increment(1),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleVideoGalleryReadInc = async (id) => {
    var reference = doc(db, "VideoGallery", id);
    try {
      await updateDoc(reference, {
        read: increment(1),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    photoGallery,
    videoGallery,
    handlePhotoGallerySliderReadInc,
    handleVideoGalleryReadInc,
    handlePhotoGalleryReadInc,
  };

  return (
    <GalleryContext.Provider value={values}>{children}</GalleryContext.Provider>
  );
};
export const useGalleryContext = () => useContext(GalleryContext);
