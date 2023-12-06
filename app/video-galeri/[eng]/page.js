"use client";
import VideoGalleryDetail from "@/components/videoGalleryDetail/VideoGalleryDetail";
import { useGalleryContext } from "@/context/GalleryContext";
const VideoGalleryDetailPage = ({ params }) => {
  const { videoGallery } = useGalleryContext();

  var idArray = String(params.eng).split("-");
  var idForThisVideoGallery = idArray.at(-1);
  var titleArray = idArray.slice(0,-1).join(" ").toString();

  const filteredVideo = videoGallery.filter((i) => String(i.id) === idForThisVideoGallery);

  return (
    <div>
      <VideoGalleryDetail titleArray={titleArray} filteredVideo={filteredVideo}/>
    </div>
  );
};

export default VideoGalleryDetailPage;
