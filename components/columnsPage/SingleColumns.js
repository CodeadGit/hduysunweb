import React from "react";
import { categoryUpperConvertor } from "@/context/utils";
import Link from "next/link";
import {
  handleShort,
  handleShorttSingleHaber,
  handleShortt,
} from "@/context/utils";
import "./singleColumns.scss";
import { useThemeContext } from "@/context/ThemeContext";
import { useParams } from "next/navigation";
import { useModeContext } from "@/context/ModeContext";
const SingleColumns = ({ item }) => {
  const { id, title, eng } = item;
  const params  = useParams();

  const { mode } = useModeContext();

  return (
    <Link
      href={`${item.eng}-${item.id}`}
      className={`single-columns ${mode ? "dark" : ""}`}
      //target="_blank"
      // onClick={() => handleReadIncrement(category, id)}
    >
      {/* <div className="most-reads-single-pic">
        <img src={image} alt={title} />
      </div> */}
      <div className="single-columns-content">
        {/* <p className={`content-title ${mode ? "dark" : ""}`}>
          {categoryUpperConvertor[category]}
        </p> */}
        <p className={`single-columns-content-title ${mode ? "dark" : ""}`}>
          {title}
        </p>
        {/* <p className={`content-itself ${mode ? "dark" : ""}`}>
         {handleShorttSingleHaber(title)} 
        </p>
        <p className={`content-med ${mode ? "dark" : ""}`}>
          {handleShort(title, 5)}
        </p> 
        <p className={`content-res ${mode ? "dark" : ""}`}>
          {handleShort(title, 5)}
        </p> */}
      </div>
    </Link>
  );
};

export default SingleColumns;
