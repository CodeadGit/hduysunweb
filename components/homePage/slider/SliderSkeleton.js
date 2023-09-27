import { Skeleton } from "@mui/material";
import "./sliderSkeleton.scss";

const SliderSkeleton = () => {
    
  return (
    <div className="sliderSkeleton">
      <Skeleton className="sliderItem" variant="rounded" />
      <Skeleton className="sliderItem" variant="rounded" />
      <Skeleton className="sliderItem" variant="rounded" />
      <Skeleton className="sliderItem" variant="rounded" />
      <Skeleton className="sliderItem" variant="rounded" />
    </div>
  );
};

export default SliderSkeleton;
