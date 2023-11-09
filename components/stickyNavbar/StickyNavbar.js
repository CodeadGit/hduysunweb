"use client";
import "./stickyNavbar.scss";
import facebookIcon from "./stickyNavbarIcons/facebookIcon.svg";
import mailIcon from "./stickyNavbarIcons/mailIcon.svg";
import printIcon from "./stickyNavbarIcons/printIcon.svg";
import twitterIcon from "./stickyNavbarIcons/twitterIcon.svg";
import whatsapp from "./stickyNavbarIcons/whatsapp.svg";
import fontIncIcon from "./stickyNavbarIcons/fontIncIcon.svg";
import fontDecIcon from "./stickyNavbarIcons/fontIncIcon.svg";
import StickyNavbarIconWrapper from "./stickyNavbarIconWrapper/StickyNavbarIconWrapper";
import linkedinIcon from "./stickyNavbarIcons/linkedinIcon.svg";
const StickyNavbar = () => {


  const stickyNavbarData = [
    {
      id: 1,
      icon: twitterIcon,
      kindOf: "link",
      title: "twitter",
      url: "https://twitter.com/i/flow/login?redirect_after_login=%2Fherkesduysuncom",
      color: "twitter",
    },
    {
      id: 2,
      icon: whatsapp,
      kindOf: "link",
      title: "whatsapp",
      url: "https://wa.me/+905411604040", //Whatsapp 0 (541) 160 40 40
      color: "whatsapp",
    },
    {
      id: 3,
      icon: facebookIcon,
      kindOf: "link",
      title: "facebook",
      url: "https://www.facebook.com/herkesduysun",
      color: "facebook",
    },
    {
      id: 4,
      icon: mailIcon,
      title: "email",
      kindOf: "link",
      url: "mailto: iletisim@herkesduysun.com",
      color: "mail",
    },
    {
      id: 5,
      icon: linkedinIcon,
      title: "linkedin",
      kindOf: "link",
      url: "", //sonra hesap açılıp eklenecek
      color: "linkedin",
    },
    // {
    //   id: 6,
    //   icon: printIcon,
    //   title: "printer",
    //   kindOf: "link",
    //   url: "",
    //   color: "printer",
    // },
    {
      id: 7,
      icon: fontIncIcon,
      kindOf: "button",
      work:"inc",
      title: "",
      url: "",
      color: "fontPlus",
    },
    {
      id: 8,
      icon: fontDecIcon,
      kindOf: "button",
      work:"dec",
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
