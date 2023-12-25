import dynamic from "next/dynamic";
//import SingleHaber from "./SingleHaber";
import "./mostReadNews.scss";
const SingleHaber = dynamic(
  () => import("./SingleHaber"),
  { ssr: false }
);
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
  