"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/firebase/firebase.config";
import { Avatar } from "@mui/material";
import {
  collection,
  doc,
  increment,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { GoClock } from "react-icons/go";
// import { TiArrowForward } from "react-icons/ti";
// import { GiCancel } from "react-icons/gi";
import "./singleComment.scss";
import ReplytoCommentForm from "./ReplytoCommentForm";
import AnswerstoComments from "./AnswerstoComments";

const SingleComment = ({
  thisPage,
  item,
  modeStatus,
  showAnswers,
  setShowAnswers,
}) => {
  const [answers, setAnswers] = useState([]);
  const [answersLoading, setAnswersLoading] = useState(true);
  const [answer, setAnswer] = useState({ author: "", comment: "" });
  const [adding, setAdding] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setAnswer((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    let controller = new AbortController();
    var referance = collection(
      db,
      "Comments",
      item?.id,
      "answers"
    );

    (async () => {
      const q = query(referance, orderBy("createdAt", "asc"));
      const jobgetting = onSnapshot(q, (snap) => {
        var thisComments = [];

        snap.forEach((doc) => {
          thisComments.unshift({ ...doc.data(), doc: doc.id });
        });
        setAnswers(thisComments);
        setAnswersLoading(false);
      });
      return () => jobgetting();
    })();

    return () => controller?.abort();
  }, [adding]);

  // const handleShowAnswers = () => {
  //   if (showAnswers === item.id) {
  //     setShowAnswers(null);
  //   } else {
  //     setShowAnswers(item.id);
  //   }
  // };

  const handleSubmitAnswerUpdated = async (e, c) => {
    e.preventDefault();
    var idForA = new Date().valueOf().toString().substring(6)
    var referancePost = doc(db, thisPage.category, thisPage.id);
    var referanceComment = doc(db, "Comments", c.id);
    var referanceAnswer = doc(
      db,
      "Comments",
      c.id,
      "answers",
      idForA
    );

    setAdding(true);
    var createdAt = new Date();
    let a;

    try {
      a = await setDoc(referanceAnswer, {
        ...answer,
        likes: 0,
        comments: 0,
        dislikes: 0,
        id: idForA,
        createdAt: createdAt,
        confirmed: false,
        ref:`${thisPage?.category}/${thisPage?.id}`}
      );
      await updateDoc(referancePost, {
        comments: increment(1),
      });
      await updateDoc(referanceComment, {
        comments: increment(1),
      });
     
      setAdding(false);
      window.alert("Yorum yüklendi");
      setAnswer({
        author: "",
        comment: "",
      });
      setShowAnswers(false);
    } catch (error) {
      setAdding(false);
      window.alert("Bir hata meydana geldi", error);
      console.log(error);
    }
    return a;
  };

  const handleKeyPress = (e) => {
    if (!e.target.value.trim() && e.key === "Enter") return;
    else if (e.key === "Enter") {
      e.preventDefault();
      handleSubmitAnswerUpdated(e, item);
    }
  };

  const confirmedAnswers = answers?.filter((answer) => answer.confirmed);

  return (
    <div className="comments-box" key={item.id}>
      <div className="comments-box-frame">
        {/* <img src={member1} className="member-img" alt="a" /> */}
        {/* <Image src={member1} className="member-img" alt={item.author}/> */}
        <Avatar>{item.author.charAt(0).toUpperCase()}</Avatar>
        <div className={`comments-box-frame-info ${modeStatus ? "dark" : ""}`}>
          <h6 className={`${modeStatus ? "dark" : ""}`}>{item.author}</h6>
          <p className={`time-info ${modeStatus ? "dark" : ""}`}>
            <GoClock />
            <span>
              {new Date(item.createdAt.seconds * 1000).toLocaleString()}
            </span>
          </p>
        </div>
      </div>
      <p className={`personal-comment ${modeStatus ? "dark" : ""}`}>
        {item.comment}
      </p>
      <div className="likes-dislikes">
        <div className={`like ${modeStatus ? "dark" : ""}`}></div>
        <div className={`dislike ${modeStatus ? "dark" : ""}`}></div>
        {/* <div
          className={`reply ${modeStatus ? "dark" : ""}`}
          onClick={handleShowAnswers}
        >
          {showAnswers === item.id ? (
            <>
              <GiCancel className="cancel" />
              <span>Vazgeç</span>
            </>
          ) : (
            <>
              <TiArrowForward className="respond" />
              <span>Yanıtla</span>
            </>
          )}
        </div> */}
      </div>
      {showAnswers === item.id && (
        <ReplytoCommentForm
          modeStatus={modeStatus}
          handleSubmitAnswerUpdated={handleSubmitAnswerUpdated}
          handleChange={handleChange}
          handleKeyPress={handleKeyPress}
          comment={item}
        />
      )}

      {confirmedAnswers?.length > 0 &&
        confirmedAnswers
          ?.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds)
          .map((answer,idx) => {
            return (
              <AnswerstoComments
                modeStatus={modeStatus}
                answer={answer}
                key={idx}
              />
            );
          })}
    </div>
  );
};

export default SingleComment;
