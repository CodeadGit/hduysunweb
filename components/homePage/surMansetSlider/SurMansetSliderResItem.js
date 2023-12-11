import "./surMansetSliderItem.scss";
import Link from "next/link";
import { useThemeContext } from "@/context/ThemeContext";
import {
  handleShorttSurmanset,
  handleShorttSurmansetRes,
} from "@/context/utils";
const SurMansetSliderResItem = ({ item }) => {
  const { title, eng, category, id, image } = item;
  const { handleReadIncrement } = useThemeContext();

  return (
    <div className="surMansetSliderRes-item">
      <Link
        href={`/${category}/${eng}-${id}`}
        target="_blank"
        onClick={() => handleReadIncrement(category, id)}
      >
        <img
          src={image}
          alt={title}
          style={{ padding: "0 0.5rem" }}
          className="surMansetSliderRes-item-image"
        />
      {item.isSurmanset && (
          <div className="title-wrapper">
            {String(title.length) < 30 ? (
              <span><div className="disc"></div>{title}</span>
            ) : (
              <span><div className="disc"></div>{handleShorttSurmansetRes(title)}</span>
            )}
          </div>
        )} 
      </Link>
    </div>
  );
};

export default SurMansetSliderResItem;
