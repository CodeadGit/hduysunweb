import "./newsFirstDescription.scss";

const NewsFirstDescription = ({description, modeStatus}) => {
  return (
    <p className={`firstDescription ${modeStatus ? "dark" : ""}`}>
      {description}
    </p>
  );
};

export default NewsFirstDescription;
