import Link from "next/link";
import "./categorySliderItem.scss";

const CategorySliderItem = ({ item }) => {

  const {image, url, title, category, id, eng } = item;

  return (
    <div className="categorySliderItem">
      <Link
        href={`/${category}/${eng}-${id}`}
        //  target="_blank"
        onClick={() => handleReadIncrement(category, id)}
      >
        <img src={image} alt={title} className="image" />
      </Link>
    </div>
  );
};

export default CategorySliderItem;
