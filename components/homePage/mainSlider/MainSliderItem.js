import Link from "next/link";
import "./mainSliderItem.scss";
import { useThemeContext } from "@/context/ThemeContext";
import { useEffect, useState } from "react";
import { getDoc } from "firebase/firestore";
import { handleShorttSonDakika} from "@/context/utils.js"
import { useAdsContext } from "@/context/AdsContext";
const MainSliderItem = ({ item, idx }) => {
  const { image, url, title, category, id, eng } = item;
  const { handleReadIncrement, pinnedMansetData } = useThemeContext();
  const [mansetAds, setMansetAds] = useState([]);
  const { adsList } = useAdsContext();

  const mainAds = adsList.filter((i) => i.location === "-Haber arası1-300x250");

  const filterPinnedMansetSec = pinnedMansetData.filter((i) => i?.pinId === 2);
  const filterPinnedMansetThur = pinnedMansetData.filter((i) => i?.pinId === 3);

  return (
    <div className="mainSlider-item">
      {idx === 11 ? (
        mainAds.map((i) => (
          <img
            style={{ width: "100%", height: "27rem", aspectRatio: "3/2.30" }}
            src={i?.image}
          />
        ))
      ) : idx === 1 ? (
        filterPinnedMansetSec.map((i) => (
          <img
            style={{ width: "100%", height: "27rem", aspectRatio: "3/2.30" }}
            src={i?.image}
          />
        ))
      ) : idx === 2 ? (
        filterPinnedMansetThur.map((i) => (
          <img
            style={{ width: "100%", height: "27rem", aspectRatio: "3/2.30" }}
            src={i?.image}
          />
        ))
      ) : item?.category === "sonDakika" ? (
        <div className="sondakika">
          <img className="sondakika-img" src={image} />
          {item?.isTitled && (
            <div className="sondakika-wrapper">
              <span className="sondakika-wrapper-title">{handleShorttSonDakika(title)}</span>
            </div>
          )}
        </div>
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
