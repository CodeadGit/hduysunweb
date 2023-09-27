import React from 'react';
import SingleHaber from "./SingleHaber";
import "./mostReadNews.scss";

function MostReadNews({ modeStatus, mostReadNews }) {
    return (
      <div className="most-read-news">
        {mostReadNews.map((item) => {
          return <SingleHaber key={item.id} {...item} mode={modeStatus} />;
        })}
      </div>
    );
  }

  export default MostReadNews;
  