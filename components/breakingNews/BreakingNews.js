import { useEffect, useState } from "react";
import "./breakingNews.scss";
import Slider from "react-slick";
import Link from "next/link";
import { GoClock } from "react-icons/go";
import {
  collection,
  endBefore,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { handleShort } from "@/context/utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  handleShortt,
  handleShorttBreadcrump,
  handleShorttSmall,
  handleShorttMed,
} from "@/context/utils";
import { useModeContext } from "@/context/ModeContext";

const BreakingNews = () => {
  const { mode } = useModeContext();
  const modeStatus = mode === "dark";
  const [breakingNews, setBreakingNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // console.log(breakingNews);

  var today = new Date();
  var todayEarly = today.setHours(today.getHours() - 6);
  var todayDated = new Date(todayEarly);

  useEffect(() => {
    const fetchBreakingNews = async () => {
      const q = query(
        collection(db, "sonDakika"),
        orderBy("datePublished", "asc"),
        endBefore( "datePublished" > todayDated)
      );
      try {
        const querySnapshot = await getDocs(q);
        var breakingNewsList = [];

        querySnapshot.forEach((doc) => {
           var now = new Date();
           var nowHour = now.getHours();
           var docDate = new Date(doc.data().datePublished.seconds*1000);
           var docHour = docDate.getHours();
           var nowDay = now.getDate();
           var docDay = docDate.getDate();
           var nowMonth = now.getMonth();
           var docMonth = docDate.getMonth();
           var isSixHoursPassed = docMonth === nowMonth && nowDay === docDay && (nowHour-docHour <= 18);
          breakingNewsList.unshift(doc.data());
           if (isSixHoursPassed) {
             breakingNewsList.unshift(doc.data());
           };
        });
        setBreakingNews(breakingNewsList);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBreakingNews();
  }, []);

  // if (loading) {
  //   return (
  //     <div className={`navbar-sub-header ${modeStatus ? "dark" : ""}`}>
  //       <CircularProgress style={{ height: "100%", color: "#fff" }} />
  //     </div>
  //   );
  // }

  return (
    <div className={`navbar-sub-header ${modeStatus ? "dark" : ""}`}>
      <div className="sub-header-wrapper">
        <Link
          href="/sonDakika"
          className="title"
          //target="_blank"
        >
          SON DAKİKA
        </Link>
        <ul className="stories">
          {breakingNews.length > 0 && (
            <Slider {...settings}>
              {breakingNews?.map((item, idx) => {
                return <SingleBreakingNews key={idx} {...item} />;
              })}
            </Slider>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BreakingNews;

const SingleBreakingNews = ({ title, datePublished, eng, id }) => {
  const time = new Date(datePublished.seconds * 1000)
    .toLocaleTimeString()
    .substring(0, 5);

  return (
    <div>
      <Link
        href={`/sonDakika/${eng}-${id}`}
        // target="_blank"
      >
        <GoClock />
        <div className="news">
          <span className="news-time">{time}</span>
          <span className="news-info">
            {title.length > 33 ? `${handleShortt(title)}` : title}
          </span>
          <span className="news-infoTall">
            {title.length > 40 ? `${handleShorttBreadcrump(title)}` : title}
          </span>
          <span className="news-res-m">
            {title.length > 36 ? `${handleShorttMed(title)}` : title}
          </span>
          {/*420px ile 768px arası için */}
          <span className="news-res-s">
            {title.length > 27 ? `${handleShorttSmall(title)}` : title}
          </span>
          {/*420px için */}
        </div>
        {/* <div className="disc"></div>  */}
      </Link>
    </div>
  );
};
