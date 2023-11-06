import React from "react";
import "./newsTimeInfo.scss";
import moment from "moment";

const NewsTimeInfo = ({ dateModified, datePublished, modeStatus }) => {

  const styleTime = {
    // border: "1px solid red",
    display: "flex",
    gap: "1rem",
  };

  const timePublished = new Date(datePublished.seconds * 1000);
  const publishedTime = moment(timePublished).format("DD.MM.YYYY - HH:mm");

  const timeModified = new Date(dateModified.seconds * 1000);
  const modifiedTime = moment(timeModified).format("DD.MM.YYYY - HH:mm");

  return (
    <p className={`timeInfo ${modeStatus ? "dark" : ""}`} style={styleTime}>
      {dateModified && (
        <span>
          <strong>Güncellenme Tarihi: </strong> {modifiedTime}
        </span>
      )}
      <span>
        <strong>Yayınlanma Tarihi: </strong> {publishedTime}
      </span>
    </p>
  );
};

export default NewsTimeInfo;
