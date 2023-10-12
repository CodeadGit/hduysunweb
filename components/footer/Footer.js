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
import { useAdsContext } from "@/context/AdsContext";

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
  const { mode } = useThemeContext();

  const modeStatus = mode === "dark";
  const { storyModall } = useAdsContext();

  return (
    <div
      className={`footer ${storyModall ? "none" : ""} ${
        modeStatus ? "dark" : ""
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
              <Link href="/foto-galeri">Foto Galeri</Link>
              <Link href="/video-galeri">Video Galeri</Link>
            </div>
            <div className="info-left-categories">
              <div className="left-cat">
                <ul className="left-cat-list">
                  <li>
                    <Link href="/gundem">Gündem</Link>
                  </li>
                  <li>
                    <Link href="/spor">Spor</Link>
                  </li>
                  <li>
                    <Link href="/siyaset">Siyaset</Link>
                  </li>
                  <li>
                    <Link href="/egitim">Eğitim</Link>
                  </li>
                  <li>
                    <Link href="/ekonomi"> Ekonomi</Link>
                  </li>
                  <li>
                    <Link href="/kultursanat"> Kültür-Sanat</Link>
                  </li>
                  <li>
                    <Link href="/magazin"> Magazin</Link>
                  </li>
                  <li>
                    <Link href="asayis"> Asayiş</Link>
                  </li>
                  {/* <li>Röportajlar</li> */}
                  <li>
                    <Link href="yasam">Yaşam</Link>
                  </li>
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
