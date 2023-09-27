import { Skeleton } from "@mui/material";

const MenuUnderSkeleton = () => {

  const style = {
    width: "100%",
    height: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={style}>
      <Skeleton width={970} height={250} />
    </div>
  );
};

export default MenuUnderSkeleton;
