import "./newsAndAuthorInfo.scss";
import { AiFillEye, AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { handleScroll } from "@/context/utils";
import Link from "next/link";

const NewsAndAuthorInfo = ({ modeStatus, thisPage }) => {
  const { author, read, likes, dislikes, comments, isFeedbackable } = thisPage;

  return (
    <div className={`user-info ${modeStatus ? "dark" : ""}`}>
      {/* <div className="user-info-img">
        <Image src={userImg} alt="google-news" fill />
      </div> */}
      {/* <span className="user-info-name">{author}</span>
      <div className={`user-info-line ${modeStatus ? "dark" : ""}`}></div> */}
      {/* <div className="user-info-icon">
        <AiFillEye className={modeStatus ? "dark" : ""} />
        <span> {read} </span>
      </div>
      <div className={`user-info-line ${modeStatus ? "dark" : ""}`}></div> */}
      <Link
        href="/#comments"
        className="user-info-comment"
        onClick={handleScroll}
      >
        <FaComment /> <span> {comments} </span> Yorum
      </Link>
      <div className={`user-info-line ${modeStatus ? "dark" : ""}`}></div>
      {isFeedbackable && (
        <>
          <div className="user-info-comment">
            <button className="user-info-comment-icon" type="button">
              <AiFillLike className={modeStatus ? "dark" : ""} />
            </button>
            <span> {likes} </span>
          </div>
          <div className="user-info-comment">
            <button className="user-info-comment-icon" type="button">
              <AiFillDislike className={modeStatus ? "dark" : ""} />
            </button>
            <span> {dislikes} </span>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsAndAuthorInfo;
