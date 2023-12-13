import Link from "next/link";
import "./surMansetSliderItem.scss";
import { handleShorttSurmanset } from "@/context/utils";
import { useThemeContext } from "@/context/ThemeContext";

const SurMansetSliderItem = ({ item }) => {
  const { image, url, category, id, eng, title, idx } = item;
  const { handleReadIncrement, pinnedSurmansetData } = useThemeContext();

  // const filterPinnedSurMansetSec = pinnedSurmansetData.filter(
  //   (i) => i?.pinId === 2
  // );
  // const filterPinnedSurMansetThur = pinnedSurmansetData.filter(
  //   (i) => i?.pinId === 3
  // );
  // const filterPinnedSurMansetFour = pinnedSurmansetData.filter(
  //   (i) => i?.pinId === 4
  // );

  return (
    <div className="surMansetSlider-item">
      <Link
        href={`/${category}/${eng}-${id}`}
        target="_blank"
        onClick={() => handleReadIncrement(category, id)}
      >
        <img src={image} alt={title} className="surMansetSlider-item-image" />
        {item.isSurmanset && (
          <div className="sondakika-wrapper">
            {String(title.length) < 80 ? (
              <span >{title}</span>
            ) : (
              <span>{handleShorttSurmanset(title)}</span>
            )}
          </div>
        )}
      </Link>
    </div>
  );
};

export default SurMansetSliderItem;
