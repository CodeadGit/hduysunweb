import "./newsTags.scss";
import Link from "next/link";

const NewsTags = ({ modeStatus, tags }) => {

  return (
    <div className="tags">
      <h3 className={`tags-title ${modeStatus ? "dark" : ""}`}>Etiketler</h3>
      <div className="tags-buttons-wrapper">
        {tags?.map((item, idx) => (
          <Link key={idx} href={`/etiketler/${item}`} className={modeStatus ? "dark" : ""}>
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsTags;
