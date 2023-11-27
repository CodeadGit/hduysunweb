"use client";
import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase.config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { notFound } from "next/navigation";
import PhotoGallerySlider from "@/components/photoGallerySlider/PhotoGallerySlider";
import PhotoGalleryDetail from "@/components/photoGallery/PhotoGalleryDetail";
const PhotoGalleryDetailPage = ({ params }) => {
  const [thisPhotoGallery, setThisPhotoGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  //const [pageArticle, setPageArticle] = useState({});

  var idArray = String(params?.eng).split("-");
  var idForThisPhotoGallery = idArray.at(-1);
  var titleArray = idArray.slice(0,-1).join(" ").toString();

  useEffect(() => {
    const fetchGallery = async () => {
      const q = query(collection(db, "PhotoGallery", idForThisPhotoGallery, "Photos"));
      try {
        const querySnapshot = await getDocs(q);
        var photosList = [];

        querySnapshot.forEach((doc) => {
          photosList.push({ ...doc.data(), doc: doc.id });
        });
        setThisPhotoGallery(photosList);
      }
      catch (error) {
        console.error("Error fetching comments:", error);
      }
    }
       fetchGallery();
  }, []);


  return (
    <div>
      <PhotoGalleryDetail titleArray={titleArray} thisPhotoGallery={thisPhotoGallery} gDoc={idForThisPhotoGallery} />
    </div>
  );
};

export default PhotoGalleryDetailPage;
