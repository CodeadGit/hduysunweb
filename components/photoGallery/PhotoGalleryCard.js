import Link from "next/link";
import "./PhotoGalleryCard.scss";

const PhotoGalleryCard = ({item}) => {

  const {id, title, category,eng} = item;

  return (
    <div className="photoGalleryCard">
      <Link href={`/${category}/${eng}-${id}`}>
        <img/>
        <div className="photoGalleryCard-title">{title}</div>
      </Link>
    </div>
  )
}

export default PhotoGalleryCard;
