import Breadcrumb from "../breadcrumb/Breadcrumb";
import "./FormalAdvert.scss";
import { useThemeContext } from "@/context/ThemeContext";
import DOMPurify from "dompurify";

const FormalAdvert = ({ titleArray, filterFormalAdv }) => {
  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  const links = [
    {
      id: 1,
      title: "Resmi İlanlar",
      link: "/resmi-ilanlar",
    },
    {
      id: 2,
      title: titleArray,
      link: "",
    },
  ];

  console.log(filterFormalAdv);

  return (
    <div className="text">
      <Breadcrumb links={links} />
      {filterFormalAdv.map((i) => (
        <>
          <span>İlan No : {i.advNo}</span>
          <p
            className={`content ${modeStatus ? "dark" : ""}`}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(i.content),
            }}
          ></p>
          <span> #ilangovtr Basın no {i.advNo}</span>
        </>
      ))}
    </div>
  );
};

export default FormalAdvert;
