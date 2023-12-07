"use client";
import React from "react";
import "./video.scss";
import SingleVideo from "./SingleVideo";
import { useThemeContext } from "@/context/ThemeContext";
import { useModeContext } from "@/context/ModeContext";

const videosArray = [
    {
        id: 1,
        url: "https://www.youtube.com/embed/watch?v=QAnxi6yFOfY&list=UULFyPLT9P4xc_xgMeXi8HAnpQ&index=2",
        time: "09:12",
    },
    {
        id: 2,
        url: "https://www.youtube.com/embed/watch?v=fUAyt1HJ0UY&list=UULFyPLT9P4xc_xgMeXi8HAnpQ&index=3",
        time: "10:36",
    },
    {
        id: 3,
        url: "https://www.youtube.com/embed/watch?v=bj8aCbNmuDQ&list=UULFyPLT9P4xc_xgMeXi8HAnpQ",
        time: "12:29",
    },
    {
        id: 4,
        url: "https://www.youtube.com/embed/watch?v=QAnxi6yFOfY&list=UULFyPLT9P4xc_xgMeXi8HAnpQ&index=2",
        time: "14:34",
    },
    {
        id: 5,
        url: "https://www.youtube.com/embed/watch?v=fUAyt1HJ0UY&list=UULFyPLT9P4xc_xgMeXi8HAnpQ&index=3",
        time: "17:51",
    },
    {
      id: 6,
      url: "https://www.youtube.com/embed/watch?v=bj8aCbNmuDQ&list=UULFyPLT9P4xc_xgMeXi8HAnpQ",
      time: "19:47",
  },
];

const Video = () => {

  const { mode } = useModeContext();
  const modeStatus = mode === "dark";

  return (
    <div className="video">
      <div className="video-main">
        <iframe src="https://www.youtube.com/embed/watch?v=bj8aCbNmuDQ&list=UULFyPLT9P4xc_xgMeXi8HAnpQ" />
      </div>
      <div className="video-others">
        <h4 className={modeStatus ? "dark" : ""}>Diğer Haber Videoları</h4>
        {videosArray.slice(0,6).map((item,idx) => (
            <SingleVideo key={idx} {...item} modeStatus={modeStatus} />
        ))}
      </div>
    </div>
  );
};

export default Video;
