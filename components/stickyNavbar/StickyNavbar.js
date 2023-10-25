"use client";
import "./stickyNavbar.scss";
import facebookIcon from "./stickyNavbarIcons/facebookIcon.svg";
import mailIcon from "./stickyNavbarIcons/mailIcon.svg";
import printIcon from "./stickyNavbarIcons/printIcon.svg";
import twitterIcon from "./stickyNavbarIcons/twitterIcon.svg";
import whatsapp from "./stickyNavbarIcons/whatsapp.svg";
import fontPlusIcon from "./stickyNavbarIcons/fontPlusIcon.svg";
import fontIncIcon from "./stickyNavbarIcons/fontIncIcon.svg";
import StickyNavbarIconWrapper from "./stickyNavbarIconWrapper/StickyNavbarIconWrapper";
import linkedinIcon from "./stickyNavbarIcons/linkedinIcon.svg";
const StickyNavbar = () => {
  const stickyNavbarData = [
    {
      id: 1,
      icon: twitterIcon,
      title: "twitter",
      url: "https://twitter.com/i/flow/login?redirect_after_login=%2Fherkesduysuncom",
      color: "twitter",
    },
    {
      id: 2,
      icon: whatsapp,
      title: "whatsapp",
      url: "",//Whatsapp 0 (541) 160 40 40
      color: "whatsapp",
    },
    {
      id: 3,
      icon: facebookIcon,
      title: "facebook",
      url: "https://www.facebook.com/herkesduysun",
      color: "facebook",
    },
    {
      id: 4,
      icon: mailIcon,
      title: "email",
      url: "mailto: iletisim@herkesduysun.com",
      color: "mail",
    },
    {
      id: 5,
      icon: linkedinIcon,
      title: "linkedin",
      url: "",
      color: "linkedin",
    },
    {
      id: 6,
      icon: printIcon,
      title: "printer",
      url: "",
      color: "printer",
    },
    {
      id: 7,
      icon: fontPlusIcon,
      title: "",
      url: "",
      color: "fontPlus",
    },
    {
      id: 8,
      icon: fontIncIcon,
      title: "",
      url: "",
      color: "fontInc",
    },
  ];

  return (
    <div className="stickyNavbar">
      <div className="stickyNavbar-container">
        {stickyNavbarData.map((item) => {
          return <StickyNavbarIconWrapper key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default StickyNavbar;
