import Link from "next/link";
import "./surMansetSliderItem.scss";

const SurMansetSliderItem = ({item}) => {

 const {image, url,category,id,eng,title} = item;

  return (
    <div className="surMansetSlider-item">
      <Link href={`/${category}/${eng}-${id}`} target="_blank">
      <img src={image} alt={title} className="surmanset-image"/>
      </Link>
    </div>
  )
}

export default SurMansetSliderItem;
