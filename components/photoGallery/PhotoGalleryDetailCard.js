"use client"
import { useThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import "./photoGalleryDetailCard.scss";
import { handleShort } from "@/context/utils";

const PhotoGalleryDetailCard = ({item}) => {

  const {eng, id, title,headImg, datePublished} = item;

  const {mode, handlePhotoGalleryReadInc} = useThemeContext();

  const modeStatus = mode === "dark";

  const timePublished = new Date(datePublished.seconds * 1000);
  const options = { year: "numeric", month: "numeric", day: "2-digit" };
  const formattedDate = timePublished.toLocaleString("tr-TR", options);

  return (
    <Link className={`similiarPhotosCard ${modeStatus ? "dark" : ""}`} 
    // target="_blank" 
     href={`/foto-galeri/${eng}-${id}`} onClick={()=>handlePhotoGalleryReadInc(id)}>
       <div className={`similiarPhotosCard-container ${modeStatus ? "dark" : ""}`}>
         <div className="similiarPhotosCard-container-left">
           <img
             className="similiarPhotosCard-container-left-img"
             src={headImg}
           />
         </div>
         <div className="similiarPhotosCard-container-right">
           <div className={`similiarPhotosCard-container-right-title ${
               modeStatus ? "dark" : ""
             }`}>
             {handleShort(title, 8)}
           </div>
           <div
             className={`similiarPhotosCard-container-right-line ${
               modeStatus ? "dark" : ""
             }`}
           ></div>
           <div className="similiarPhotosCard-container-right-date">
             <span className={`foto-date-title ${modeStatus ? "dark" : ""}`}>Yayınlanma T.</span>
             <span className={`foto-date ${modeStatus ? "dark" : ""}`}>{formattedDate}</span>
           </div>
         </div>
       </div>
 
       <span className="similiarVideosCard-line" />
       {/* <div
           className={`similiarVideosCard-line ${modeStatus ? "dark" : ""}`}
         ></div> */}
     </Link>
  )
}

export default PhotoGalleryDetailCard