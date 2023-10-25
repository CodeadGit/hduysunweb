"use client";
import Link from "next/link";
import "./stickyNavbarIconWrapper.scss";
import Image from "next/image";
const StickyNavbarIconWrapper = ({ item }) => {
  const { icon, color, url, title } = item;

  return (
    <Link target="_blank" href={url} className={`iconWrapper ${color}`}>
      {/* <svg src={icon} /> */}
      <Image src={icon} className="iconWrapper-icon"/>
    </Link>
  );
};

export default StickyNavbarIconWrapper;
