import React from 'react';
import "./ads.scss";
import Image from "next/image";
import Link from "next/link";
import arcelik from "../assets/arcelik.png";

const Arcelik = () => {
  return (
    <div className='arcelik'>
        <Link href="/video"><Image src={arcelik} alt="arcelik-ads" /></Link>
        <Link href="/spor"><Image src={arcelik} alt="arcelik-ads"/></Link>
        <Link href="/dunya"><Image src={arcelik} alt="arcelik-ads"/></Link>
    </div>
  )
}

export default Arcelik;