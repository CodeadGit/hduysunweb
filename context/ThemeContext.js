"use client";
import { createContext, useContext, useEffect, useState } from "react";
// import { storiesArray } from "./utils";
import {
  collection,
  limit,
  orderBy,
  query,
  doc,
  increment,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import axios from "axios";
import { useCategoriesContext } from "./CategoriesContext";

export const categoryList = [
  { id: "01", label: "Son Dakika", collection: "sonDakika" },
  { id: "02", label: "Gündem", collection: "gundem" },
  { id: "03", label: "Magazin", collection: "magazin" },
  { id: "04", label: "Ekonomi", collection: "ekonomi" },
  { id: "05", label: "Spor", collection: "spor" },
  { id: "06", label: "Siyaset", collection: "siyaset" },
  { id: "07", label: "Dünya", collection: "dunya" },
  { id: "08", label: "Yazarlar", collection: "yazarlar" },
  { id: "09", label: "Asayiş", collection: "asayis" },
  { id: "10", label: "Eğitim", collection: "egitim" },
  { id: "11", label: "Teknoloji", collection: "teknoloji" },
  { id: "12", label: "Yaşam", collection: "yasam" },
  { id: "13", label: "Sinema", collection: "sinema" },
  { id: "14", label: "Araştırma", collection: "arastirma" },
  { id: "15", label: "Gezi", collection: "gezi" },
  { id: "16", label: "Kültür Sanat", collection: "kultursanat" },
  { id: "17", label: "Sağlık", collection: "saglik" },
  { id: "18", label: "İnanç", collection: "inanc" },
  { id: "19", label: "Emlak", collection: "emlak" },
  { id: "20", label: "Astroloji", collection: "astroloji" },
];

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
 // const savedTheme = typeof window !== "undefined" ? localStorage.getItem("themeMode") || "light" : false;

  const [storyModal, setStoryModal] = useState(false);
  const [stories, setStories] = useState([]);
  const [mansetNewsList, setMansetNewsList] = useState([]);
  const [surMansetNewsList, setSurMansetNewsList] = useState([]);
  const [mostReadNewsList, setMostReadNewsList] = useState([]);

  const [categoryHeadlines, setCategoryHeadlines] = useState([]);
  const [category, setCategory] = useState("dünya");
  const [fetching, setFetching] = useState(true);
  const [showAds, setShowAds] = useState(true);
  const [formalAdv, setFormalAdv] = useState([]);
  const [autors, setAutors] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [wordNews, setWordNews] = useState([]);
  const [pinnedMansetData, setPinnedMansetData] = useState([]);
  const [pinnedSurmansetData, setPinnedSurMansetData] = useState([]);
  const [searchButtonStatus, setSearchButtonStatus] = useState(true);
  const [newsLoading , setNewsLoading] = useState(true);
  const [videoGallery, setVideoGallery] = useState([]);

  const [total, setTotal] = useState({
    league: [],
    league1: [],
    league2: [],
  });

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const hideAds = () => setShowAds(false);

  const { categories } = useCategoriesContext();

// const toggle = () => {
//   setMode((prev) => (prev === "dark" ? "light" : "dark"));
// };

  // const fontDecBtnClickHandler = () => {
  //   setFontDec(fontDec + 1);
  // };

  // const fontIncBtnClickHandler = () => {
  //   setFontInc(fontInc - 1);
  // };

  const handleSearchButton = () => setSearchButtonStatus((pre) => !pre);

  useEffect(() => {
    const fetchAuthors = async () => {
      const q = query(collection(db, "Columnists"));
      try {
        var autorsList = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          if (doc.data().active && doc.exists) {
            autorsList.push({ ...doc.data(), doc: doc.id });
          }
        });
        var filtered = autorsList.filter(Boolean);
        setAutors(filtered);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAuthors();
  }, []);


  useEffect(() => {
    const categories = [...new Set(news.map((item) => item.category))];
    const sortedMostReadNews = news.sort((a, b) => b.read - a.read);

    categories.forEach((cat) => {
      const newsItem = sortedMostReadNews.find((item) => item.category === cat);
      setCategoryHeadlines((prev) => [...prev, newsItem]);
    });
  }, [news]);

  const handleReadIncrement = async (category, id) => {
    var referance = doc(db, category, id);
    try {
      await updateDoc(referance, {
        read: increment(1),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPoints = async () => {
    try {
      const res = await axios.get(
        `https://docapi.herkesduysun.com/puan-durumu`
      );
      const res1 = await axios.get(
        `https://docapi.herkesduysun.com/puan-durumu-1`
      );
      const res2 = await axios.get(
        `https://docapi.herkesduysun.com/puan-durumu-2`
      );
      setTotal({
        league: res?.data?.result,
        league1: res1?.data?.result,
        league2: res2?.data?.result,
      });
      setFetching(false);
    } catch (error) {
      setFetching(false);
      console.log(error);
    }
  };

 
  useEffect(() => {
    const fetchFormalAdvert = async () => {
      const q = query(
        collection(db, "FormalAdvert"),
        orderBy("datePublished", "desc")
      );
      try {
        var formalAdvArr = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          if (doc.data().active) {
            formalAdvArr.push({ ...doc.data(), doc: doc.id });
          }
        });
        setFormalAdv(formalAdvArr);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFormalAdvert();
  }, []);

  useEffect(() => {
    const unsubscribeList = [];

    const fetchData = async () => {
      const promises = categories?.map(async (category) => {
        const collectionRef = query(
          collection(db, category.collection),
          orderBy("datePublished", "desc"),
          limit(6)
        );
        const snapshot = await getDocs(collectionRef);
        const categoryNews = snapshot.docs.map((doc) => ({
          ...doc.data(),
          doc: doc.id,
        }));
        return categoryNews;
      });

      const results = await Promise.all(promises);

      const allNews = results.flat();
      const mansetler = allNews.filter((item) => item.isManset);
      const surMansetler = allNews.filter((item) => item.isSurmanset);
      setMansetNewsList(mansetler);
      setSurMansetNewsList(surMansetler);
      const sortedNews = allNews.sort(
        (a, b) => b.datePublished.toDate() - a.datePublished.toDate()
      );
      setNews(sortedNews);
      setNewsLoading(false);
    };

    fetchData();

    return () => {
      unsubscribeList.forEach((unsubscribe) => unsubscribe());
    };
  }, [categories]);

  useEffect(() => {
    fetchPoints();
  }, []);

  // useEffect(() => {
  //   const fetchColumnists = async () => {
  //     const q = query(collection(db, "Columnists"));
  //     try {
  //       var autorsList = [];
  //       const querySnapshot = await getDocs(q);
  //       querySnapshot.forEach((doc) => {
  //         if(doc.data().active) {
  //           autorsList.push({ ...doc.data(), doc: doc.id });
  //         }
  //       });
  //       setAutors(autorsList);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchColumnists();
  // }, []);

  useEffect(() => {
    const mostReadNews = news?.sort((a, b) => b.read - a.read).slice(0, 6);
    setMostReadNewsList(mostReadNews);
  }, [news]);

  const changeStoryModal = () => setStoryModal((prevState) => !prevState);
  const closeStoryModal = () => setStoryModal(false);

  const navigateStory = (cat) => {
    changeStoryModal();
  };

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

  const values = {
    storyModal,
    changeStoryModal,
    navigateStory,
    pinnedSurmansetData,
    stories,
    category,
    surMansetNewsList,
    //handleStories,
    closeStoryModal,
    news,
    loading,
    handleReadIncrement,
    videoGallery,
    total,
    fetching,
    handleSearchButton,
    searchButtonStatus,
    mansetNewsList,
    newsLoading,
    mostReadNewsList,
    categoryHeadlines,
    hideAds,
    pinnedMansetData,
    showAds,
    autors,
    formalAdv,
    searchWord,
    setSearchWord,
    wordNews,
    setWordNews,
    surMansetNewsList,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
