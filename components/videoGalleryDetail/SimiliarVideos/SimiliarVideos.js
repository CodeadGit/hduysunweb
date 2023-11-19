"use client"
import "./similiarVideos.scss";
import { useThemeContext } from "@/context/ThemeContext";
import SimiliarVideosCard from "./SimiliarVideosCard";
const SimilarVideos = () => {

  const { videoGallery } = useThemeContext();

  const similiarVideos = videoGallery.slice(0,3).map((item,idx) => {
    return (
      <SimiliarVideosCard key={idx} item={item}/>
    )
  })

  return (
    <div className="similiarVideos">
      <span className="similiarVideos-title">Benzer Videolar</span>
       <div className="similiarVideos-list">{similiarVideos}</div>
    </div>
  )
}

export default SimilarVideos;
