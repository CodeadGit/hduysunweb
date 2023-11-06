import ReactPlayer from "react-player";
import "./videoGalleryDetailVideo.scss";
import eyeIcon from "./videogallerydetailIcon/eyeIcon.svg"

const VideoGalleryDetailVideo = ({ item }) => {
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
            <span>Yayınlanma T.</span>
            <span>{formattedDate}</span>
          </div>
          <div className="videoGalleryDetailVideo-info__top-modified">
            <span>Güncellenme T.</span>
            <span>{formattedModifiedDate}</span>
          </div>
          <div className="videoGalleryDetailVideo-info__top-read">
            <span><img src={eyeIcon}/></span>
            <span>{read}</span>
          </div>
        </div>
        <div className="videoGalleryDetailVideo-info__bottom">
          <span className="videoGalleryDetailVideo-info__bottom-title">
            {title}
          </span>
          <div className="videoGalleryDetailVideo-info__bottom-des">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGalleryDetailVideo;
