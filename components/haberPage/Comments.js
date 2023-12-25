import React from "react";
import "./comments.scss";
import dynamic from "next/dynamic";
//import SingleComment from "./SingleComment";

const SingleComment = dynamic(
  () => import("./SingleComment"),
  { ssr: false }
);
const Comments = ({comments, modeStatus, thisPage, setShowAnswers, showAnswers}) => {

 const confirmedComments = comments.filter((comment) => comment.confirmed);

  return (
    
    <div className="comments" id="comments">
      <h4 className={modeStatus ? "dark" : ""}>Yorumlar</h4>

      {confirmedComments.map((comment,idx) => {
        return (
          <SingleComment
            key={idx}
            thisPage={thisPage}
            item={comment}
            modeStatus={modeStatus}
            setShowAnswers={setShowAnswers}
            showAnswers={showAnswers}
          />
        );
      })}
    </div>
  );
};

export default Comments;
