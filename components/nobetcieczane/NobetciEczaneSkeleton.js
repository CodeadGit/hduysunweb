import "./nobetciEczaneSkeleton.scss";
import { Skeleton } from "@mui/material";

const NobetciEczaneSkeleton = () => {

  return (
    <div className="nobetciEczane">
      <div className="eczane-input">
        <Skeleton className="input"/>
        <Skeleton className="input"/>
        <Skeleton className="input-button"/>
      </div>
      <Skeleton className="text" variant="text"  />
      <div className="eczane-items">
        <Skeleton className="item"/>
        <Skeleton className="item"/>
        <Skeleton className="item"/>
        <Skeleton className="item"/>
      </div>
    </div>
  );
};

export default NobetciEczaneSkeleton;
