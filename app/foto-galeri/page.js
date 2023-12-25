//import PhotoGallery from "@/components/photoGallery/PhotoGallery";
import dynamic from "next/dynamic";
const PhotoGallery = dynamic(
  () => import("@/components/photoGallery/PhotoGallery"),
  { ssr: false }
);
const FotoGaleriPage = () => {
  return (
    <div>
      <PhotoGallery />
    </div>
  );
};

export default FotoGaleriPage;
