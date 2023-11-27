"use client";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import "./categoriesMenu.scss";
import { useThemeContext } from "@/context/ThemeContext";
import { useCategoriesContext } from "@/context/CategoriesContext";

const CategoriesMenu = () => {
  const { mode } = useThemeContext();
  const { categories } = useCategoriesContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const modeStatus = mode === "dark";

  const darkBoxStyle = {
    height: "auto",
    backgroundColor: "#1f252b",
    transition: "0.3s all ease-in-out",
  };

  const lightBoxStyle = {
    height: "100%",
    backgroundColor: "#fff",
    transition: "0.3s all ease-in-out"
  };

  const darkTitleStyle = {
    color:"white",
    textTransform:"capitalize",
    fontFamily:"Poppins",
    fontSize:"1rem"
  }

  const lightTitleStyle = {
    color:"#333333",
    textTransform:"capitalize",
    fontFamily:"Poppins",
    fontSize:"1rem"
  }

  const menuStyle = modeStatus ? darkBoxStyle : lightBoxStyle;
  const linkStyle = modeStatus ? darkTitleStyle : lightTitleStyle;

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    scrollPosition > 0 && setAnchorEl(null);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        className={`menu-button  ${modeStatus ? "dark" : ""}`}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={linkStyle}
      >
        Tümünü Gör
      </Button>
      <Box
        sx={{
          background: "black",
          flexGrow: 0,
          display: { xs: "none", md: "flex" },
        }}
        role="presentation"
      >
        <Menu
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: modeStatus ? darkBoxStyle : lightBoxStyle
            },
          }}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose || handleScroll}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {categories?.slice(8, categories?.length).map((i, idx) => (
            <MenuItem
              sx={{ paddingLeft: "0.5rem", paddingRight: "1rem" }}
              onClick={handleClose}
            >
              <Link
                href={`/${i.collection}`}
                className={`menu-item-link ${modeStatus ? "dark" : ""}`}
                style={linkStyle}
              >
                {i.label}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};

export default CategoriesMenu;
