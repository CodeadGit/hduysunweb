"use client"
import FormalAdvert from "@/components/formalAdvert/FormalAdvert";
import { useAdsContext } from "@/context/AdsContext";
import { useThemeContext } from "@/context/ThemeContext";
import { usePathname } from "next/navigation";

const FormalAdvertDetail = ({params}) => {
  const { formalAdv } = useThemeContext();
  const { closeAdv, advertPage } = useAdsContext();

  const pathname = usePathname()
  const advertPathname = pathname.split("/").at(1);

  if(advertPathname === "resmi-ilanlar"){
    closeAdv()
  }

  var idArray = String(params.eng).split("-");
  var idForThisAdvert = idArray.at(-1);
  var titleArray = idArray.slice(0,-1).join(" ").toString();

  const filterFormalAdv = formalAdv.filter((i) => String(i.id) === idForThisAdvert)
  //console.log(params)

  return (
    <div>
      <FormalAdvert titleArray={titleArray} filterFormalAdv={filterFormalAdv}/>
    </div>
  )
}

export default FormalAdvertDetail;
