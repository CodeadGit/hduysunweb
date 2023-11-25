"use client";
import React, { useEffect, useState, useId } from "react";
import "./haber.scss";
import Breadcrumb from "../breadcrumb/Breadcrumb";
// import SingleRelatedNews from "./SingleRelatedNews";
import Amblem from "./Amblem";
import CategoryHeadlines from "./categoryHeadlines/CategoryHeadlines";
import { useThemeContext } from "@/context/ThemeContext";
import {
  addDoc,
  collection,
  doc,
  increment,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { categoryConvertor } from "@/context/utils";
import RelatedNews from "../relatedNews/RelatedNews";
import CategoryGoogleContainer from "./CategoryGoogleContainer";
import NewsTitle from "./NewsTitle";
import NewsFirstDescription from "./NewsFirstDescription";
import NewsTimeInfo from "./NewsTimeInfo";
import NewsAndAuthorInfo from "./NewsAndAuthorInfo";
import NewsDetails from "./NewsDetails";
import NewsTags from "./NewsTags";
import Comments from "./Comments";
import AddCommentForm from "./AddCommentForm";
import AdsImage from "./AdsImage";
import CategoryNewsTitle from "./CategoryNewsTitle";
import MostReadNews from "./MostReadNews";
import VideoGallery from "./VideoGallery";
import StickyNavbar from "../stickyNavbar/StickyNavbar";

const Haber = ({ thisPageArticle, thisPage }) => {

  const { mode, mostReadNewsList, videoNewsList } = useThemeContext();
  const modeStatus = mode === "dark";
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [showAnswers, setShowAnswers] = useState(null);
  const [comment, setComment] = useState({
    author: "",
    comment: "",
  });

  const {
    category,
    title,
    eng,
    id,
    datePublished,
    dateModified,
    description,
    image,
    subCategories,
    tags,
    source,
  } = thisPage;

  const body = thisPageArticle?.body;

  const mostReadNews = mostReadNewsList.filter((item) => item.id !== id).slice(0, 5);

  const existingCategory = categoryConvertor[category] || category;

  const categoryBreadcrumb = [
    {
      id: useId(),
      title: categoryConvertor[category] || category,
      link: `/${category}`,
      titleContent: false,
    },
    {
      id: useId(),
      title,
      link: `/${category}/${eng}-${id}`,
      titleContent: true,
    },
  ];

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    var referancePost = doc(db, thisPage.category, thisPage.id);
    var idForC = new Date().valueOf().toString().substring(6);
    var referanceC = doc(db, "Comments", idForC);
    setLoading(true);
    var createdAt = new Date();

    try {

      await setDoc(referanceC, {
        ...comment,
        likes: 0,
        comments: 0,
        dislikes: 0,
        id: idForC,
        createdAt: createdAt,
        confirmed: false,
        ref:`${thisPage?.category}/${thisPage?.id}`
      });

      await updateDoc(referancePost, {
        comments: increment(1),
      });
      
      setLoading(false);
      window.alert("Yorum yüklendi");
      setComment({
        author: "",
        comment: "",
      });
    } catch (error) {
      setLoading(false);
      window.alert("Bir hata meydana geldi", error);
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setComment({ ...comment, [name]: value });
  };

  useEffect(() => {
    let controller = new AbortController();
    let referance = query(collection(db, "Comments"),where("ref","==",`${thisPage?.category}/${thisPage?.id}`));

    (async () => {
      const q = query(referance);
      const jobgetting = onSnapshot(q, (snap) => {
        var thisComments = [];
        if(!snap.empty){
          snap.forEach((doc) => {
            if(doc.data().confirmed){
              thisComments.unshift({ ...doc.data()});
            }})};

        const sortedComments = thisComments.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
        setComments(sortedComments);
      });
      return () => jobgetting();
    })();

    return () => controller?.abort();
  }, []);
  
  return (
    <div className={`newss ${modeStatus ? "dark" : ""}`}>
      <Breadcrumb mode={mode} links={categoryBreadcrumb} />
      <div className="newss-container">
        <StickyNavbar />
        <div className="newss-container-content">
          <CategoryGoogleContainer
            category={category}
            existingCategory={existingCategory}
            modeStatus={modeStatus}
          />
          <NewsTitle modeStatus={modeStatus} title={title} />
          <NewsFirstDescription
            modeStatus={modeStatus}
            description={description}
          />
          <NewsTimeInfo
            datePublished={datePublished}
            dateModified={dateModified}
            modeStatus={modeStatus}
          />
          <img className="newsImage" src={image} alt={title} />
          <NewsAndAuthorInfo modeStatus={modeStatus} thisPage={thisPage} />
          <NewsDetails modeStatus={modeStatus} body={body} source={source} />
          {tags?.length > 0 && <NewsTags modeStatus={modeStatus} tags={tags} />}
          <Amblem modeStatus={modeStatus} />
          <CategoryHeadlines />
          <Amblem modeStatus={modeStatus} />
          { thisPage.isCommentable  && (
            <Comments
              comments={comments}
              modeStatus={modeStatus}
              thisPage={thisPage}
              setShowAnswers={setShowAnswers}
              showAnswers={showAnswers}
            />
          )}
          {!showAnswers ? (
            <AddCommentForm
              formSubmitHandler={formSubmitHandler}
              modeStatus={modeStatus}
              comment={comment}
              handleChange={handleChange}
            />
          ) : null}
        </div>

        {/* SAYFANIN SAĞ TARAFI */}

        <div className="newss-container-adds">
          <AdsImage />
          <CategoryNewsTitle title="En Çok Okunan" modeStatus={modeStatus} />
          <MostReadNews modeStatus={modeStatus} mostReadNews={mostReadNews} />
          <CategoryNewsTitle title="İlgili" modeStatus={modeStatus} />
          <RelatedNews
            subCategories={subCategories}
            category={category}
            id={id}
          />
          <VideoGallery modeStatus={modeStatus} videoNewsList={videoNewsList} />
        </div>
      </div>
    </div>
  );
};

export default Haber;