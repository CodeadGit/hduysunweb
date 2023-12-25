"use client";
import dynamic from "next/dynamic";
import "./gizlilikPolitikasi.scss";
//import FooterSidebar from "./FooterSidebar";
import { useModeContext } from "@/context/ModeContext";

const FooterSidebar = dynamic(
  () => import("./FooterSidebar"),
  { ssr: false }
);
const GizlilikPolitikasi = () => {
  const { mode } = useModeContext();
  const modeStatus = mode === "dark";

  return (
    <div className="all-page">
      <div className="sidebar-fix">
        <FooterSidebar />
      </div>
      <div className={`text-part ${modeStatus ? "dark" : ""}`}>
        <div className="header">GİZLİLİK POLİTİKASI</div>
        <div className="line"></div>

        <div className="text">
          <p> Gizlilik Politikası</p>

          <p>
            {" "}
            Herkesduysun.com, sisteme bağlanan kullanıcılarının IP Adreslerini
            web sitesi kayıtlarında bağlantı tarihi, saati ve sistemden istenen
            adres ve/veya sayfalar bazına kaydetmektedir. Bu bilgiler gerek
            sistem güvenliği, gerekse olası kullanıcı problemlerinin çözümünde
            anahtar bilgiler olup, kullanıcı kişisel bilgileriyle ilişkili
            değildir.
          </p>

          <p>
            {" "}
            Kullanıcının iletişim bilgileri gerektiği zaman kullanıcıya
            ulaşmamızı sağlar. Üyeliğin onaylanması, ve üyelikle ilgili bilgi
            değişikliklerinin onaylanması e-posta/e-mail ile gönderilen mesajlar
            sayesinde gerçekleşir. Herkesduysun.com, kullanım şartları ile
            tespit ettiği sınırları aşmamak şartıyla, üyelerine gerekli olduğu
            zaman e-posta/e-mail ile mesaj gönderir.
          </p>

          <p>
            {" "}
            Genel bir ilke olarak, kullanıcıların kişisel bilgileri tarafımızca
            üçüncü şahıslara veya kuruluşlara verilmemektedir. Örneğin, bize
            güvenerek vermiş olduğunuz isim, soy isim, e-posta/e-mail
            adresleriniz gibi bilgiler başka firmalara satılmamaktadır. Ancak,
            kullanıcılardan kişisel bilgilerin istendiği sistemimizin bazı
            bölümlerinde, bu bilgilerin nerelerde ve ne amaçlar ile
            kullanılacağı açıkça belirtilmiştir.
          </p>

          <p>
            {" "}
            Herkesduysun.com sayfalara verdiğiniz kişisel bilgiler, üçüncü şahıs
            ve kuruluşlar tarafından kullanılabilmektedir. Bu gibi durumlarda,
            kişisel bilgilerinizi vermek tamamıyla gönüllü olarak yaptığınız bir
            davranış olur ve İzlesene hiçbir şekilde sorumlu tutulamaz.
          </p>

          <p>
            {" "}
            Kullanıcılarımızın kişisel hakları, bizim için de kendileri için
            oldukları kadar önemlidir. Ancak, var olan yasalar çerçevesinde,
            kanun sağlayıcı devlet organları yasadışı içerik tespit edip, bizden
            kullanıcı bilgilerini istediği takdirde, gerekli kişisel bilgiler,
            tarafımızca uygun görüldüğü sürece kanun sağlayıcı devlet
            organlarına ve adalete teslim edilebilir.
          </p>

          <p>
            {" "}
            Kişisel bilgilerinize her zaman ulaşabilir ve onları
            güncelleyebilirsiniz. Bunların içerisinde, e-posta/e-mail adresiniz
            ve şifreniz mevcuttur.
          </p>

          <p>
            {" "}
            Herkesduysun.com sistemleri güvenlik için gerekli tedbirleri almaya
            özen göstermiştir. Bütün kullanıcı hesapları şifre ile
            korunmaktadır. Kullanıcılarımızın, şifrelerini unutması durumunda
            e-posta/e-mail adreslerine yeni şifreleri gönderilecektir. Güvenlik
            nedeniyle, şifreler kullanıcının kayıtlı olduğu e-posta/e-mail
            adresi dışında başka bir adrese bildirilmez.
          </p>

          <p>
            {" "}
            Herkesduysun.com olarak, hem sitemizin hem de üyelerimizin
            güvenliğine büyük önem vermekteyiz. Bu nedenle, sistemimizde düzenli
            olarak güvenlik testleri yapmakta ve herhangi bir güvenlik açığına
            izin vermemekteyiz. Buna rağmen, zaman zaman üyelerimizden,
            üyeliklerine korsan olarak girildiğine ilişkin şikayetler
            almaktayız. Üyelikler, bizim bütün güvenlik önlemlerimize rağmen,
            bazen kötü niyetli kişiler tarafından ele geçirilebilmektedir.
            Üyeliklerinizi, hatta bilgisayarınızdaki tüm bilgileri korumanızı
            sağlayacak aşağıdaki güvenlik önlemlerini uyguladığınızda, güvenlik
            konusunda herhangi bir sorunla karşılaşmazsınız.
          </p>

          <p>
            {" "}
            Bilgisayarınızda sık sık virüs taraması yapmalı, anti-virüs
            programınızı belirli aralıklarla güncellemeli, MSN ya da
            e-posta/e-mail yoluyla tanımadığınız kişilerden gelen dosyaları
            açmamalısınız.
          </p>

          <p>
            {" "}
            Şifrelerinizi, harf ve rakamlardan oluşacak şekilde, tahmin edilmesi
            zor kombinasyonlardan oluşturmalısınız. Doğum tarihi, isim ve doğum
            tarihi, sıralı harf ya da rakamlar, tuttuğunuz takımın ismi gibi
            tahmin edilebilir şifreler, kolaylıkla ele geçirilebilir.
          </p>

          <p>
            {" "}
            E-posta/e-mail sağlayıcınız dışında (yahoo, hotmail, gmail, vb),
            kurumsal olmayan kişisel sitelere, bloglara ya da tanımadığınız
            alanlara, e-posta/e-mail adresinizi ve şifrenizi kesinlikle
            girmemelisiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GizlilikPolitikasi;
