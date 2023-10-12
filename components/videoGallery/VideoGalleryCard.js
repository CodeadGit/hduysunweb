import "./videoGalleryCard.scss";
import AiOutlinePlayCircle from "react-icons/ai";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Link from "next/link";

const VideoGalleryCard = ({ item }) => {
  const { category, datePublished, description, headImg, eng, id, title, url } =
    item;

  return (
    <Link
      href={`video-galeri/${eng}-${id}`}
      target="_blank"
      className="videoGalleryCard"
    >
      <img
        src={headImg}
        alt="videogaleri-image"
        className="videoGalleryCard-img"
      />
      <PlayCircleOutlineIcon className="icon">play</PlayCircleOutlineIcon>
    </Link>
  );
};

export default VideoGalleryCard;
