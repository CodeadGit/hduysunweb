import "./surMansetSliderItem.scss";
import Link from "next/link";
import { useThemeContext } from "@/context/ThemeContext";
import { handleShorttSurmanset, handleShorttSurmansetRes } from "@/context/utils";
const SurMansetSliderResItem = ({item}) => {

  const { title, eng, category , id,image} = item
  const { handleReadIncrement } = useThemeContext(); 

  return (
    <div className="surMansetSlider-item">
      <Link
        href={`/${category}/${eng}-${id}`}
        // target="_blank"
        onClick={() => handleReadIncrement(category, id)}
      >
        <img src={image} alt={title} className="surMansetSliderRes-item-image" />
        {/* {item.isSurmanset && (
          <div className="sondakika-wrapper">
            {String(title.length) < 60 ? (
              <span>{title}</span>
            ) : (
              <span>{handleShorttSurmansetRes(title)}</span>
            )}
          </div>
        )} */}
      </Link>
    </div>
  );
};

export default SurMansetSliderResItem;
