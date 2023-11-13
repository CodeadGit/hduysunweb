"use client";
import Link from "next/link";
import "./footerSidebar.scss";
import { useThemeContext } from "@/context/ThemeContext";
const FooterSidebar = () => {
  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";
  return (
    <div className="sidenav">
      <Link className={`text-a ${modeStatus ? "dark" : ""}`} href="/kunye">
        Künye
      </Link>
      <Link
        className={`text-a ${modeStatus ? "dark" : ""}`}
        href="/cerez-politikasi"
      >
        Çerez Politikası
      </Link>
      <Link
        className={`text-a ${modeStatus ? "dark" : ""}`}
        href="/gizlilik-politikasi"
      >
        Gizlilik Politikası
      </Link>
      <Link
        className={`text-a ${modeStatus ? "dark" : ""}`}
        href="/veri-politikasi"
      >
        Veri Politikası
      </Link>
      <Link
        className={`text-a ${modeStatus ? "dark" : ""}`}
        href="/kullanim-sartnamesi"
      >
        Kullanım Şartnamesi
      </Link>
      <Link
        className={`text-a ${modeStatus ? "dark" : ""}`}
        href="/bize-ulasin"
      >
        Bize Ulaşın
      </Link>
      <Link className={`text-a ${modeStatus ? "dark" : ""}`} href="/kvkk">
        KVKK
      </Link>
    </div>
  );
};

export default FooterSidebar;
