import Breadcrumb from "../breadcrumb/Breadcrumb";
import "./columnsPage.scss";
import StickyNavbar from "../stickyNavbar/StickyNavbar";
import { useThemeContext } from "@/context/ThemeContext";
import AdsImage from "../haberPage/AdsImage";
import { db } from "@/firebase/firebase.config";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import SingleColumns from "./SingleColumns";

const ColumnsPage = ({ koseYazisi, koseYazisiArticle }) => {
  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  const body = koseYazisiArticle?.body;

  const [columns, setColumns] = useState([]);
  const [author, setAuthor] = useState({});
  const [columnsLoading, setColumnsLoading] = useState(true);

  const yazarId = String(koseYazisi?.authorid)

  useEffect(() => {
    const fetchAuthors = async () => {
      const qp = query(collection(db, "koseyazilari"));
      const qa = doc(db, "Columnists", "777319");
      getDoc(qa)
        .then((data) => setAuthor(data.data()))
        .then(() => setColumnsLoading(false));
      try {
        const querySnapshot = await getDocs(qp);
        var columnsData = [];
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            if (doc.data().authorid === yazarId && doc.data().active) {
              columnsData.push({ ...doc.data(), doc: doc.id });
            }
          });
        }
        setColumns(columnsData);
        setColumnsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAuthors();
  }, []);

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
                // __html: DOMPurify.sanitize(body),
                __html: body,
              }}
            ></p>
          </div>
        </div>
        <div className="columnsPage-container-adds">
          {" "}
          {/* SAYFANIN SAĞ TARAFI */}
          <AdsImage />
          <div className="other-articles">
             {
                columns.map((item, idx) => <SingleColumns item={item} key={idx}/>)
             }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnsPage;
