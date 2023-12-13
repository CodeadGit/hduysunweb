import "./columnistsAuthorsCard.scss";
import Link from "next/link";
import { useThemeContext } from "@/context/ThemeContext";
import { useModeContext } from "@/context/ModeContext";

const ColumnistsAuthorsCard = ({ item }) => {
  const { mode } = useModeContext();
  const { id, author, avatar, lastName, name, postCount } = item;

  const modeStatus = mode === "dark";

  return (
    <Link
      href={`yazarlar/${item?.urledTitle}-${item?.id}`}
      className={`columnistsAuthorsCard ${modeStatus ? "dark" : ""}`}
    >
      <div className="columnistsAuthorsCard-top">
        <img
          className="columnistsAuthorsCard-top-img"
          src={avatar}
          alt={author}
        ></img>
      </div>

      <div className="columnistsAuthorsCard-bottom">
        <div
          className={`columnistsAuthorsCard-bottom-title ${
            modeStatus ? "dark" : ""
          }`}
        >
          {name + " " + lastName}
        </div>
        <div className="columnistsAuthorsCard-bottom-line"></div>

        {/* <div
          className={`columnistsAuthorsCard-bottom-number ${
            modeStatus ? "dark" : ""
          }`}
        >
          <div className={`columnistsAuthorsCard-bottom-number-title ${
            modeStatus ? "dark" : ""
          }`}>Yazdığı yazı sayısı</div>
          <span
            className={`date ${modeStatus ? "dark" : ""}`}
          >
            {postCount}
          </span>
        </div> */}
      </div>
    </Link>
  );
};

export default ColumnistsAuthorsCard;
