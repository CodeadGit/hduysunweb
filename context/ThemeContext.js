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
  const [mode, setMode] = useState("light");
  const [storyModal, setStoryModal] = useState(false);
  const [stories, setStories] = useState([]);
  const [mansetNewsList, setMansetNewsList] = useState([]);
  const [surMansetNewsList, setSurMansetNewsList] = useState([]);
  const [mostReadNewsList, setMostReadNewsList] = useState([]);
  const [videoNewsList, setVideoNewsList] = useState([]);
  const [categoryHeadlines, setCategoryHeadlines] = useState([]);
  const [category, setCategory] = useState("dünya");
  const [fetching, setFetching] = useState(true);
  const [showAds, setShowAds] = useState(true);
  const [photoGallery, setPhotoGallery] = useState([]);
  const [videoGallery, setVideoGallery] = useState([]);
  const [formalAdv, setFormalAdv] = useState([]);
  const [fontInc, setFontInc] = useState(50);
  const [fontDec, setFontDec] = useState(50);
  const [autors, setAutors] = useState([]);
  const [columnists, setColumnists] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [wordNews, setWordNews] = useState([]);
  const [tagsListLoading, setTagsListLoading] = useState(true);
  const [tagsList, setTagsList] = useState([]);
  const [pinnedMansetData, setPinnedMansetData] = useState([]);
  const [pinnedSurmansetData, setPinnedSurMansetData] = useState([]);
  const [searchButtonStatus, setSearchButtonStatus] = useState(true);
  const [newsLoading , setNewsLoading] = useState(true);

  const [total, setTotal] = useState({
    league: [],
    league1: [],
    league2: [],
  });

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const hideAds = () => setShowAds(false);

  const { categories } = useCategoriesContext();

  const fontDecBtnClickHandler = () => {
    setFontDec(fontDec + 1);
  };

  const fontIncBtnClickHandler = () => {
    setFontInc(fontInc - 1);
  };

  const handleSearchButton = () => setSearchButtonStatus((pre) => !pre);

  useEffect(() => {
    const fetchAuthors = async () => {
      const q = query(collection(db, "Columnists"));
      try {
        var autorsList = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          if (doc.data().active) {
            autorsList.push({ ...doc.data(), doc: doc.id });
          }
        });
        setAutors(autorsList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAuthors();
  }, []);

  useEffect(() => {
    const fetchMansetPinned = async () => {
      const q = query(collection(db, "MansetPinned"));
      try {
        const querySnapshot = await getDocs(q);
        var pinnedMansetDataList = [];
        querySnapshot.forEach((doc) => {
          if (doc.data().insistent === false) {
            pinnedMansetDataList.push({ ...doc.data(), doc: doc.id });
          }
        });
        setPinnedMansetData(pinnedMansetDataList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMansetPinned();
  }, []);

  useEffect(() => {
    const fetchSurmansetPinned = async () => {
      const q = query(collection(db, "SurMansetPinned"));
      try {
        const querySnapshot = await getDocs(q);
        var pinnedSurMansetDataList = [];

        querySnapshot.forEach((doc) => {
          if (doc.data().insistent === true) {
            pinnedSurMansetDataList.push({ ...doc.data(), doc: doc.id });
          }
        });
        setPinnedSurMansetData(pinnedSurMansetDataList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSurmansetPinned();
  }, []);

  // useEffect(() => {
  //   let tagsContainer = [];
  //   news.forEach((item) => {
  //     const newsTags = [...item.tags];
  //     tagsContainer.push(...newsTags);
  //   });
  //   setTagsList(tagsContainer);
  // }, [news]);

  // const uniqueTags = [...new Set(tagsList)];

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

  const fetchPoints = async () => {
    try {
      const res = await axios.get(
        `https://payment.onlinekesif.com/puan-durumu`
      );
      const res1 = await axios.get(
        `https://payment.onlinekesif.com/puan-durumu-1`
      );
      const res2 = await axios.get(
        `https://payment.onlinekesif.com/puan-durumu-2`
      );
      setTotal({
        league: res.data.result,
        league1: res1.data.result,
        league2: res2.data.result,
      });
      setFetching(false);
    } catch (error) {
      setFetching(false);
      console.log(error);
    }
  };

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
          limit(5)
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

  useEffect(() => {
    const fetchColumnists = async () => {
      const q = query(collection(db, "Columnists"));
      try {
        var autorsList = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          autorsList.push({ ...doc.data(), doc: doc.id });
        });
        setAutors(autorsList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchColumnists();
  }, []);

  useEffect(() => {
    const fetchTags = async () => {
      const q = query(collection(db, "TagsList"));
      try {
        const tagsArray = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          tagsArray.push({...doc.data(), tag:doc.id});
        });
        setTagsList(tagsArray);
        setTagsListLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTags();
  }, []);

  useEffect(() => {
    const mostReadNews = news?.sort((a, b) => b.read - a.read).slice(0, 6);
    setMostReadNewsList(mostReadNews);
    // const videoNews = videoGallery.filter((i) => i.category === "gundem");
    // setVideoNewsList(videoNews);
  }, [news]);

  // const handleChangeTitle = (title) => {
  //   for(let s=1;s<=title.length;s++){
  //        .replace()
  //   }
  // }

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const changeStoryModal = () => setStoryModal((prevState) => !prevState);
  const closeStoryModal = () => setStoryModal(false);

  //const handleStories = (cat) => {
  // const newList = storiesArray.filter((item) => item.category === cat);
  //   const newCategory = storiesArray.find(
  //     (item) => item.category === cat
  //   ).category;
  //   setCategory(newCategory);
  //   setStories(newList);
  // };

  const navigateStory = (cat) => {
    changeStoryModal();
    // handleStories(cat);
  };

  const values = {
    toggle,
    mode,
    storyModal,
    changeStoryModal,
    handlePhotoGalleryReadInc,
    navigateStory,
    pinnedSurmansetData,
    stories,
    category,
    fontDec,
    fontInc,
    surMansetNewsList,
    //handleStories,
    closeStoryModal,
    news,
    loading,
    handleReadIncrement,
    tagsListLoading,
    total,
    fetching,
    handleSearchButton,
    searchButtonStatus,
    mansetNewsList,
    newsLoading,
    mostReadNewsList,
    categoryHeadlines,
    handlePhotoGallerySliderReadInc,
    handleVideoGalleryReadInc,
    hideAds,
    pinnedMansetData,
    showAds,
    // videoNewsList,
    //tagsTitles,
    autors,
    photoGallery,
    videoGallery,
    formalAdv,
    fontDecBtnClickHandler,
    fontIncBtnClickHandler,
    columnists,
    searchWord,
    setSearchWord,
    wordNews,
    setWordNews,
    tagsList,
    surMansetNewsList,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
