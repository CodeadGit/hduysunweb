"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/firebase/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import dynamic from "next/dynamic";

//import Haber from "@/components/haberPage/Haber";
//import DetailsPageSkeleton from "@/components/detailsPageSkeleton/DetailsPageSkeleton";
import { notFound } from "next/navigation";

const Haber = dynamic(() => import("@/components/haberPage/Haber"), {
  ssr: false,
});
const DetailsPageSkeleton = dynamic(
  () => import("@/components/detailsPageSkeleton/DetailsPageSkeleton"),
  {
    ssr: false,
  }
);

const DetailsPage = ({ params }) => {
  const [thisPage, setThisPage] = useState({});
  const [loadingThisPage, setLoadingThisPage] = useState(true);
  const [thisPageArticle, setThisPageArticle] = useState({});
  const [loadingThisArticle, setLoadingThisArticle] = useState(true);

  var idArray = String(params.eng).split("-");
  var idForThisNews = idArray.at(-1);

  useEffect(() => {
    let controller = new AbortController();

    (async () => {
      const q = doc(db, params.category, idForThisNews);
      const qarticle = doc(
        db,
        params.category,
        idForThisNews,
        "article",
        idForThisNews
      );
      await getDoc(q)
        .then((doc) => setThisPage(doc.data()))
        .finally(() => setLoadingThisPage(false));
      await getDoc(qarticle)
        .then((doc) => {
          if (doc.exists) {
            setThisPageArticle(doc.data());
          }
        })
        .finally(() => setLoadingThisArticle(false));
    })();

    return () => controller?.abort();
  }, []);

  if (loadingThisPage) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <DetailsPageSkeleton style={{ marginTop: "30%" }} />
      </div>
    );
  }

  if (!thisPage) return notFound();

  return <Haber thisPageArticle={thisPageArticle} thisPage={thisPage} />;
};

export default DetailsPage;
