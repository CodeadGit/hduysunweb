import { Skeleton } from "@mui/material";
import "./homePageSkeleton.scss";

const HomePageSkeleton = () => {
    
  return (
    <div className="homePageSkeleton">
      <div className="skeleton-left">
        <Skeleton variant="rounded" className="left-first" animation="wave" />
      </div>
      <div className="skeleton-right">
      <Skeleton variant="rounded" className="left-first" animation="wave" />
        {/* <div className="skeleton-right__bottom">
          <Skeleton variant="rounded" className="bottom-first"/>
          <Skeleton variant="rounded" className="bottom-sec"/>
          <Skeleton variant="rounded" className="bottom-third"/>
        </div> */}
      </div>
    </div>
  );
};

export default HomePageSkeleton;
