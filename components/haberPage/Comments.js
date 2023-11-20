import React from "react";
import "./comments.scss";
import SingleComment from "./SingleComment";

const Comments = ({
  comments,
  modeStatus, 
  thisPage, 
  setShowAnswers, 
  showAnswers,
}) => {

  return (
    
    <div className="comments" id="comments">
      <h4 className={modeStatus ? "dark" : ""}>Yorumlar</h4>

      {comments.map((comment,idx) => {
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
