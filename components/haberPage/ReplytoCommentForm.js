import React from "react";
import "./replytoCommentForm.scss";

const ReplytoCommentForm = ({
  modeStatus, 
  comment,
  handleChange,
  handleKeyPress,
  handleSubmitAnswerUpdated
}) => {

  return (
    <form onSubmit={(e)=>{handleSubmitAnswerUpdated(e, comment)}} className="comments-adds">
      <h4 className={modeStatus ? "dark" : ""}>Habere Yorum Ekle</h4>
      <input
        className="input"
        type="text"
        placeholder="Adınız Soyadınız"
        required
        name="author"
        onChange={handleChange}
      />
      <textarea
        className="textarea"
        placeholder="Yorumunuz"
        rows="3"
        name="comment"
        required
        onChange={handleChange}
        onKeyDown={handleKeyPress}></textarea>
      <p className={`informative ${modeStatus ? "dark" : ""}`}>
        Gönderilen yorumların küfür, hakaret ve suç unsuru içermemesi
        gerektiğini okurlarımıza önemle hatırlatırız!
      </p>
      <button type="submit" className={`submit-btn single ${modeStatus ? "dark" : ""}`}>
        Gönder
      </button>
    </form>
  );
};

export default ReplytoCommentForm;
