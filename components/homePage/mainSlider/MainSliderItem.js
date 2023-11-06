import Link from "next/link";
import "./mainSliderItem.scss";

const MainSliderItem = ({ item }) => {
  const { image, url, title, category, id, eng } = item;

  return (
    <div className="mainSlider-item">
      <Link href={`/${category}/${eng}-${id}`} target="_blank">
        <img src={image} alt={title} className="image" />
      </Link>
    </div>
  );
};

export default MainSliderItem;
