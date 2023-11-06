"use client";
import React, { useEffect } from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import notFound from "../homePage/assets/notfound.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories, categoryConvertor } from "@/context/utils";
import { useThemeContext } from "@/context/ThemeContext";

const NotFound = () => {

  const { hideAds } = useThemeContext();

  const pathname = usePathname();

  const category = pathname.substring(1).split("/")[0];

  const isExisting = categories.includes(category);

  const imageStyle = {
    margin: "3rem auto",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#333",
    fontSize: "44px",
    fontWeight: "bold",
  };

  const pStyle = {
    textAlign: "center",
    margin: "2rem 0 3rem",
    fontSize: "24px",
    fontWeight: "400",
  };

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#085587",
    width: "225px",
    height: "60px",
    margin: "0 auto",
    color: "#fff",
    borderRadius: "4px",
    fontSize: "20px",
  };

  const categoryBreadcrumb = isExisting ? [
    {
      id: 1,
      title: categoryConvertor[category],
      link: `/${category}`,
    },
    {
      id: 2,
      title: "Sayfa Bulunamadı",
      link: "/",
    },
  ] : [
    {
      id: 1,
      title: "Sayfa Bulunamadı",
      link: "/",
    },
  ];

  useEffect(() => {
    hideAds();
  }, []);
  
  return (
    <div>
      <Breadcrumb links={categoryBreadcrumb} />
      <Image src={notFound} alt="Page Not Found" style={imageStyle} />
      <h1 style={headingStyle}>Sayfa Bulunamadı</h1>
      <p style={pStyle}>
        Üzgünüz, bu sayfayı artık görüntüleyemiyoruz, <br />
        ama sizi her zaman aramızda görmek istiyoruz.
      </p>
      <Link href="/" style={linkStyle}>
        Ana Sayfa
      </Link>
    </div>
  );
};

export default NotFound;
