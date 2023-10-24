"use client"
import "./stickyNavbar.scss";
import facebookIcon from "./stickyNavbarIcons/facebookIcon.svg";
import mailIcon from "./stickyNavbarIcons/mailIcon.svg";
import printIcon from "./stickyNavbarIcons/printIcon.svg";
import twitterIcon from "./stickyNavbarIcons/twitterIcon.svg";
import whatsapp from "./stickyNavbarIcons/whatsapp.svg";
import fontPlusIcon from "./stickyNavbarIcons/fontPlusIcon.svg";
import fontIncIcon from "./stickyNavbarIcons/fontIncIcon.svg";
import StickyNavbarIconWrapper from "./stickyNavbarIconWrapper/StickyNavbarIconWrapper";
const StickyNavbar = () => {
  const stickyNavbarData = [
    {
      id: 1,
      icon: twitterIcon,
      title: "twitter",
      url: "",
      color: "twitter",
    },
    {
      id: 2,
      icon: whatsapp,
      title: "whatsapp",
      url: "",
      color: "whatsapp",
    },
    {
      id: 3,
      icon: facebookIcon,
      title: "facebook",
      url: "",
      color: "facebook",
    },
    {
      id: 4,
      icon: mailIcon,
      title: "email",
      url: "",
      color: "mail",
    },
    // {
    //   id: 5,
    //   icon: <RiLinkedinFill/>,
    //   title: "linkedin",
    //   url: "",
    //   color: "#3C66AE",
    // },
    {
      id: 6,
      icon: printIcon,
      title: "printer",
      url: "",
      color: "printer",
    }
    // {
    //   id: 7,
    //   icon: "",
    //   title: "fontPlus",
    //   url: "",
    //   color: "#969696",
    // },
    // {
    //   id: 8,
    //   icon: "",
    //   title: "fontInc",
    //   url: "",
    //   color: "#969696",
    // },
  ];

  return (
    <div className="stickyNavbar">
      {stickyNavbarData.map((item) => {
        return (
          <StickyNavbarIconWrapper key={item.id} item={item}/>
        )
      })}
    </div>
  );
};

export default StickyNavbar;
