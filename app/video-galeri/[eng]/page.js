"use client";
import VideoGalleryDetail from "@/components/videoGalleryDetail/VideoGalleryDetail";
import { useThemeContext } from "@/context/ThemeContext";
const VideoGalleryDetailPage = ({ params }) => {
  const { videoGallery } = useThemeContext();

  var idArray = String(params.eng).split("-");
  var idForThisVideoGallery = idArray.at(-1);
  var titleArray = idArray.slice(0,-1).join(" ").toString();

  const filteredVideo = videoGallery.filter((i) => String(i.id) === idForThisVideoGallery);
  console.log(idForThisVideoGallery )
  console.log(videoGallery)

  return (
    <div>
      <VideoGalleryDetail titleArray={titleArray} filteredVideo={filteredVideo}/>
    </div>
  );
};

export default VideoGalleryDetailPage;
