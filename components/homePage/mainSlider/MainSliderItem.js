import Link from "next/link";
import "./mainSliderItem.scss";
import { useThemeContext } from "@/context/ThemeContext";
import { useEffect, useState } from "react";
import { getDoc } from "firebase/firestore";
import { handleShorttSonDakika} from "@/context/utils.js"
import { useAdsContext } from "@/context/AdsContext";
const MainSliderItem = ({ item, idx,pinArray }) => {
  const { image, url, title, category, id, eng } = item;
  const { handleReadIncrement, pinnedMansetData } = useThemeContext();
  const [mansetAds, setMansetAds] = useState([]);
  const [thisPinnedItem, setThisPinnedItem ] = useState({})
  const { adsList } = useAdsContext();

  const mainAds = adsList.filter((i) => i.location === "-Haber arası1-300x250");

  const filterPinnedMansetSec = pinnedMansetData.filter((i) => i?.pinId === 2);
  const filterPinnedMansetThur = pinnedMansetData.filter((i) => i?.pinId === 3);


  //var isPinned=pinnedMansetData?.some(p=>p.pinId===idx)
  //var isPinned=pinnedMansetData?.some(p=>p.pinId===`${item.category}/${item.id}`)

    // useEffect(()=> {
    //   getDoc()
    // })

  return (
    <div className="mainSlider-item">
      {idx === 11 ? (
        mainAds.map((i,idx) => (
          <img
            key={idx}
            style={{ width: "100%", height: "27rem", aspectRatio: "3/2.30" }}
            src={i?.image}
          />
        ))
      ) : 
      <>
      {
        // isPinned?
        // <span>pinlenmşi</span>
        // :
        <Link
          href={`/${category}/${eng}-${id}`}
          target="_blank"
          onClick={() => handleReadIncrement(category, id)}
        >
          <img src={image} alt={title} className="image" />
          { (item.category==="sonDakika" && item.isTitled) &&(
            <div className="sondakika-wrapper">
              <span className="sondakika-wrapper-title">{handleShorttSonDakika(title)}</span>
            </div>
          )}
        </Link>}
        </>
      }
    </div>
  );
};

export default MainSliderItem;
