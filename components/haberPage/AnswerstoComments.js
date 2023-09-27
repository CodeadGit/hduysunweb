import React from "react";
import { Avatar } from "@mui/material";
import { GoClock } from "react-icons/go";
import "./answerstoComments.scss";

const AnswerstoComments = ({ modeStatus, answer }) => {

  return (
    <div className="answers-to-comments">
      <div className="answers-to-comments-box" key={answer.id}>
        <div className="answers-to-comments-box-frame">
          {/* <img src={member1} className="member-img" /> */}
          {/* <Image src={member1} className="member-img" /> */}
          <Avatar>{answer.author.charAt(0).toUpperCase()}</Avatar>
          {/* { kosul ? (
               <Image src={member1} className="member-img" />
            ) : (
              <Avatar>{i.author.charAt(0).toUpperCase()}</Avatar> 
            )} */}
          {/*  apiden gelen cevapta foto varsa sergile yoksa avatar kullan default olarak */}
          <div className={`answers-to-comments-box-frame-info ${modeStatus ? "dark" : ""}`}>
            <h6>{answer.author}</h6>
            <p className={`time-info ${modeStatus ? "dark" : ""}`}>
              <GoClock />
              <span>
                {new Date(answer.createdAt.seconds * 1000).toLocaleString()}
              </span>
            </p>
          </div>
        </div>
        <p className={`personal-comment ${modeStatus ? "dark" : ""}`}>
          {answer.comment}
        </p>
        <div className="likes-dislikes">
          <div className={`like ${modeStatus ? "dark" : ""}`}></div>
          <div className={`dislike ${modeStatus ? "dark" : ""}`}></div>
        </div>
      </div>
    </div>
  );
};

export default AnswerstoComments;
