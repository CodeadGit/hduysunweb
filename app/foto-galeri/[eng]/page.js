"use client";
import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase.config";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { notFound } from "next/navigation";
import PhotoGallerySlider from "@/components/photoGallerySlider/PhotoGallerySlider";

const PhotoGalleryDetail = ({ params }) => {
  const [thisPhotoGallery, setThisPhotoGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  //const [pageArticle, setPageArticle] = useState({});

  var idArray = String(params.eng).split("-");
  var idForThisPhotoGallery = idArray.at(-1);
  var titleArray = idArray.slice(0,-1).join(" ").toString();

  useEffect(() => {
    let controller = new AbortController();
    var galleryDetail = [];
    (async () => {
      const q = collection(db, "PhotoGallery", idForThisPhotoGallery, "Photos");

      // await getDoc(qarticle)
      //   .then((doc) => {
      //     if (doc.exists) {
      //       setPageArticle(doc.data());
      //     }
      //   })
      //   .finally(() => setLoading(false));
      const galleryDetailGetting = onSnapshot(q, (snap) => {
        snap.forEach((doc) => {
          galleryDetail.push({ ...doc.data(), doc: doc.id });
        });
        setThisPhotoGallery(galleryDetail);
      });
      return () => galleryDetailGetting();
    })();
    return () => controller?.abort();
  }, []);

  return (
    <div>
      <PhotoGallerySlider titleArray={titleArray} thisPhotoGallery={thisPhotoGallery} gDoc={idForThisPhotoGallery} />
    </div>
  );
};

export default PhotoGalleryDetail;
