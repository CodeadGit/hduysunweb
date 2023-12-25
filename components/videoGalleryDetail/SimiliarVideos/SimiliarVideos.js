"use client"
import "./similiarVideos.scss";
import dynamic from "next/dynamic";
//import SimiliarVideosCard from "./SimiliarVideosCard";
import { useModeContext } from "@/context/ModeContext";
import { useGalleryContext } from "@/context/GalleryContext";

const SimiliarVideosCard = dynamic(
  () => import("./SimiliarVideosCard"),
  { ssr: false }
);

const SimilarVideos = () => {

  const { videoGallery } = useGalleryContext();
  const { mode } = useModeContext();

  const similiarVideos = videoGallery.slice(0,3).map((item,idx) => {
    return (
      <SimiliarVideosCard key={idx} item={item}/>
    )
  })

  return (
    <div className="similiarVideos">
      {/* <span className="similiarVideos-title">Benzer Videolar</span> */}
       <div className={`similiarVideos-list ${mode}`}>{similiarVideos}</div>
    </div>
  )
}

export default SimilarVideos;
