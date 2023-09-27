import React, { useRef } from "react";
import "./singleVideo.scss";

const SingleVideo = ({ url, time, modeStatus} ) => {

  return (
    <div className="video-others-single">
      <iframe src={url} />
      <p className={modeStatus ? "dark" : ""}>{time}</p>
    </div>
  );
};

export default SingleVideo;
