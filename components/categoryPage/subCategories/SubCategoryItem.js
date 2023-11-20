import "./subCategoryItem.scss";
import Link from "next/link";
const SubCategoryItem = ({item, modeStatus}) => {

  const {category, eng,id, datePublished, title,image} = item;
  
  const timePublished = new Date(datePublished.seconds * 1000);
  const options = { year: "numeric", month: "numeric", day: "2-digit" };
  const formattedDate = timePublished.toLocaleString("tr-TR", options);

  return (
    <Link href={`/${category}/${eng}-${id}`} target="_blank" className="subCategoryCard" onClick={() => handleReadIncrement(category, id)}>
    <div className="subCategoryCard-top">
      <div >
        <img src={image} alt={title} className="subCategoryCard-top-img" />
      </div>
    </div>
    <div className="subCategoryCard-bottom">
      <div
        className={`subCategoryCard-bottom-title ${modeStatus ? "dark" : ""}`}
      >
         {title}
      </div>
      <div
        className={`subCategoryCard-bottom-line ${modeStatus ? "dark" : ""}`}
      ></div>
      <div className="subCategoryCard-bottom-date">
        <span className={`card-date-title ${modeStatus ? "dark" : ""}`}>Yayınlanma T.</span>
        <span className={`card-date ${modeStatus ? "dark" : ""}`}>{formattedDate}</span>
      </div>
    </div>
  </Link>
  )
}

export default SubCategoryItem;