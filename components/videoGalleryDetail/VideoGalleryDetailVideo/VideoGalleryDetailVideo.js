import ReactPlayer from "react-player";
import "./videoGalleryDetailVideo.scss";
import eyeIcon from "./videogallerydetailIcon/eyeIcon.svg"
import { BsEye } from "react-icons/bs";

const VideoGalleryDetailVideo = ({ item, mode }) => {
  const { datePublished, dateModified, embed, read, title, description } = item;

  const timePublished = new Date(datePublished.seconds * 1000);
  const options = { year: "numeric", month: "long", day: "2-digit" };
  const formattedDate = timePublished.toLocaleString("tr-TR", options);

  const timeModified = new Date(dateModified.seconds * 1000);
  const modifiedOptions = { year: "numeric", month: "long", day: "2-digit" };
  const formattedModifiedDate = timePublished.toLocaleString("tr-TR", options);

  return (
    <div className="videoGalleryDetailVideo">
      <ReactPlayer
        url={embed}
        controls
        playing={true}
        width={"100%"}
        height={"29rem"}
      />
      <div className="videoGalleryDetailVideo-info">
        <div className="videoGalleryDetailVideo-info__top">
          <div className="videoGalleryDetailVideo-info__top-published">
            <span className={`${mode}`}>Yayınlanma T.</span>
            <span className={`${mode}`}>{formattedDate}</span>
          </div>
          <div className="videoGalleryDetailVideo-info__top-modified">
            <span className={`${mode}`}>Güncellenme T.</span>
            <span className={`${mode}`}>{formattedModifiedDate}</span>
          </div>
          {/* <div className="videoGalleryDetailVideo-info__top-read"> */}
            {/* <span>
              {/* <img style={{width:40, height:40, objectFit:"contain"}} src={eyeIcon}/> */}
              {/* <BsEye/> */}
              {/* </span> */}
            {/* <span>{read}</span> */}
          {/* </div> */}
        </div>
        <div className="videoGalleryDetailVideo-info__bottom">
          <span className={`videoGalleryDetailVideo-info__bottom-title ${mode}`}>
            {title}
          </span>
          <div className={`videoGalleryDetailVideo-info__bottom-des ${mode}`}>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGalleryDetailVideo;
