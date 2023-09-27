import Skeleton from "@mui/material/Skeleton";
import "./detailsPageSkeleton.scss";

const DetailPageSkeleton = () => {
  return (
    <div className="detailSkeleton">
      <div className="detailSkeleton-left">
        <Skeleton variant="rounded" className="breadcrump" />
        <Skeleton variant="rounded" className="title" />
        <Skeleton variant="rounded" className="summary" />
        <Skeleton variant="rounded" className="newsImg" />
        <Skeleton variant="rounded" className="detail" />
        <Skeleton variant="rounded" className="detail" />
        <Skeleton variant="rounded" className="detail" />
        <div className="detailSkeleton-left-tags">
          <Skeleton className="tags-first" />
          <Skeleton className="tags-sec" />
          <Skeleton className="tags-third" />
        </div>
        <div className="slider">
          <Skeleton className="slide-1" />
          <Skeleton className="slide-2" />
          <Skeleton className="slide-3" />
          <Skeleton className="slide-4" />
          <Skeleton className="slide-5" />
        </div>
        <div className="form">
          <Skeleton className="form-title" />
          <Skeleton className="form-input" />
          <Skeleton className="form-input" />
          <Skeleton className="form-submit" />
        </div>
      </div>
      <div className="detailSkeleton-right">
        <Skeleton variant="rounded" className="topImg" />
        <Skeleton variant="text" className="popularNews" />
        <div className="detailSkeleton-right-center">
          <div //resimler
            className="center-images"
          >
            <Skeleton className="center-images-img" variant="rounded" />
            <Skeleton variant="rounded" className="center-images-img" />
            <Skeleton variant="rounded" className="center-images-img" />
            <Skeleton variant="rounded" className="center-images-img" />
            <Skeleton variant="rounded" className="center-images-img" />
          </div>
          <div //yazılar
            className="center-newsDetail"
          >
            <Skeleton variant="rounded" className="center-newsDetail-content" />
            <Skeleton variant="rounded" className="center-newsDetail-content" />
            <Skeleton variant="rounded" className="center-newsDetail-content" />
            <Skeleton variant="rounded" className="center-newsDetail-content" />
            <Skeleton variant="rounded" className="center-newsDetail-content" />
          </div>
        </div>
        <div className="related-newss">
          <Skeleton variant="rounded" className="related-newss-news" />
          <Skeleton variant="rounded" className="related-newss-news" />
          <Skeleton variant="rounded" className="related-newss-news" />
        </div>
        <div className="video-galeri">
          <Skeleton className="video" />
          {/* <div className="video-galeri-newss">
            <div className="newss-images">
            <Skeleton className="newss-images-img"/>
            <Skeleton className="newss-images-img"/>
            <Skeleton className="newss-images-img"/>
            </div>
            <div className="newss-contents">
            <Skeleton className="newss-contents-content"/>
            <Skeleton className="newss-contents-content"/>
            <Skeleton className="newss-contents-content"/>
            </div>
  </div>*/}
        </div>
      </div>
    </div>
  );
};

export default DetailPageSkeleton;
