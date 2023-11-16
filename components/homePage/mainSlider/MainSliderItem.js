import Link from "next/link";
import "./mainSliderItem.scss";
import { useThemeContext } from "@/context/ThemeContext";
import { useEffect, useState } from "react";
import { getDoc } from "firebase/firestore";
import { useAdsContext } from "@/context/AdsContext";
const MainSliderItem = ({ item, idx }) => {
  const { image, url, title, category, id, eng } = item;
  const { handleReadIncrement } = useThemeContext();
  const [mansetAds, setMansetAds] = useState([]);
  const { adsList } = useAdsContext();

  const mainAds = adsList.filter((i) => i.location === "-Haber arası1-300x250");

  return (
    <div className="mainSlider-item">
      {idx === 11 ? (
        mainAds.map((i) => (
          <img
            style={{ width: "100%", height: "27rem", aspectRatio: "3/2.30" }}
            src={i.image}
          />
        ))
      ) : (
        <Link
          href={`/${category}/${eng}-${id}`}
          target="_blank"
          onClick={() => handleReadIncrement(category, id)}
        >
          <img src={image} alt={title} className="image" />
        </Link>
      )}
    </div>
  );
};

export default MainSliderItem;
