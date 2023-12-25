import { useEffect, useState } from "react";
//import AllCategoriesCard from "./AllCategoriesCard";
import "./allCategoriesPagesCards.scss";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { useModeContext } from "@/context/ModeContext";
import dynamic from "next/dynamic";

const AllCategoriesCard = dynamic(
  () => import("./AllCategoriesCard"),
  { ssr: false }
);
const AllCategoriesPagesCards = ({ category, label }) => {
  const [categoryCards, setCategoryCards] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);

  const { mode} = useModeContext();
  const modeStatus = mode === "dark";

  useEffect(() => {
    const fetchCategory = async () => {
      const q = query(
        collection(db, category),
        orderBy("datePublished", "desc"),
        limit(4)
      );
      try {
        const querySnapshot = await getDocs(q);
        var categoryNewsList = [];

        querySnapshot.forEach((doc) => {
          if (doc.data().active ) {
            categoryNewsList.push(doc.data());
          }
        });
        setCategoryCards(categoryNewsList);
        setCategoryLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategory();
  }, []);

  // console.log(categoryCards.values.length > 0);
  // const myObject = { key1: "value1", key2: "value2", key3: "value3" };
  // const entries = Object.entries(myObject);

  return (
    <div className="allCategoriesPagesCards">
      <h3 className={`${modeStatus ? "dark" :  ""}`}>{label}</h3>
      <div className="allCategoriesPagesCards-list">
        {categoryCards.map((item, idx) => {
          return <AllCategoriesCard key={idx} item={item} />;
        })}
      </div>
    </div>
  );
};

export default AllCategoriesPagesCards;
