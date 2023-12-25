import Link from "next/link";
import "./surMansetSliderItem.scss";
import {
  handleShorttSurmanset,
  handleShorttSurmansetMed,
} from "@/context/utils";
import { useThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
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
        <Image
          width="0"
          height="0"
          sizes="100vw"
          aspectRatio={0.86/1}
          src={image}
          alt={title}
          className="surMansetSlider-item-image"
        />
        {item.isSurmanset && (
          <>
            <div className="sondakika-wrapper">
              {String(title.length) < 80 ? (
                <span>{title}</span>
              ) : (
                <span>{handleShorttSurmanset(title)}</span>
              )}
            </div>
            <div className="sondakika-wrappermed">
              {String(title.length) < 50 ? (
                <span>{title}</span>
              ) : (
                <span>{handleShorttSurmansetMed(title)}</span>
              )}
            </div>
          </>
        )}
      </Link>
    </div>
  );
};

export default SurMansetSliderItem;
