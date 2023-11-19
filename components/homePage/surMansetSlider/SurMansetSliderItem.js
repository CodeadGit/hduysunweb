import Link from "next/link";
import "./surMansetSliderItem.scss";
import { useThemeContext } from "@/context/ThemeContext";

const SurMansetSliderItem = ({ item }) => {
  const { image, url, category, id, eng, title, idx } = item;
  const { handleReadIncrement, pinnedSurmansetData } = useThemeContext();

  const filterPinnedSurMansetSec = pinnedSurmansetData.filter(
    (i) => i?.pinId === 2
  );
  const filterPinnedSurMansetThur = pinnedSurmansetData.filter(
    (i) => i?.pinId === 3
  );
  const filterPinnedSurMansetFour = pinnedSurmansetData.filter(
    (i) => i?.pinId === 4
  );

  return (
    <div className="surMansetSlider-item">
      {/* {idx === 1 && item?.insistent ? (
        filterPinnedSurMansetSec.map((i) => (
          <img
            style={{ width: "100%", height: "27rem", aspectRatio: "3/2.30" }}
            src={i?.image}
          />
        ))
      ) : idx === 2 && item?.insistent ? (
        filterPinnedSurMansetThur.map((i) => (
          <img
            style={{ width: "100%", height: "27rem", aspectRatio: "3/2.30" }}
            src={i?.image}
          />
        ))
      ) : idx === 3 && item?.insistent ? (
        filterPinnedSurMansetFour.map((i) => (
          <img
            style={{ width: "100%", height: "27rem", aspectRatio: "3/2.30" }}
            src={i?.image}
          />
        ))
      ) : ( */}
        <Link
          href={`/${category}/${eng}-${id}`}
          target="_blank"
          onClick={() => handleReadIncrement(category, id)}
        >
             <img src={image} alt={title} className="surMansetSlider-item-image" />
          { (item.category==="sonDakika" && item.isTitled) &&(
            <div className="sondakika-wrapper">
              <span className="sondakika-wrapper-title">{handleShorttSonDakika(title)}</span>
            </div>
          )}
        </Link>
    </div>
  );
};

export default SurMansetSliderItem;
