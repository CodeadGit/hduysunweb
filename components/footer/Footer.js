"use client";
import React from "react";
import "./footer.scss";
import Image from "next/image";
import Link from "next/link";
import darkLogo from "../../components/navbarLogo/darkLogo.svg";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import google from "../../components/homePage/assets/google.png";
import apple from "../../components/homePage/assets/apple.png";
import KunyeItem from "./KunyeItem";
import { useThemeContext } from "@/context/ThemeContext";

const kunyeArray = [
  {
    id: 1,
    caption: "Künye",
  },
  {
    id: 2,
    caption: "Çerez Politikası",
  },
  {
    id: 3,
    caption: "Gizlilik Politikası",
  },
  {
    id: 4,
    caption: "Veri Politikası",
  },
  {
    id: 5,
    caption: "Kullanım Şartnamesi",
  },
  {
    id: 6,
    caption: "Bize Ulaşın",
  },
  {
    id: 7,
    caption: "KVKK",
  },
];

const Footer = () => {
  
  const { storyModal, mode } = useThemeContext();
  const modeStatus = mode === "dark";

  return (
    <div
      className={`footer ${
        storyModal ? "storiesOn" : modeStatus ? "dark" : ""
      }`}
    >
      <div className="footer-fluid">
        <div className="footer-fluid-logo">
          <Image src={darkLogo} alt="navbarLogo" priority />
        </div>
        <div className="footer-fluid-info">
          <div className="info-left">
            <div className={`info-left-caption ${modeStatus ? "dark" : ""}`}>
              <h4>Haberler</h4>
              <h4>Foto Galeri</h4>
              <h4>Video Galeri</h4>
            </div>
            <div className="info-left-categories">
              <div className="left-cat">
                <ul className="left-cat-list">
                  <li>
                    <Link href="/video">Gündem</Link>
                  </li>
                  <li>Spor</li>
                  <li>Siyaset</li>
                  <li>Eğitim</li>
                  <li>Ekonomi</li>
                  <li>Kültür-Sanat</li>
                  <li>Magazin</li>
                  <li>Asayiş</li>
                  <li>Röportajlar</li>
                  <li>Yaşam</li>
                </ul>
              </div>
              <div className="mid-cat">
                <ul className="mid-cat-list">
                  <li>Yaşam</li>
                  <li>Siyaset</li>
                  <li>Ekonomi</li>
                  <li>Magazin</li>
                  <li>Röportajlar</li>
                  <li>Spor</li>
                  <li>Eğitim</li>
                  <li>Kültür-Sanat</li>
                  <li>Asayiş</li>
                  <li>Yaşam</li>
                </ul>
              </div>
              <div className="right-cat">
                <ul className="right-cat-list">
                  <li>Yaşam</li>
                  <li>Siyaset</li>
                  <li>Ekonomi</li>
                  <li>Magazin</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="info-right">
            <div className="info-right-icons">
              <p className="follow">BİZİ TAKİP EDİN</p>
              <div className="media">
                <Link href="/spor">
                  <BsWhatsapp />
                </Link>
                <Link href="/video">
                  <BsFacebook />
                </Link>
                <Link href="/yasam">
                  <BsTwitter />
                </Link>
                <Link href="/saglik">
                  <BsInstagram />
                </Link>
              </div>
              <p className="load">UYGULAMALARIMIZI İNDİREBİLİRSİNİZ</p>
            </div>
            <div className="logos">
              <div className="apple">
                <Image src={apple} alt="navbarLogo" priority />
              </div>
              <div className="google">
                <Image src={google} alt="navbarLogo" priority />
              </div>
            </div>
          </div>
        </div>
        <ul className="footer-fluid-kunye">
          {kunyeArray.map((item) => (
            <KunyeItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
      <div className={`footer-bottom ${modeStatus ? "dark" : ""}`}>
        <h6>© 2023 ADİN GRUP MEDYA REKLAM. Tüm Hakları Saklıdır</h6>
      </div>
    </div>
  );
};

export default Footer;
