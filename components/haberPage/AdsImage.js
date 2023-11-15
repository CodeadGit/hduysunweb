import Link from "next/link";
import Image from "next/image";
import most1 from "../homePage/assets/most1.png";
import { useAdsContext } from "@/context/AdsContext";
import "./adsImage.scss";

const AdsImage = () => {
  const { adsList , handleReadIncrementAds} = useAdsContext();

  const relatedAds = adsList.filter(
    (i) => i.location.includes("Haber arası3") && i.active
  );

  const containerStyle = {
    width: "300px",
    display: "block"
  };

  const Imagestyle = {
    objectFit: "cover",
    width: "100%",
    aspectRatio: "3/2",
    display: "inline-block"
  };

  return (
    <div className="most">
      {relatedAds.map((i) => (
        <Link
          href={i.url || "/"}
          target="_blank"
          onClick={() => handleReadIncrementAds(id)}
          style={containerStyle}
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
      ))}
    </div>
  );
};

export default AdsImage;
