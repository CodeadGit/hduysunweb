import "./newsTimeInfo.scss";
import dynamic from "next/dynamic";
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
       <span>
        <strong>Yayınlanma Tarihi: </strong> {publishedTime}
      </span>
        <span>
          <strong>Güncellenme Tarihi: </strong> {modifiedTime === "Invalid date" ? publishedTime : modifiedTime}
        </span>
    </p>
  );
};

export default NewsTimeInfo;
