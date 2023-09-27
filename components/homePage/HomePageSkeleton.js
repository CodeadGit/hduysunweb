import { Skeleton } from "@mui/material";
import "./homePageSkeleton.scss";

const HomePageSkeleton = () => {
    
  return (
    <div className="homePageSkeleton">
      <div className="skeleton-left">
        <Skeleton variant="rounded" className="left-first" animation="wave" />
        <Skeleton variant="rounded" className="left-sec"/>
      </div>
      <div className="skeleton-right">
        <div className="skeleton-right__top">
          <Skeleton  variant="rounded" className="top-first"/>
          <Skeleton variant="rounded" className="top-second"/>
        </div>
        <div className="skeleton-right__bottom">
          <Skeleton variant="rounded" className="bottom-first"/>
          <Skeleton variant="rounded" className="bottom-sec"/>
          <Skeleton variant="rounded" className="bottom-third"/>
        </div>
      </div>
    </div>
  );
};

export default HomePageSkeleton;
