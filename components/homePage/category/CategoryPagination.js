"use client";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CategoryPagination = ({ handleChange, page, totalPage }) => {
  return (
    <div className="">
      <Pagination
        count={Math.ceil(totalPage / 20)}
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
