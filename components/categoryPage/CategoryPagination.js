"use client";
import dynamic from "next/dynamic";
const Pagination = dynamic(
  () => import("@mui/material/Pagination"),
  { ssr: false }
);
const PaginationItem = dynamic(
  () => import("@mui/material/PaginationItem"),
  { ssr: false }
);
const ArrowBackIcon = dynamic(
  () => import("@mui/icons-material/ArrowBack"),
  { ssr: false }
);
const ArrowForwardIcon = dynamic(
  () => import("@mui/icons-material/ArrowForward"),
  { ssr: false }
);
//import Pagination from "@mui/material/Pagination";
//import PaginationItem from "@mui/material/PaginationItem";
//import ArrowBackIcon from "@mui/icons-material/ArrowBack";
//import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CategoryPagination = ({ handleChange, page, totalPage, pagList }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "1rem",
      }}
    >
      <Pagination
        // count={Math.ceil(totalPage / 20)}
        count={page + 1}
        page={page}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </div>
  );
};

export default CategoryPagination;
