import { db } from "@/firebase/firebase.config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCategoriesContext } from "@/context/CategoriesContext";
import { useThemeContext } from "@/context/ThemeContext";
import SubCategoryItem from "./SubCategoryItem";
import "./subCategory.scss";
const SubCategory = ({category}) => {

   const [thisSubCategory, setThisSubCategories ] = useState();
   const { categories } = useCategoriesContext();
   const { news } = useThemeContext();

  //  useEffect(() => {
  //   let controller = new AbortController();
  //   var newsList = [];

  //   for (let i = 0; i < categories.length; i++) {
  //     (async () => {
  //       const q = query(
  //         collection(db, categories[i].collection,doc ),
  //         orderBy("datePublished", "desc"),
  //         limit(5)
  //       );
  //       const newsGetting = onSnapshot(q, (snap) => {
  //         snap.forEach((doc) => {
  //           if (
  //             doc.data().subCategories.includes(category)
  //           ) {
  //             newsList.push({ ...doc.data(), doc: doc.id });
  //           }
  //         });
  //         setThisSubCategories(newsList);
  //       });
  //       return () => newsGetting();
  //     })();
  //   }
  //   return () => controller?.abort();
  // }, []);

  const filteredNews = news.filter((i) => i.subCategories.includes(category)).slice(0,4)

  return (
    <div className="subCategory-list">
      <div className="subCategory-list-container">
      {filteredNews.map((item) => <SubCategoryItem item={item}/>)}
      </div>
    </div>
  )
}

export default SubCategory