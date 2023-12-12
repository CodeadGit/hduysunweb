import Breadcrumb from "../breadcrumb/Breadcrumb";
import "./columnsPage.scss";
import StickyNavbar from "../stickyNavbar/StickyNavbar";
import { useThemeContext } from "@/context/ThemeContext";
import AdsImage from "../haberPage/AdsImage";
import { db } from "@/firebase/firebase.config";
import DOMPurify from 'dompurify'
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

const ColumnsPage = ({ koseYazisi, koseYazisiArticle }) => {
  const { mode } = useModeContext();
  const modeStatus = mode === "dark";
  console.log(koseYazisi)

  const body = koseYazisiArticle?.body;

  const [columns, setColumns] = useState([]);
  const [author, setAuthor] = useState({});
  const [columnsLoading, setColumnsLoading] = useState(true);

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
            if(doc.exists) {
              columnsData.push({ ...doc.data(), doc: doc.id });
            }
          //}
        });
        var filtered = columnsData.filter(Boolean)
        setColumns(filtered);
        setColumnsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchColumns();
  }, []);

  const filteredColumns = columns?.filter((i) => i.authorid === yazarId && i.id !== koseYazisi.id);

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
          <span className={`des-title ${modeStatus ? "dark" : ""}`}>
            Köşe Yazıları
          </span>
          <div className="other-articles">
            {filteredColumns.length <= 5 &&
              filteredColumns.map((item, idx) => (
                <SingleColumns item={item} key={idx} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnsPage;
