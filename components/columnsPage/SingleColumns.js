import React from "react";
import { categoryUpperConvertor } from "@/context/utils";
import Link from "next/link";
import { handleShort,handleShorttSingleHaber,handleShortt } from "@/context/utils";
import "./singleColumns.scss";

const SingleColumns = ({ image, category, eng, id, title, mode }) => {
  return (
    <Link
      href={`/${category}/${eng}-${id}`}
      className="most-reads-single"
      //target="_blank"
      onClick={() => handleReadIncrement(category, id)}
    >
      <div className="most-reads-single-pic">
        <img src={image} alt={title} />
      </div>
      <div className="most-reads-single-content">
        <p className={`content-title ${mode ? "dark" : ""}`}>
          {categoryUpperConvertor[category]}
        </p>
         <p className={`content-itself ${mode ? "dark" : ""}`}>
         {handleShorttSingleHaber(title)} 
        </p>
        <p className={`content-med ${mode ? "dark" : ""}`}>
          {handleShort(title, 5)}
        </p> 
        <p className={`content-res ${mode ? "dark" : ""}`}>
          {handleShort(title, 5)}
        </p>
      </div>
    </Link>
  );
};

export default SingleColumns;
