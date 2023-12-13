import Breadcrumb from "../breadcrumb/Breadcrumb";
import "./columnsPage.scss";
import StickyNavbar from "../stickyNavbar/StickyNavbar";
import AdsImage from "../haberPage/AdsImage";
import { db } from "@/firebase/firebase.config";
import DOMPurify from "dompurify";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import SingleColumns from "./SingleColumns";
import { useModeContext } from "@/context/ModeContext";
import moment from "moment";
import { Avatar } from "@mui/material";
import { useThemeContext } from "@/context/ThemeContext";

const ColumnsPage = ({ koseYazisi, koseYazisiArticle, idArray }) => {
  const { mode } = useModeContext();
  const { autors } = useThemeContext();
  const modeStatus = mode === "dark";

  const body = koseYazisiArticle?.body;

  const [columns, setColumns] = useState([]);
  const [author, setAuthor] = useState({});
  const [columnsLoading, setColumnsLoading] = useState(true);
  const [authorAvatar, setAuthorAvatar] = useState("");
  const [avatarLoading, setAuthorLoading] = useState(true);

  const yazarId = String(koseYazisi?.authorid);

  useEffect(() => {
    const fetchColumns = async () => {
      const qp = query(
        collection(db, "koseyazilari"),
        orderBy("datePublished", "desc")
      );
      try {
        const querySnapshot = await getDocs(qp);
        var columnsData = [];
        querySnapshot.forEach((doc) => {
          //if (doc.data().authorid === String(yazarId) && doc.data().active) {
          if (doc.exists) {
            columnsData.push({ ...doc.data(), doc: doc.id });
          }
          //}
        });
        var filtered = columnsData.filter(Boolean);
        setColumns(filtered);
        setColumnsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchColumns();
  }, []);

  const filteredColumns = columns?.filter(
    (i) =>
      String(i.authorid) === String(yazarId) &&
      String(i.id) !== String(koseYazisi.id)
  );

  const links = [
    {
      id: 1,
      title: "Yazarlar",
      link: "/yazarlar",
      titleContent: false,
    },
    {
      id: 2,
      title: koseYazisi.title,
      link: "#",
      titleContent: true,
    },
  ];

  const timePublished = new Date(koseYazisi.datePublished?.seconds * 1000);
  const publishedTime = moment(timePublished).format("DD.MM.YYYY - HH:mm");

  const timeModified = new Date(koseYazisi.dateModified?.seconds * 1000);
  const modifiedTime = moment(timeModified).format("DD.MM.YYYY - HH:mm");

  const styleTime = {
    // border: "1px solid red",
    display: "flex",
    gap: "1rem",
  };

  const filteredAuthorAvatar = autors.find((item) => item.id === String(koseYazisi?.authorid))

  return (
    <div className={`columnsPage ${modeStatus ? "dark" : ""}`}>
      <Breadcrumb modeStatus={modeStatus} links={links} />
      <div className="columnsPage-container">
        <StickyNavbar />
        <div className="columnsPage-container-content">
          <div
            className={`columnsPage-container-content-title ${
              modeStatus ? "dark" : ""
            }`}
          >
            {/* <div className={`blue-line ${modeStatus ? "dark" : ""}`}></div> */}
            <h1 className={`title ${modeStatus ? "dark" : ""}`}>
              {" "}
              {koseYazisi.title}{" "}
            </h1>
          </div>
          {publishedTime !== "Invalid date" ? (
            <div className="columnsPage-container-content-info">
              <div className="columnsPage-container-content-info-authorInfo">
              <Avatar
                  className="avatar"
                  alt="avatar-img"
                  sx={{width:"35px", height:"35px"}}
                  src={filteredAuthorAvatar?.avatar}
                />
                <span className={`author-name ${
                  modeStatus ? "dark" : ""
                }`}>{koseYazisi?.author}</span>
              </div>
              <p
                className={`columnsPage-container-content-info-timeInfo ${
                  modeStatus ? "dark" : ""
                }`}
                style={styleTime}
              >
                <span>
                  <strong>Yayınlanma Tarihi: </strong> {publishedTime}
                </span>
                <span>
                  <strong>Güncellenme Tarihi: </strong>{" "}
                  {modifiedTime === "Invalid date"
                    ? publishedTime
                    : modifiedTime}
                </span>
              </p>
            </div>
          ) : (
            ""
          )}

          <div className="columnsPage-container-content-des">
            <p
              className={`content ${modeStatus ? "dark" : ""}`}
              //style={{fontSize: `${fontDec}rem !important`}}
              dangerouslySetInnerHTML={{
                // __html: DOMPurify.sanitize(koseYazisi.article),
                __html: koseYazisiArticle.body,
              }}
            ></p>
          </div>
        </div>
        <div className="columnsPage-container-adds">
          {" "}
          {/* SAYFANIN SAĞ TARAFI */}
          <AdsImage />
          {filteredColumns.length !== 0 ? (
            <span className={`des-title ${modeStatus ? "dark" : ""}`}>
              Köşe Yazarının Diğer Yazıları
            </span>
          ) : ""}
          <div className="other-articles">
            {filteredColumns.length !== 0 ?
             filteredColumns.slice(0,5).map((item, idx) => (
               <SingleColumns item={item} key={idx} />
             ))
            : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnsPage;
