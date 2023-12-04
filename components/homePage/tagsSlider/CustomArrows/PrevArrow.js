import { FaArrowLeft } from "react-icons/fa";

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
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
  );
}
export default PrevArrow;
