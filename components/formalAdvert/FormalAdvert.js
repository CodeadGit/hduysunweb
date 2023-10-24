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

  return (
    <div >
      <Breadcrumb links={links} />
      {filterFormalAdv.map((i) => (
        <p
          className={`content ${modeStatus ? "dark" : ""}`}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(i.content)
          }}
        >
        </p>
      ))}
    </div>
  );
};

export default FormalAdvert;
