"use client";
import "./kullanimSartnamesi.scss";
import FooterSidebar from "./FooterSidebar";
import { useThemeContext } from "@/context/ThemeContext";
const KullanimSartnamesi = () => {
  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  return (
    <div className="all-page">
      <div className="sidebar-fix">
        <FooterSidebar />
      </div>

      <div className={`text-part ${modeStatus ? "dark" : ""}`}>
        <div className="header">KULLANIM ŞARTNAMESİ</div>
        <div className="line"></div>

        <div className="text">
          <p>Kullanım Şartnamesi</p>

          <p>
            Herkesduysun.com’a daha kaliteli ve daha eğlenceli hale getirmek
            için aşağıdaki maddeleri uygulama konusunda duyarlılığınızı
            bekliyoruz:
          </p>

          <p>
            Hakaret - Kişisel Bilgiler: İfade özgürlüğünü destekliyoruz. Ancak,
            üyelerimize kendilerini özgür şekilde ifade etme alanı sunarken,
            başkalarını taciz etme ve karalama imkanı vermemekteyiz. Kişi veya
            grupların dinini, dilini, cinsiyetini, ırkını, etnik grubunu,
            milliyetini aşağılayıcı içeriğe izin vermiyoruz. Saldırgan
            davranışlar, tehdit, taciz, özel yaşama saldırı, diğer
            kullanıcıların kişisel bilgilerinin ifşası hoşgörü sınırlarımızın
            dışında. Bu içeriğe sahip içerik hiçbir uyarı olmaksızın
            silinecektir. Gerekli görülürse ilgili üyelik hiçbir uyarı
            olmaksızın kapatılacaktır.
          </p>

          <p>
            Pornografi: Pornografinin hiçbir türüne izin vermemekteyiz. Yetişkin
            cinsel organlarının, cinsel eylemlerin sergilendiği görüntüler veya
            yazılar hoşgörü sınırlarımızın dışındadır. Özellikle çocuk/ergen
            çıplaklığı, pornografisi veya bunları teşvik eden veya andıran
            içerikler konusunda ciddi hassasiyet göstermekteyiz. Bu içeriğe
            sahip içerik hiçbir uyarı olmaksızın silinecektir. Gerekli görülürse
            ilgili üyelik hiçbir uyarı olmaksızın kapatılacaktır.
          </p>

          <p>
            Zararlı Alışkanlıklar: Satışı veya kullanımı reçeteye bağlı her
            türlü ilaç ile uyuşturucu madde kapsamına giren ve bağımlılık
            yaratan bilumum maddelerin tanıtımı, pazarlaması, tavsiyesi
            mahiyetinde içerik hiçbir uyarı olmaksızın silinecektir. Gerekli
            görülürse ilgili üyelik hiçbir uyarı olmaksızın kapatılacaktır.
          </p>

          <p>
            Aşırı Şiddet: Şiddeti yaşamımızdan ve bilgisayarımızdan uzak tutmak
            istiyoruz. Bir insana ya da hayvana acı çektirilmesi, aşağılanması,
            saldırılması hoşgörü sınırlarımızın dışındadır. Dolayısıyla, her
            türlü insan veya hayvan yaralama, öldürme, parçalama, vahşet kısaca
            insan psikolojisi açısından ciddi sakıncalar barındıran her türlü
            yayını içeren içerik hiçbir uyarı olmaksızın silinecektir. Gerekli
            görülürse ilgili üyelik hiçbir uyarı olmaksızın kapatılacaktır.
          </p>

          <p>
            Silahlar ve Patlayıcı Maddeler: Yasadışı silah veya patlayıcı madde
            yapımı, pazarlaması veya kullanımına ilişkin içerik yayınlayan
            içerik hiçbir uyarı olmaksızın silinecektir. Gerekli görülürse
            ilgili üyelik hiçbir uyarı olmaksızın kapatılacaktır.
          </p>

          <p>
            Resmi İçerik: Görüntü alınmasına veya fotoğraf çekilmesine izin
            verilmeyen askeri veya diğer resmi kurumlara ait videolar hiçbir
            uyarı olmaksızın silinecektir. Gerekli görülürse ilgili üyelik
            hiçbir uyarı olmaksızın kapatılacaktır.
          </p>

          <p>
            Fikri ve Sınai Mülkiyet Hakları: Başkalarına ait fikri ve sınai
            mülkiyet haklarının korunması için gerekli özenin gösterilmesi
            gerekmektedir. Bu kapsamda Kullanıcılar sadece fikri ve sınai
            mülkiyet hakları kendisine ait olan (eser sahibi olarak veya
            eserlerin kullanım, yayınlama ve iletim haklarının yasal lisans
            sahibi olarak) İçeriği Siteye yükleyebilir. Eğer Kullanıcı fikri ve
            sınai mülkiyet hakları başkasına (diğer Kullanıcılar dahil) ait olan
            video, fotoğraf, resim, yazı vb. İçeriği, söz konusu hak
            sahiplerinin izni olmaksızın kopyalar, kullanır, yayınlar, dağıtır,
            umuma iletirse, Herkesduysun.net ihlale konu olan İçeriği -hiçbir
            uyarıya veya izne gerek olmaksızın- Siteden kaldırmak ve
            gerektiğinde bu ihlali gerçekleştiren Kullanıcılar in üyeliğine son
            vermek haklarına sahiptir. Üçüncü şahısların fikri ve sınai mülkiyet
            haklarını ihlal eden Kullanıcılar, bu ihlallerden ve bu ihlallerden
            doğan her türlü zarardan üçüncü şahıslara karşı bizzat
            sorumludurlar.
          </p>

          <p>
            Siyaset veya Dini İçerik : Her siyasi görüşe ve dine saygı duyuyor
            ama bunların suistimal edilmesini istemiyoruz. Bu yüzden siyasi veya
            dini içerik yayınlayan hiçbir uyarı olmaksızın silinecektir. Gerekli
            görülürse ilgili üyelik hiçbir uyarı olmaksızın kapatılacaktır.
          </p>

          <p>
            Yasalara Aykırılık: Yasanın suç saydığı fiilleri öven, suça
            özendiren, ticari olarak haksız rekabete neden olan, illegal
            bilgisayar yazılımı tanıtan tüm içerik da hiçbir uyarı olmaksızın
            silinecektir. Gerekli görülürse ilgili üyelik hiçbir uyarı
            olmaksızın kapatılacaktır.
          </p>

          <p>
            Kullanıcı Şikayeti: Herkesduysun.com’un içerik ve kullanıcı
            sayısının fazlalığı sebebiyle nadiren de olsa yukarıda belirtilen
            unsurlardan birinin veya birkaçının yanlışlıkla sitemizde yer aldığı
            durumlarda şahsınız ya da toplum adına bizi uyarmaktan kaçınmayınız.
            Uyarınız derhal ilgili departmanlarımızca incelenerek dikkate
            alınacak ve aykırılık en kısa sürede giderilecektir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KullanimSartnamesi;
