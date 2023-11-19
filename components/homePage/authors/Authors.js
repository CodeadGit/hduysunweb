"use client";
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./authors.scss";
import CardItem from "./CardItem";

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

import person3 from "../assets/person3.png";
import person2 from "../assets/person2.png";
import person1 from "../assets/person1.png";
import person4 from "../assets/person4.png";
import person5 from "../assets/person5.png";
import person6 from "../assets/person6.png";
import person7 from "../assets/person7.png";

import { useThemeContext } from '@/context/ThemeContext';

const newsArray=[
    { 
      name: "Nesrin GÜLEN",
      id:"01",
      image: person3,
    },
    { 
      name: "Mesut DEMİR",
      id: "02",
      image: person4,
    },
    { 
        name: "Fahrettin BEŞLİ",
        id:"03",
        image: person1,
    },
    { 
        name: "Yüksel BAYSAL",
        id: "04",
        image: person2,
    },
    { 
        name: "Hasan BOZTÜRK",
        id:"05",
        image: person5,
    },
    { 
        name: "Rüstem PEHLİVANLAR",
        id: "06",
        image: person6,
    },
    { 
        name: "Metin ALTUNDAL",
        id: "07",
        image: person7,
    },
];

const Authors = () => {

  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

    const settings = {
        // infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        prevArrow: <GrPrevious />,
        nextArrow: <GrNext />
      };

  return (
    <div className='authors'>
        <h3 className={modeStatus ? "dark" : ""}>YAZARLARIMIZ</h3>
        <Slider {...settings}>
        {newsArray.map((item,idx) => {
            return <CardItem {...item} key={idx} modeStatus={modeStatus} />
        })}
      </Slider>
    </div>
  )
};

export default Authors;