import { FaArrowLeft } from "react-icons/fa";
import "./customArrows.scss";
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="slider-arrow">
      <FaArrowLeft
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
export default PrevArrow;
