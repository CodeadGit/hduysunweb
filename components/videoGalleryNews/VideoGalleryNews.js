"use client";
import "./videoGalleryNews.scss";

const VideoGalleryNews = ({ filterVideoUrl }) => {
  console.log(filterVideoUrl);

//   const videoInfo = filterVideoUrl.map((i) => {
//     return <iframe className="video-news-info-video" src={i.url} controls />;
//   });

  return (
    <div className="video-news">
      <div className="video-news-info"></div>
    </div>
  );
};

export default VideoGalleryNews;
