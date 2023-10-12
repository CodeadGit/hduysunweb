"use client";
import VideoGalleryNews from "@/components/videoGalleryNews/VideoGalleryNews";
import { useThemeContext } from "@/context/ThemeContext";
const VideoGalleryDetail = ({ params }) => {
  const { videoGallery } = useThemeContext();

  var idArray = String(params.eng).split("-");
  var idForThisVideoGallery = idArray.at(-1);
  var titleArray = idArray.slice(0,-1).join(" ").toString();

  const filterVideoUrl = videoGallery.filter((i) => String(i.id) === idForThisVideoGallery);
  console.log(idForThisVideoGallery )
  console.log(videoGallery)

  return (
    <div>
      <VideoGalleryNews titleArray={titleArray} filterVideoUrl={filterVideoUrl}/>
    </div>
  );
};

export default VideoGalleryDetail;
