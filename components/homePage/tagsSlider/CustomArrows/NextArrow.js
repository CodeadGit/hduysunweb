import { FaArrowRight } from "react-icons/fa";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
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
  );
}
export default NextArrow;
