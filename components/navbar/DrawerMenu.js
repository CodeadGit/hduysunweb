import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";
import { Close, MenuBook } from "@mui/icons-material";
import { editLink } from "@/context/utils";
import { BsMoonFill } from "react-icons/bs";
import Link from "next/link";
import "./drawerMenu.scss";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import MenuIcon from '@mui/icons-material/Menu';
import { useCategoriesContext } from "@/context/CategoriesContext";
export default function DrawerMenu({ toggle, modeStatus }) {
  const { categories } = useCategoriesContext();
  const [isMenuDrawer, setIsMenuDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsMenuDrawer(open);
  };

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

  const list = () => (
    <Box
      sx={boxStyle}
     // className="box"
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{height:"auto"}}>
        {categories.map((i, index) => (
          <Link href={`/${i.collection}`} key={i.index}>
            <ListItem key={i.index} disablePadding>
              <ListItemButton>
                <ListItemText
                  sx={listItemStyle}
                  primary={editLink(i.label)}
                />
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
        <IconButton
          className={`menu-icon ${modeStatus ? "dark" : ""}`}
          size="large"
          onClick={toggleDrawer(true)}
        >
          {/* <MenuBook /> */}
          {/* <DensityMediumIcon/> */}
          <MenuIcon></MenuIcon>

        </IconButton>
        <Drawer
          anchor="right"
          open={isMenuDrawer}
          onClose={toggleDrawer(false)}
          sx={{height:"auto"}}
        >
          <div style={iconBoxStyle}>
            <IconButton className={`close-icon ${modeStatus ? "dark" :  ""}`} onClick={toggleDrawer(false)}>
              <Close />
            </IconButton>
            <IconButton className={`mode-icon ${modeStatus ? "dark" :  ""}`} onClick={toggle}>
              <BsMoonFill style={{height: "20px"}} />
            </IconButton>
          </div>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
