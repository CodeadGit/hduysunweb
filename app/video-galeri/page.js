//import VideoGallery from "@/components/videoGallery/VideoGallery";
import dynamic from "next/dynamic";
const VideoGallery = dynamic(
  () => import("@/components/videoGallery/VideoGallery"),
  { ssr: false }
);
const VideoGaleriPage = () => {
  return (
    <div>
      <VideoGallery/>
    </div>
  )
}

export default VideoGaleriPage;
