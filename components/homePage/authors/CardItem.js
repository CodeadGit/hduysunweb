import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./cardItem.scss";

const CardItem = ({ name, image, modeStatus }) => {
  
  return (
    <div className="slide">
      <Link href="/">
        <Image src={image} alt={name} />
      </Link>
      <div className="content">
        <p className={`name ${modeStatus ? "dark" : ""}`}>{name}</p>
      </div>
    </div>
  );
};

export default CardItem;
