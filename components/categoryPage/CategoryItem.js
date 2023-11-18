import "./categoryItem.scss";
import Link from "next/link";
import { useThemeContext } from "@/context/ThemeContext";
const CategoryItem = ({ item, modeStatus }) => {

  const { title, image, category, eng, id } = item;
  const { handleReadIncrement} = useThemeContext();

  return (
    <Link href={`/${category}/${eng}-${id}`} target="_blank" className="single" onClick={() => handleReadIncrement(category, id)}>
      <img className="img" src={image} alt={title} />
      <p className={`caption ${modeStatus ? "dark" : ""}`}>{title}</p> 
    </Link>
  );
};

export default CategoryItem;