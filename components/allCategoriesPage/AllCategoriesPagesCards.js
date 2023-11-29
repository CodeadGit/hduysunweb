import { useEffect, useState } from "react";
import AllCategoriesCard from "./AllCategoriesCard";
import "./allCategoriesPagesCards.scss";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { categoryConvertor } from "@/context/utils";

const AllCategoriesPagesCards = ({ category }) => {
  const [categoryCards, setCategoryCards] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);

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
          if(doc.data().active) {
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

  return (
    <div className="allCategoriesPagesCards">
      <h2>{category}</h2>
      <div className="allCategoriesPagesCards-list">
        {categoryCards.map((item, idx) => {
          return <AllCategoriesCard key={idx} item={item} />;
        })}
      </div>
    </div>
  );
};

export default AllCategoriesPagesCards;
