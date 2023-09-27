import Skeleton from "@mui/material/Skeleton";
import "./storiesSkeleton.scss";

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
