"use client";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import "./categoriesMenu.scss";
import Drawer from "@mui/material/Drawer";
import { useThemeContext } from "@/context/ThemeContext";
import { useCategoriesContext } from "@/context/CategoriesContext";
import { ListItemButton, List, ListItem, IconButton,Box, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from "@mui/icons-material";
import { BsMoonFill } from "react-icons/bs";
import { useModeContext } from "@/context/ModeContext";

const CategoriesMenu = ({toggleDrawer, isMenuDrawer}) => {
  const { toggle } = useThemeContext();
  const { mode } = useModeContext();
  const { categories } = useCategoriesContext();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const modeStatus = mode === "dark";

  const darkBoxStyle = { width: "200px", height: "auto", backgroundColor: "#3e474f", transition: "0.3s all ease-in-out" };

  const lightBoxStyle = {  width: "200px", height: "auto", backgroundColor: "#fff", transition: "0.3s all ease-in-out" };

  const darkListItemStyle = { textTransform: "capitalize", color: "#fff",  transition: "0.3s all ease-in-out" };

  const lightListItemStyle = { textTransform: "capitalize", color: "#000", transition: "0.3s all ease-in-out" };

  const darkIconBoxStyle = { display: "flex", justifyContent: "space-between", backgroundColor: "#3e474f", transition: "0.3s all ease-in-out" };

  const lightIconBoxStyle = { display: "flex", justifyContent: "space-between",
  backgroundColor: "#fff", transition: "0.3s all ease-in-out" };

  const boxStyle = modeStatus ? darkBoxStyle : lightBoxStyle;

  const listItemStyle = modeStatus ? darkListItemStyle : lightListItemStyle;

  const iconBoxStyle = modeStatus ? darkIconBoxStyle : lightIconBoxStyle;


  // const handleScroll = () => {
  //   const scrollPosition = window.scrollY; // => scroll position
  //   scrollPosition > 0 && setAnchorEl(null);
  // };
  // useEffect(() => {
  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuList = () => (
    <Box sx={boxStyle} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List sx={{ height: "auto",overflowY:"hidden" }}>
        {categories?.slice(8, categories?.length).map((i, idx) => (
          <Link
            href={`/${i.collection}`}
            key={i.index}
          >
            <ListItem
             key={i.index}
             disablePadding
            >
              <ListItemButton>
                <ListItemText sx={listItemStyle} primary={i.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
     <React.Fragment>
        <Drawer
          anchor="right"
          open={isMenuDrawer}
          onClose={toggleDrawer(false)}
          sx={{height:"auto"}}
        >
          <div style={iconBoxStyle}>
            <IconButton className={`close-icon ${modeStatus ? "dark" :  ""}`} onClick={toggleDrawer(false)}>
              <Close className={`close-icon ${modeStatus ? "dark" :  ""}`} />
            </IconButton>
            {/* <IconButton className={`mode-icon ${modeStatus ? "dark" :  ""}`} onClick={toggle}>
              <BsMoonFill style={{height: "20px"}} />
            </IconButton> */}
          </div>
          {menuList()}
        </Drawer>
     </React.Fragment>
    </div>
  );
};

export default CategoriesMenu;
