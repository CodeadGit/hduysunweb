import React from 'react';
import SingleHaber from "./SingleHaber";
import "./mostReadNews.scss";

function MostReadNews({ modeStatus, mostReadNews }) {
    return (
      <div className="most-read-news">
        {mostReadNews.map((item,idx) => {
          return <SingleHaber key={idx} {...item} mode={modeStatus} />;
        })}
      </div>
    );
  }

  export default MostReadNews;
  