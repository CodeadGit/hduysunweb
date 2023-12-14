import { FaArrowRight } from "react-icons/fa";
import "./customArrows.scss";
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="slider-arrow">
      <FaArrowRight
      className={className}
      style={{
        ...style,
        display: "block",
        background: "none",
        color: "#095985",
      }}
      onClick={onClick}
    />
    </div>
  );
}
export default NextArrow;
