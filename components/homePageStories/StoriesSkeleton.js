//import Skeleton from "@mui/material/Skeleton";
import dynamic from "next/dynamic";
import "./storiesSkeleton.scss";
const Skeleton = dynamic(
  () => import("@mui/material/Skeleton"),
  { ssr: false }
);

const StoriesSkeleton = () => {

  return (
    <div className="storiesSkeleton">
      <Skeleton variant="circular" className="story-item" />
      <Skeleton variant="circular" className="story-item" />
      <Skeleton variant="circular" className="story-item" />
      <Skeleton variant="circular" className="story-item" />
      <Skeleton variant="circular" className="story-item" />
    </div>
  );
};

export default StoriesSkeleton;
