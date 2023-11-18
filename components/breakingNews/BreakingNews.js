import { useEffect, useState } from "react";
import "./breakingNews.scss";
import Slider from "react-slick";
import Link from "next/link";
import { GoClock } from "react-icons/go";
import { useThemeContext } from "@/context/ThemeContext";
import { collection, endBefore, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { handleShort } from "@/context/utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { handleShortt, handleShorttBreadcrump,handleShorttSmall, handleShorttMed } from "@/context/utils";

const BreakingNews = () => {
  const { mode } = useThemeContext();
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

  var today=new Date();
  var todayEarly=today.setHours(today.getHours()-6)
  var todayDated=new Date(todayEarly)

  useEffect(() => {
    let controller = new AbortController();
    (async () => {
      const q = query(
        collection(db, "sonDakika"),
        orderBy("datePublished", "asc"),
        // endBefore( "datePublished" > todayDated)
      );
      const sondakikaGetting = onSnapshot(q, (snap) => {
        var breakingNewsList = [];

        snap.forEach((doc) => {
          // var now = new Date();
          // var nowHour = now.getHours();
          // var docDate = new Date(doc.data().datePublished.seconds*1000);
          // var docHour = docDate.getHours();
          // var nowDay = now.getDate();
          // var docDay = docDate.getDate();
          // var nowMonth = now.getMonth();
          // var docMonth = docDate.getMonth();
          // var isSixHoursPassed = docMonth === nowMonth && nowDay === docDay && (nowHour-docHour <= 18);
          breakingNewsList.unshift(doc.data());
          // if (isSixHoursPassed) {
          //   breakingNewsList.unshift(doc.data());
          // };
        });

        setBreakingNews(breakingNewsList);
        setLoading(false);
      });

      return () => sondakikaGetting();
    })();

    return () => controller?.abort();
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
        <Link href="/sonDakika" className="title" target="_blank">
          SON DAKİKA
        </Link>
        <ul className="stories">
          {breakingNews.length > 0 && (
            <Slider {...settings}>
              {breakingNews?.map((item) => {
                return <SingleBreakingNews key={item.id} {...item} />;
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
      <Link href={`/sonDakika/${eng}-${id}`} target="_blank">
        <GoClock />
        <div className="news">
          <span className="news-time">{time}</span>
          <span className="news-info">{`${handleShortt(title)}`}</span>
          <span className="news-infoTall">{`${handleShorttBreadcrump(title)}`}</span>
          <span className="news-res-m">{`${handleShorttMed(title)}`}</span>{/*420px ile 768px arası için */}
          <span className="news-res-s">{`${handleShorttSmall(title)}`}</span>{/*420px için */}
        </div>
        {/* <div className="disc"></div>  */}
      </Link>
    </div>
  );
};
