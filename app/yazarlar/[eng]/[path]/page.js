"use client";
import ColumnsPage from "@/components/columnsPage/ColumnsPage";
import { db } from "@/firebase/firebase.config";
import { collection, doc, getDoc, query } from "firebase/firestore";
import { useState, useEffect } from "react";

const KoseYazisiDetayPage = ({ params }) => {
  const [koseYazisi, setKoseYazisi] = useState([]);
  const [koseYazisiArticle, setKoseYazisiArticle] = useState([]);

  var idArray = String(params.path).split("-").at(-1);

  useEffect(() => {
    let controller = new AbortController();

     (async () => {
      const q = doc(db, "koseyazilari", idArray);
      const qarticle = doc(
        db,
        "koseyazilari",
        idArray,
        "article",
        idArray
      )

        await getDoc(q).then((doc) => setKoseYazisi(doc.data()));
        await getDoc(qarticle)
        .then((doc) => {
           if(doc.exists) {
            setKoseYazisiArticle(doc.data())
           }
        })
    })();
     return () => controller?.abort();
  }, []);

  return <ColumnsPage koseYazisiArticle={koseYazisiArticle} koseYazisi={koseYazisi} idArray={idArray} />;
};

export default KoseYazisiDetayPage;
