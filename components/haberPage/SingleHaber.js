import React from "react";
import "./singleHaber.scss";
import { categoryUpperConvertor } from "@/context/utils";
import Link from "next/link";

const SingleHaber = ({ image, category, eng, id, title, mode }) => {

  return (
    <Link href={`/${category}/${eng}-${id}`} className="most-reads-single" target="_blank">
      <div className="most-reads-single-pic">
        <img src={image} alt={title} />
      </div>
      <div className="most-reads-single-content">
        <p className={`content-title ${mode ? "dark" : ""}`}>{categoryUpperConvertor[category]}</p>
        <p className={`content-itself ${mode ? "dark" : ""}`}>{title}</p>
      </div>
    </Link>
  );
};

export default SingleHaber;
