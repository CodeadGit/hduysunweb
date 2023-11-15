import Link from "next/link";
import "./mainSliderItem.scss";
import { useThemeContext } from "@/context/ThemeContext";

const MainSliderItem = ({ item }) => {
  const { image, url, title, category, id, eng } = item;
  const { handleReadIncrement } = useThemeContext();

  return (
    <div className="mainSlider-item">
      <Link href={`/${category}/${eng}-${id}`} target="_blank" onClick={() => handleReadIncrement(category, id)}>
        <img src={image} alt={title} className="image" />
      </Link>
    </div>
  );
};

export default MainSliderItem;
