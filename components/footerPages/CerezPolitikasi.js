"use client"
import { useModeContext } from "@/context/ModeContext";
import "./cerezPolitikasi.scss";
//import FooterSidebar from "./FooterSidebar";
import dynamic from "next/dynamic";

const FooterSidebar = dynamic(
  () => import("./FooterSidebar"),
  { ssr: false }
);
const CerezPolitikasi = () => {
    const { mode } = useModeContext();
    const modeStatus = mode === "dark";
  
    return (
      <div className="all-page">
        <div className="sidebar-fix">
          <FooterSidebar />
        </div>
        <div className={`text-part ${modeStatus ? "dark" : ""}`}>
          <div className="header">ÇEREZ POLİTİKASI</div>
          <div className="line"></div>
  
          <div className="text">
            <p>Çerez Politikası </p>
  
            <p>
              Çerez Politikamız, Gizlilik Politikamızın bir parçasını oluşturur.
            </p>
  
            <p>Çerez (Cookie) Nedir?</p>
  
            <p>
              {" "}
              Günümüzde neredeyse her web sitesi çerez kullanmaktadır. Size daha
              iyi, hızlı ve güvenli bir deneyim sağlamak için, çoğu internet
              sitesi gibi biz de çerezler kullanıyoruz. Çerez, bir web sitesini
              ziyaret ettiğinizde cihazınıza (örneğin; bilgisayar veya cep
              telefonu) depolanan küçük bir metin dosyasıdır. Çerezler, bir web
              sitesini ilk ziyaretiniz sırasında tarayıcınız aracılığıyla
              cihazınıza depolanabilirler. Aynı siteyi aynı cihazla tekrar ziyaret
              ettiğinizde tarayıcınız cihazınızda site adına kayıtlı bir çerez
              olup olmadığını kontrol eder. Eğer kayıt var ise, kaydın içindeki
              veriyi ziyaret etmekte olduğunuz web sitesine iletir. Bu sayede web
              sitesi, sizin siteyi daha önce ziyaret ettiğinizi anlar ve size
              iletilecek içeriği de ona göre tayin eder.
            </p>
            <p> Çerezler Neden Kullanılır?</p>
  
            <p>
              {" "}
              Bazı çerezler, daha önceki ziyaretlerinizde kullandığınız
              tercihlerin web sitesi tarafından hatırlanmasını sağlayarak, sonraki
              ziyaretlerinizin çok daha kullanıcı dostu ve kişiselleştirilmiş bir
              deneyim sunmasını sağlar.
            </p>
  
            <p>
              {" "}
              Ayrıca, web sitesinde bulunan üçüncü taraflara ait linkler, bu
              üçüncü taraflara ait gizlilik politikalarına tabi olmakla birlikte,
              gizlilik uygulamalarına ait sorumluluk Herkesduysun.net’e ait
              olmamaktadır ve bu bağlamda ilgili link kapsamındaki site ziyaret
              edildiğinde siteye ait gizlilik politikasının okunması
              önerilmektedir.
            </p>
  
            <p> Çerez Türleri</p>
  
            <p>
              {" "}
              Ana kullanım amacı kullanıcılara kolaylık sağlamak olan çerezler,
              temel olarak 4 ana grupta toplanmaktadır:
            </p>
            <p>
              {" "}
              Oturum Çerezleri: Internet sayfaları arasında bilgi taşınması ve
              kullanıcı tarafından girilen bilgilerin sistemsel olarak
              hatırlanması gibi çeşitli özelliklerden faydalanmaya olanak sağlayan
              çerezlerdir ve internet sitesine ait fonksiyonların düzgün bir
              şekilde işleyebilmesi için gereklidir.
            </p>
  
            <p>
              {" "}
              Performans Çerezleri: Sayfaların ziyaret edilme frekansı, olası hata
              iletileri, kullanıcıların ilgili sayfada harcadıkları toplam zaman
              ile birlikte siteyi kullanım desenleri konularında bilgi toplayan
              çerezlerdir ve internet sitesinin performansını arttırma amacıyla
              kullanılmaktadır.
            </p>
            <p>
              {" "}
              Fonksiyonel Çerezler: Kullanıcıya kolaylık sağlanması amacıyla
              önceden seçili olan seçeneklerin hatırlatılmasını sağlayan
              çerezlerdir ve internet sitesi kapsamında kullanıcılara gelişmiş
              Internet özellikleri sağlanmasını hedeflemektedir.
            </p>
  
            <p>
              {" "}
              Reklam ve Üçüncü Taraf Çerezleri: Üçüncü parti tedarikçilere ait
              çerezlerdir ve internet sitesindeki bazı fonksiyonların kullanımına
              ve reklam takibinin yapılmasına olanak sağlamaktadır.
            </p>
  
            <p> Çerezlerin Kullanım Amaçları</p>
  
            <p>
              {" "}
              Herkesduysun.com tarafından kullanılmakta olan çerezlere ait
              kullanım amaçları aşağıdaki gibidir:
            </p>
  
            <p>
              {" "}
              Güvenlik amaçlı kullanımlar: Sistemlerinin idaresi ve güvenliğinin
              sağlanması amacıyla, bu sitedeki fonksiyonlardan yararlanmayı
              sağlayan veyahut düzensiz davranışları tespit eden çerezler
              kullanabilmektedir.
            </p>
  
            <p>
              {" "}
              İşlevselliğe yönelik kullanımlar: Sistemlerinin kullanımını
              kolaylaştırmak ve kullanıcı özelinde kullanım özellikleri sağlamak
              amacıyla, kullanıcıların bilgilerini ve geçmiş seçimlerini
              hatırlatan çerezler kullanabilmektedir.
            </p>
  
            <p>
              {" "}
              Performansa yönelik kullanımlar: Sistemlerinin performansının
              artırılması ve ölçülmesi amacıyla, gönderilen iletilerle olan
              etkileşimi ve kullanıcı davranışlarını değerlendiren ve analiz eden
              çerezler kullanabilmektedir.
            </p>
  
            <p>
              {" "}
              Reklam amaçlı kullanımlar: Kendine veya üçüncü taraflara ait
              sistemlerin üzerinden kullanıcıların ilgi alanları kapsamında reklam
              ve benzeri içeriklerin iletilmesi amacıyla, bu reklamların
              etkinliğini ölçen veya tıklanma durumunu analiz eden çerezler
              kullanabilmektedir.
            </p>
  
            <p> Reklam Amaçlı Çerez Kullanımımız</p>
  
            <p>
              {" "}
              Herkesduysun.com, Google ve İGF Reklam Ajansı reklam sistemi
              kullanmaktadır.
            </p>
  
            <p> Çerezleri Kontrol Etme ve Silme</p>
  
            <p>
              {" "}
              Çerezlerin kullanımına ilişkin tercihlerinizi değiştirmek ya da
              çerezleri engellemek veya silmek için tarayıcınızın ayarlarını
              değiştirmeniz yeterlidir. Birçok tarayıcı çerezleri kontrol
              edebilmeniz için size çerezleri kabul etme veya reddetme, yalnızca
              belirli türdeki çerezleri kabul etme ya da bir web sitesi cihazınıza
              çerez depolamayı talep ettiğinde tarayıcı tarafından uyarılma
              seçeneği sunar. Aynı zamanda daha önce tarayıcınıza kaydedilmiş
              çerezlerin silinmesi de mümkündür. Çerezleri kontrol edilmesine veya
              silinmesine ilişkin işlemler kullandığınız tarayıcıya göre
              değişebilmektedir. Bazı popüler tarayıcıların çerezlere izin verme
              ya da çerezleri engelleme veya silme talimatlarına aşağıdaki
              linklerden ulaşılması mümkündür. Çerez kullanım seçiminin
              değiştirilmesine ait yöntem, tarayıcı tipine bağlı olarak değişmekte
              olup, ilgili hizmet sağlayıcıdan dilendiği zaman
              öğrenilebilmektedir.
            </p>
          </div>
        </div>
      </div>
    );
}

export default CerezPolitikasi;