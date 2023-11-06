import React from "react";
import "./newsTags.scss";

const NewsTags = ({ modeStatus, tags }) => {

  return (
    <div className="tags">
      <h3 className={`tags-title ${modeStatus ? "dark" : ""}`}>Etiketler</h3>
      <div className="tags-buttons-wrapper">
        {tags?.map((item, idx) => (
          <button key={idx} className={modeStatus ? "dark" : ""}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewsTags;
