import "./newsTitle.scss";
import { useThemeContext } from "@/context/ThemeContext";
import { useModeContext } from "@/context/ModeContext";

const NewsTitle = ({ title, modeStatus }) => {

  const { fontDec, fontInc } = useThemeContext;
  const { mode } = useModeContext();

  return (
    <div className={`newss-container-content-title ${modeStatus ? "dark" : ""}`}>
      {/* <div className={`blue-line ${modeStatus ? "dark" : ""}`}></div> */}
       <h1 className={`title ${modeStatus ? "dark" : ""}`}> {title} </h1> 
    </div>
  );
};

export default NewsTitle;
