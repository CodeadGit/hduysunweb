import Link from "next/link";
import "./surMansetSliderItem.scss";
import { useThemeContext } from "@/context/ThemeContext";

const SurMansetSliderItem = ({item}) => {

 const {image, url,category,id,eng,title} = item;
 const { handleReadIncrement } = useThemeContext();

  return (
    <div className="surMansetSlider-item">
      <Link href={`/${category}/${eng}-${id}`} target="_blank" onClick={() => handleReadIncrement(category, id)}>
      <img src={image} alt={title} className="surmanset-image"/>
      </Link>
    </div>
  )
}

export default SurMansetSliderItem;
