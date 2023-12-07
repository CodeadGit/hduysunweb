"use client";
import FooterSidebar from "./FooterSidebar";
import "./kunye.scss";
import { useModeContext } from "@/context/ModeContext";
const Kunye = () => {
  const { mode } = useModeContext();
  const modeStatus = mode === "dark";

  return (
    <div className="all-page">
      <div className="sidebar-fix">
        <FooterSidebar />
      </div>

      <div className={`text-part ${modeStatus ? "dark" : ""}`}>

        <div className="kunye-table">
          <table>
            <tr>
              <th>Künye Bilgileri</th>
              <th></th>
            </tr>
            <tr>
              <td>Ticaret Unvanı</td>
              <td>
                ADİN GRUP MEDYA REKLAM İNŞAAT TAAHHÜT SANAYİ TİC. LTD. ŞTİ.
              </td>
            </tr>
            <tr>
              <td>Tüzel Kişi Temsilcisi</td>
              <td>METİN ALTUNDAL</td>
            </tr>
            <tr>
              <td>Yayıncı</td>
              <td>
                ADİN GRUP MEDYA REKLAM İNŞAAT TAAHHÜT SANAYİ TİC. LTD. ŞTİ.
              </td>
            </tr>
            <tr>
              <td>Sorumlu Yazı İşleri Müdürü</td>
              <td>MUSA YEŞİLDAĞ</td>
            </tr>
            <tr>
              <td>Yönetim Yeri</td>
              <td>
                Üçevler Mah. Burçak 220. Sok. Vizyon Plaza No:6/11 16120
                Nilüfer/ Bursa
              </td>
            </tr>

            <tr>
              <td>İletişim Telefonu</td>
              <td>0 (546) 165 30 30</td>
            </tr>

            <tr>
              <td>Kurumsal E-Posta</td>
              <td>iletisim@herkesduysun.com</td>
            </tr>

            <tr>
              <td>Ulusal Elektronik Tebligat Sistemi Adresi</td>
              <td>25818-19975-45756</td>
            </tr>

            <tr>
              <td>Yer Sağlayıcı Ticaret Unvanı</td>
              <td>TURKTİCARET.NET YAZILIM HİZMETLERİ SANAYİ VE TİCARET.A.Ş.</td>
            </tr>

            <tr>
              <td>Yer Sağlayıcı Adresi</td>
              <td>
                Uludağ Üniversitesi Görükle Kampüsü Ar/Ge Binası Yanı Ek Bina
                Nilüfer - BURSA
              </td>
            </tr>
          </table>
        </div>

        <div className="header">Künye</div>
        <div className="line"></div>

        <div className="künye-text">
          <p>
            <strong> İMTİYAZ SAHİBİ:</strong>
          </p>
          <p></p>
          ADİN GRUP MEDYA REKLAM
          <p></p>
          İNŞAAT TAAHHÜT SANAYİ TİC. LTD. ŞTİ. Adına
          <p>
            <strong> YÖNETİM KURULU BAŞKANI</strong>
          </p>
          <p></p>
          METİN ALTUNDAL
          <p>
            <strong> İCRA KURULU BAŞKANI:</strong>
          </p>
          <p></p>
          TUĞBA BEDİRHANOĞLU
          <p></p>
          -----------------------------
          <p>
            <strong> GENEL YAYIN YÖNETMENİ:</strong>
          </p>
          <p></p>
          MESUT DEMİR
          <p></p>
          -----------------------------
          <p>
            <strong> GENEL İDARE MÜDÜRÜ:</strong>
          </p>
          <p></p>
          SEVİL ŞARU
          <p>
            <strong> SORUMLU YAZI İŞLERİ MÜDÜRÜ:</strong>
          </p>
          <p></p>
          MUSA YEŞİLDAĞ
          <p></p>
          YAZI İŞLERİ MÜDÜRÜ:
          <p></p>
          VAZİF İHTİYAR
          <p></p>
          -----------------------------
          <p>
            <strong> MUHABİRLER:</strong>
          </p>
          <p></p>
          ERSEL NALBANT
          <p></p>
          MUHAMMED TAHA ÇELİKBAŞ
          <p></p>
          AHMET GÜNAY
          <p></p>
          CÜNEYT YAMAN
          <p></p>
          EMİNE PINAR TURAN KAHRAMAN
          <p></p>
          ASLI YEŞİLYURT
          <p></p>
          ARDA ŞARU
          <p>
            <strong> İNTERNET EDİTÖRLERİ:</strong>
          </p>
          <p></p>
          GÜLSÜM YILDIRIM
          <p></p>
          ESMANUR GÜLBAHAR
          <p></p>
          OĞUZHAN OSMAN BİLGİN
          <p></p>
          ZÜBEYDE ÖZLÜ
          <p></p>
          SEVDE NUR EROL
          <p></p>
          MELİH KAYACI
          <p></p>
          DUYGU TAŞKIRAN
          <p></p>
          RABİA ÖZKAN
          <p></p>
          ÖZNUR KARABULUT
          <p>
            <strong> SOSYAL MEDYA EDİTÖRLERİ</strong>
          </p>
          <p></p>
          ERDAL TOPRAK DOĞAN
          <p></p>
          REYHAN ÖZBAKIR
          <p></p>
          MEHMET CAN USLU
          <p></p>
          SERGEN DURAK
          <p></p>
          HATİCE ÇAPAR DEMİR
          <p></p>
          -----------------------------
          <p>
            <strong> KÖŞE YAZARLARI:</strong>
          </p>
          <p></p>
          RÜSTEM PEHLİVANLAR
          <p></p>
          ÖMER DEMİR
          <p></p>
          -----------------------------
          <p>
            <strong> HABER AJANSLARI</strong>
          </p>
          <p></p>
          İGFA, AA, DHA, İHA
          <p></p>
          ------------------------------
          <p>
            <strong> YAYIN KURULU:</strong>
          </p>
          <p></p>
          METİN ALTUNDAL
          <p></p>
          TUĞBA BEDİRHANOĞLU
          <p></p>
          MESUT DEMİR
          <p></p>
          ALİ GÜL
          <p></p>
          RÜSTEM PEHLİVANLAR
          <p></p>
          VAZİF İHTİYAR
          <p></p>
          -----------------------------
          <p>
            <strong> YAZILIM VE SUNUCU HİZMETLERİ:</strong>
          </p>
          <p></p>
          TURKTİCARET.NET YAZILIM HİZMETLERİ SANAYİ VE TİCARET.A.Ş.
          <p></p>
          Uludağ Üniversitesi Görükle Kampüsü Ar/Ge Binası Yanı
          <p></p>
          Ek Bina Posta Kodu : 16120
          <p></p>
          Nilüfer - BURSA
          <p></p>
          Yetkili İletişim: 0224 224 86 40
          <p></p>
          destek@haberyazilimi.com
          <p></p>
          -----------------------------
          <p>
            <strong> HUKUK DANIŞMANI:</strong>
          </p>
          <p></p>
          Av. Barış Aslan, Av. Burcu Aslan, Av. Mustafa Arslan
          <p></p>
          -----------------------------
          <p>
            <strong> GENEL MERKEZ:</strong>
          </p>
          <p></p>
          Üçevler Mah. Burçak 220. Sok. Vizyon Plaza No:6/11 16120 Nilüfer/
          Bursa
          <p>
            <strong> EGE BÖLGE TEMSİLCİLİĞİ:</strong>
          </p>
          <p></p>
          Altıntop Mah. 1607/2 Sok. No: 6 D. 5 Merkezefendi / Denizli
          <p>
            <strong> AKDENİZ BÖLGE TEMSİLCİLİĞİ:</strong>
          </p>
          <p></p>
          Hacı Osmanlı, Akyar Cd. No:104, 80020 Osmaniye Merkez / Osmaniye
          <p>
            <strong> İÇ ANADOLU BÖLGE TEMSİLCİLİĞİ:</strong>
          </p>
          <p></p>
          Atatürk Cad. Basın Sitesi No:18 Sivas
          <p>
            <strong> KARADENİZ BÖLGE TEMSİLCİLİĞİ:</strong>
          </p>
          <p></p>
          Kale Mah. Hacı Hatun Sokak. Ziya Paşa Geçidi Fatih Temiz İş Hanı, D:C
          Blok /3, 55100 İlkadım / Samsun
          <p>
            <strong> DOĞU ANADOLU BÖLGE TEMSİLCİLİĞİ:</strong>
          </p>
          <p></p>
          Yeni Mahalle. Doktor Tevfik Sakallıoğlu Sokak. No: 6 Daire:3 Elazığ
          <p>
            <strong> GÜNEYDOĞU ANADOLU BÖLGE TEMSİLCİLİĞİ:</strong>
          </p>
          <p></p>
          Bahçelievler Mah. 1601 Sok. No: 4 (Turgut Özal Bulv. Sivil Savunma
          Arkası) BATMAN
          <p></p>
          -----------------------------
          <p>
            <strong> TELEFON: </strong>0 (546) 165 30 30
          </p>
          <p>
            <strong>WHATSAPP HABER İHBAR HATTI:</strong>
          </p>
          0 (541) 160 40 40
          <p>
            <strong> E-POSTA:</strong> iletisim@herkesduysun.com
          </p>
          <p>
            <strong> REKLAM: </strong> reklam@herkesduysun.com
          </p>
          <p>
            <strong> HABER:</strong> haber@herkesduysun.com
          </p>
          <p></p>
          okurtemsilcisi@herkesduysun.com
          <p></p>
          Herkesduysun.com, Adin Grup Medya Reklam İnşaat Taahhüt Sanayi Tic.
          LTD. ŞTİ. kuruluşudur.
          <p></p>
          Bu sitenin tüm hakları saklıdır. Herkesduysun.com, İGF Haber Ajansı
          (İGFA), Anadolu Ajansı (AA), İhlas Haber Ajansı (İHA) ve Demirören
          Haber Ajansı (DHA) abonesidir.
          <p></p>
          Haber sitemiz 5846 sayılı Fikir ve Sanat Eserleri Kanunu'na uygun
          olarak yayın yapmaktadır.
          <p>
            {" "}
            Bu sitede yayınlanan haberler ve makaleler kaynak gösterilerek
            yayınlanabilir. Yayınlanan yazı ve yorumlardan yazan kişiler
            sorumludur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kunye;
