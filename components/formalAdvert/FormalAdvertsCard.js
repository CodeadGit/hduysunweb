import "./formalAdvertsCard.scss";
import Link from "next/link";
import { handleShort } from "@/context/utils";
import { useModeContext } from "@/context/ModeContext";

const FormalAdvertsCard = ({ item,content }) => {

  const {eng, category, id, title, datePublished} = item;
  const { mode } = useModeContext();
  const modeStatus = mode === "dark";

  const timePublished = new Date(datePublished.seconds * 1000);
  const options = { year: "numeric", month: "long", day: "2-digit" };
  const formattedDate = timePublished.toLocaleString("tr-TR", options);

  return (
    <div className={`formalAdvert-Card ${modeStatus ? "dark" : ""}`}>
       <div className="formalAdvert-Card-top">
        <span className={`adv-title ${modeStatus ? "dark" : ""}`}>Resmi İlan</span>
        </div> 
      <div className="formalAdvert-Card-bottom">
        <Link href={`/resmi-ilanlar/${eng}-${id}`} className={`formalAdvert-Card-bottom-title ${modeStatus ? "dark" : ""}`}> {handleShort(title, 10)}</Link>
        {/* <div className="formalAdvert-Card-right-des">{item.content}</div>  */}
        <div className="formalAdvert-Card-bottom-date">
          <span className={`published-title ${modeStatus ? "dark" : ""}`}>Yayınlanma T. </span>
          <span className={`published-date ${modeStatus ? "dark" : ""}`}>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default FormalAdvertsCard;
