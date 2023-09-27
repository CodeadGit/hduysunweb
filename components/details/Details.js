"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { newsArray } from "../homePage/slider/Slider";
import "./details.scss";

const Details = () => {
  console.log(newsArray);

  return (
    <div className="details">
      <div className="details-container">
        {newsArray.slice(0, 5).map((item) => {
          return <CardItem key={item.id} {...item} />
        })}
      </div>
    </div>
  );
};

export default Details;

const CardItem = ({ title, image, id }) => {
    
    return (
      <div className={`card`}>
        <Link href={`/gundem/${id}`}>
          <Image src={image} alt={title} className="image" />
        </Link>
        <div className="content">
          <div className={`disc`}></div>
          <p className="title">{title}</p>
        </div>
      </div>
    );
  };
