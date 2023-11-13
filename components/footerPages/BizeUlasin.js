"use client";
import "./bizeUlasin.scss";
import FooterSidebar from "./footerSidebar";
import { useThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

const BizeUlasin = () => {
  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  return (
    <div className="all-page">
      <div className="sidebar-fix">
        <FooterSidebar />
      </div>
      <div className={`text-part ${modeStatus ? "dark" : ""}`}>
        <div className="header">Bize Ulaşın</div>
        <div className="line"></div>

        <div className="text">
          <p className="text-content">
            <strong> GENEL MERKEZ:</strong>
          </p>

          <p className="text-content">
            {" "}
            Üçevler Mah. Burçak 220. Sok. Vizyon Plaza No:6/11 16120 Nilüfer/
            Bursa
          </p>

          <p className="text-content">
            <strong> EGE BÖLGE TEMSİLCİLİĞİ:</strong>
          </p>

          <p className="text-content"> Altıntop Mah. 1607/2 Sok. No: 6 D. 5 Merkezefendi / Denizli</p>

          <p className="text-content">
            <strong> AKDENİZ BÖLGE TEMSİLCİLİĞİ:</strong>
          </p>

          <p className="text-content">
            {" "}
            Hacı Osmanlı, Akyar Cd. No:104, 80020 Osmaniye Merkez / Osmaniye
          </p>

          <p className="text-content">
            <strong> İÇ ANADOLU BÖLGE TEMSİLCİLİĞİ:</strong>
          </p>

          <p className="text-content"> Atatürk Cad. Basın Sitesi No:18 Sivas</p>

          <p className="text-content">
            <strong> KARADENİZ BÖLGE TEMSİLCİLİĞİ:</strong>
          </p>

          <p className="text-content">
            Kale Mah. Hacı Hatun Sokak. Ziya Paşa Geçidi Fatih Temiz İş Hanı,
            D:C Blok /3, 55100 İlkadım / Samsun
          </p>

          <p className="text-content">
            <strong> DOĞU ANADOLU BÖLGE TEMSİLCİLİĞİ:</strong>
          </p>

          <p className="text-content">
            Yeni Mahalle. Doktor Tevfik Sakallıoğlu Sokak. No: 6 Daire:3 Elazığ
          </p>

          <p className="text-content">
            <strong> GÜNEYDOĞU ANADOLU BÖLGE TEMSİLCİLİĞİ:</strong>
          </p>

          <p className="text-content">
            Bahçelievler Mah. 1601 Sok. No: 4 (Turgut Özal Bulv. Sivil Savunma
            Arkası) BATMAN
          </p>

          <p className="text-content">
            <strong>
              {" "}
              ---------------------------------------------------------------------------------------
            </strong>
          </p>

          <p className="text-content">
            {" "}
            <strong>TELEFON:</strong> 0 (546) 165 30 30
            <a></a>
          </p>

          <p className="text-content">
            <strong> WHATSAPP İHBAR HATTI:</strong> 0 (541) 160 40 40
          </p>

          <p className="text-content">
            <strong> E-POSTA:</strong>iletisim@herkesduysun.com{" "}
          </p>

          <p className="text-content">
            <strong> HABER İHBAR E-POSTA:</strong> iletisim@herkesduysun.com
          </p>

          <p className="text-content">
            <strong> REKLAM:</strong> reklam@herkesduysun.com
          </p>

          <p className="text-content">
            <strong> FACEBOOK:</strong>
            <Link
              className={`text-content-link ${modeStatus ? "dark" : ""}`}
              href="https://www.facebook.com/herkesduysun"
            >
              https://www.facebook.com/herkesduysun
            </Link>
          </p>

          <p className="text-content">
            <strong> TWİTTER:</strong>{" "}
            <Link
              className={`text-content-link ${modeStatus ? "dark" : ""}`}
              href="https://twitter.com/herkesduysuncom"
            >
              https://twitter.com/herkesduysuncom
            </Link>
          </p>

          <p className="text-content">
            <strong> İNSTAGRAM:</strong>{" "}
            <Link
              className={`text-content-link ${modeStatus ? "dark" : ""}`}
              href="https://www.instagram.com/herkesduysuncom/"
            >
              https://www.instagram.com/herkesduysuncom
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BizeUlasin;
