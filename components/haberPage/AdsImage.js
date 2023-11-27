import Link from "next/link";
import { useAdsContext } from "@/context/AdsContext";
import "./adsImage.scss";

const AdsImage = () => {
  const { adsList, handleReadIncrementAds } = useAdsContext();

  const relatedAds = adsList.filter(
    (i) => i.location.includes("Haber arası3") && i.active
  );

  const containerStyle = {
    width: "300px",
    display: "block",
  };

  const Imagestyle = {
    objectFit: "cover",
    width: "100%",
    aspectRatio: "3/2",
    display: "inline-block",
  };

  return (
    <div className="most">
      {/* {relatedAds.map((i,idx) => (
        <Link
          href={i.url || "/"}
        //  target="_blank"
          onClick={() => handleReadIncrementAds(id)}
          style={containerStyle}
          key={idx}
        >
         <img
            className="most-img"
            src={i.image}
            alt=""
            width={i.en}
            height={i.boy}
            style={Imagestyle}
          /> 
          
        </Link>
      ))} */}
      <iframe
        src="https://www.bursa.bel.tr/reklam/?w=300"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default AdsImage;
