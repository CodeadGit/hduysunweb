import Link from "next/link";
import "./categorySliderItem.scss";
import {
  handleShorttCatSlider,
  handleShorttCatSliderRes,
} from "@/context/utils";
import { useThemeContext } from "@/context/ThemeContext";

const CategorySliderItem = ({ item }) => {
  const { image, url, title, category, id, eng, isTitled } = item;
  const { handleReadIncrement } = useThemeContext();

  return (
    <div className="categorySliderItem">
      <Link
        href={`/${category}/${eng}-${id}`}
        //  target="_blank"
        onClick={() => handleReadIncrement(category, id)}
      >
        <img src={image} alt={title} className="image" />
        {isTitled ? (
          <div className="catSlide-title-wrapper">
            {String(title.length) < 80 && (
              <>
                <span className="title-mid">
                  {title}
                </span>
                <span className="title-res">
                  {handleShorttCatSliderRes(title)}
                </span>
              </>
            )}
          </div>
        ) : (
          <div className="catSlide-title-wrapper">
          {String(title.length) < 80 && (
            <>
              <span className="title-mid">
                {title}
              </span>
              <span className="title-res">
                {handleShorttCatSliderRes(title)}
              </span>
            </>
          )}
        </div>
        )}
      </Link>
    </div>
  );
};

export default CategorySliderItem;
