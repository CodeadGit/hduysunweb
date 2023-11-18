import { Skeleton } from "@mui/material";
import "./categorySkeleton.scss";

const CategorySkeleton = () => {
  
  return (
    <div className="categorySkeleton">
    <div className="categorySkeleton-top">
        <Skeleton className="skeleton-item" variant="rounded" />
        <Skeleton className="skeleton-item" variant="rounded" />
        <Skeleton className="skeleton-item" variant="rounded" />
      </div>
      <div className="categorySkeleton-center">
        <Skeleton className="skeleton-item" variant="rounded" />
        <Skeleton className="skeleton-item" variant="rounded" />
        <Skeleton className="skeleton-item" variant="rounded" />
      </div>
      <div className="categorySkeleton-bottom">
        <Skeleton className="skeleton-item" variant="rounded" />
        <Skeleton className="skeleton-item" variant="rounded" />
        <Skeleton className="skeleton-item" variant="rounded" />
  </div>
    </div>
  );
};

export default CategorySkeleton;