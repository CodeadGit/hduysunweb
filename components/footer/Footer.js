"use client";
import React from "react";
import "./footer.scss";
import Link from "next/link";
import darkLogo from "./newNormalLogo.svg";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import KunyeItem from "./KunyeItem";
import { useThemeContext } from "@/context/ThemeContext";
import { useAdsContext } from "@/context/AdsContext";
import { useFetchAssetsContext } from "@/context/FetchAssetsContext";
import Image from "next/image";
import { useCategoriesContext } from "@/context/CategoriesContext";

const kunyeArray = [
  {
    id: 1,
    caption: "Künye",
    url: "/kunye",
  },
  {
    id: 2,
    caption: "Çerez Politikası",
    url: "/cerez-politikasi",
  },
  {
    id: 3,
    caption: "Gizlilik Politikası",
    url: "/gizlilik-politikasi",
  },
  {
    id: 4,
    caption: "Veri Politikası",
    url: "/veri-politikasi",
  },
  {
    id: 5,
    caption: "Kullanım Şartnamesi",
    url: "/kullanim-sartnamesi",
  },
  {
    id: 6,
    caption: "İletişim",
    url: "/iletisim",
  },
  {
    id: 7,
    caption: "KVKK",
    url: "kvkk",
  },
];

const Footer = () => {
  const { mode } = useThemeContext();
  const { categories } = useCategoriesContext();

  const modeStatus = mode === "dark";
  const { images } = useFetchAssetsContext();
  const { storyModall } = useAdsContext();

  return (
    <div
      className={`footer ${storyModall ? "none" : ""} ${
        modeStatus ? "dark" : ""
      }`}
    >
      <div className="footer-fluid">
        <div className="footer-fluid-logo">
          <Image width={234} src={darkLogo} alt="navbarLogo" priority />
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
                {categories.slice(0, 6).map((item,idx) => {
                  return (
                    <ul className="left-cat-list">
                      <li>
                        <Link key={idx} href={`${item.collection}`}>{item.label}</Link>
                      </li>
                    </ul>
                  );
                })}
              </div>
              <div className="mid-cat">
                {categories.slice(7, 13).map((item,idx) => {
                  return (
                    <ul className="mid-cat-list">
                      <li>
                        <Link key={idx} href={`${item.collection}`}>{item.label}</Link>
                      </li>
                    </ul>
                  );
                })}
              </div>
              <div className="right-cat">
                 {categories?.slice(13, 19)?.map((item,idx) => {
                  return (
                    <ul className="right-cat-list">
                      <li>
                        <Link key={idx} href={`${item.collection}`}>{item.label}</Link>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="info-right">
            <div className="info-right-icons">
              <p className="follow">BİZİ TAKİP EDİN</p>
              <div className="media">
                <Link target="_blank" href="https://wa.me/905411604040">
                  <BsWhatsapp />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/herkesduysun"
                >
                  <BsFacebook />
                </Link>
                <Link
                  target="_blank"
                  href="https://twitter.com/herkesduysuncom"
                >
                  <BsTwitter />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/herkesduysuncom"
                >
                  <BsInstagram />
                </Link>
              </div>
              <p className="load">UYGULAMALARIMIZI İNDİREBİLİRSİNİZ</p>
            </div>
            <div className="logos">
              <div className="apple">
                <a href="https://apps.apple.com/tr/app/">
                  <img src={images[5]} alt="navbarLogo" priority />
                </a>
              </div>
              <div className="google">
                <a href="https://play.google.com/store/games?device=windows">
                  <img src={images[34]} alt="navbarLogo" priority />
                </a>
              </div>
            </div>
          </div>
        </div>
        <ul className="footer-fluid-kunye">
          {kunyeArray.map((item, idx) => (
            <KunyeItem key={idx} {...item} item={item} />
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
