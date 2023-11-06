import React from "react";
import "./comments.scss";
import SingleComment from "./SingleComment";

const Comments = ({confirmedComments, modeStatus, thisPage, setShowAnswers, showAnswers}) => {

  return (
    
    <div className="comments" id="comments">
      <h4 className={modeStatus ? "dark" : ""}>Yorumlar</h4>

      {confirmedComments.map((comment) => {
        return (
          <SingleComment
            key={comment.id}
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
