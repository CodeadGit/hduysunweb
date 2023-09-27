"use client";
import React, { useRef } from "react";
import "./addCommentForm.scss";

const AddCommentForm = ({ modeStatus, formSubmitHandler, comment, handleChange }) => {

  const inputRef = useRef(null);
  const textAreaRef = useRef(null);

  const handleKeyPress = (e) => {
    if (!e.target.value.trim() && e.key === "Enter") return;
    else if (e.key === "Enter") {
      e.preventDefault();
      formSubmitHandler(e);
      textAreaRef.current.blur();
      inputRef.current.focus();
    }
  };

  return (
    <form className="comments-add" onSubmit={formSubmitHandler}>
      <h4 className={modeStatus ? "dark" : ""}>Yorum Ekle</h4>
      <input
        type="text"
        placeholder="Adınız Soyadınız"
        value={comment.author}
        name="author"
        onChange={handleChange}
        required
        ref={inputRef}
      />
      <textarea
        placeholder="Yorumunuz"
        value={comment.comment}
        onChange={handleChange}
        name="comment"
        rows="3"
        onKeyDown={handleKeyPress}
        required
        className="textarea"
        ref={textAreaRef}></textarea>
      <p className={`informative ${modeStatus ? "dark" : ""}`}>
        Gönderilen yorumların küfür, hakaret ve suç unsuru içermemesi
        gerektiğini okurlarımıza önemle hatırlatırız!
      </p>
      <button type="submit" className={`submit-btn ${modeStatus ? "dark" : ""}`}>
        Gönder
      </button>
    </form>
  );
};

export default AddCommentForm;
