"use client";
import { useModeContext } from "@/context/ModeContext";
//import FooterSidebar from "./FooterSidebar";
import "./veriPolitikasi.scss";
import dynamic from "next/dynamic";
const FooterSidebar = dynamic(
  () => import("./FooterSidebar"),
  { ssr: false }
);
const VeriPolitikasi = () => {
  const { mode } = useModeContext();
  const modeStatus = mode === "dark";

  return (
    <div className="all-page">
      <div className="sidebar-fix">
        <FooterSidebar />
      </div>

      <div className={`text-part ${modeStatus ? "dark" : ""}`}>
        <div className="header">VERİ POLİTİKASI</div>
        <div className="line"></div>

        <div className="text">
          <p>
            {" "}
            Veri Politikası - Genel Veri Koruma Yönetmeliği (GDPR - General Data
            Protection Regulation)
          </p>

          <p>
            {" "}
            Herkesduysun.com olarak kişisel verilerinizin güvenliği hususuna
            azami hassasiyet göstermekteyiz. Kişisel verileriniz 6698 sayılı
            Kişisel Verilerin Korunması Kanunu (“KVKK”)’na uygun olarak
            işlenmekte ve muhafaza edilmektedir.
          </p>

          <p>
            <strong> Kişisel Verilerinizin Ne Şekilde İşlenebileceği</strong>
          </p>

          <p>
            {" "}
            6698 sayılı KVKK uyarınca, Herkesduysun.com ile paylaştığınız
            kişisel verileriniz, tamamen veya kısmen, otomatik olarak veyahut
            herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik
            olmayan yollarla elde edilerek, kaydedilerek, depolanarak,
            değiştirilerek, yeniden düzenlenerek, kısacası veriler üzerinde
            gerçekleştirilen her türlü işleme konu olarak tarafımızdan
            işlenebilecektir. KVKK kapsamında veriler üzerinde gerçekleştirilen
            her türlü işlem “kişisel verilerin işlenmesi” olarak kabul
            edilmektedir.
          </p>

          <p>
            <strong>
              {" "}
              Kişisel Verilerinizin İşlenme Amaçları Ve Hukuki Sebepleri
            </strong>
          </p>

          <p> Paylaştığınız kişisel veriler,</p>

          <p>
            {" "}
            Müşterilerimize verdiğimiz hizmetlerin gereklerini, sözleşmenin ve
            teknolojinin gereklerine uygun şekilde yapabilmek, sunulan ürün ve
            hizmetlerimizi geliştirebilmek için;
          </p>

          <p>
            {" "}
            Kamu güvenliğine ilişkin hususlarda ve hukuki uyuşmazlıklarda, talep
            halinde ve mevzuat gereği savcılıklara, mahkemelere ve ilgili kamu
            görevlilerine bilgi verebilmek için;
          </p>

          <p>
            {" "}
            Üyelerimize geniş kapsamda çeşitli imkânlar sunabilmek veya bu
            imkânları sunabilecek kişi veya kurumlarla yasal çerçevede
            paylaşabilmek için;
          </p>

          <p> Reklam tercihlerini analiz etmek için,</p>

          <p>
            {" "}
            6698 sayılı KVKK ve ilgili ikincil düzenlemelere uygun olarak
            işlenecektir.
          </p>

          <p>
            {" "}
            Kişisel Verilerinizin Aktarılabileceği Üçüncü Kişi Veya Kuruluşlar
            Hakkında Bilgilendirme
          </p>

          <p>
            {" "}
            Yukarıda belirtilen amaçlarla, Herkesduysun.com ile paylaştığınız
            kişisel verilerinizin aktarılabileceği kişi / kuruluşlar; ana
            hissedarlarımız, hissedarlarımız, reklam verenler, doğrudan veya
            dolaylı yurt içi / yurt dışı iştiraklerimiz; başta Herkesduysun.com
            altyapısını kullanan üye firmalar ve bunlarla sınırlı olmamak üzere
            sunulan hizmet ile ilgili kişi ve kuruluşlar olmak üzere,
            faaliyetlerimizi yürütmek üzere ve/veya Veri İşleyen sıfatı ile
            hizmet aldığımız, iş birliği yaptığımız, program ortağı kuruluşları,
            yurtiçi / yurtdışı kuruluşlar ve diğer 3. kişiler ve kuruluşlardır.
          </p>

          <p>
            {" "}
            Reklam amaçlı kullanılacak çerezlere ilişkin düzenlemelerimiz “
            Herkesduysun.com Çerez Politikası” olup, şu anda okuduğunuz
            “Gizlilik ve Kişisel Verilerin Korunması Politikası”nın bir
            parçasını oluşturmaktadır. Çerez Politikamız hakkında bilgi edinmek
            için lütfen tıklayın.
          </p>

          <p>
            <strong> Kişisel Verilerinizin Toplanma Şekli</strong>
          </p>

          <p> Kişisel verileriniz,</p>

          <p>
            {" "}
            Herkesduysun.com internet sitesi ve mobil uygulamalarındaki formlar
            ile ad, soyad, adres, telefon, iş veya özel e-posta adresi gibi
            bilgiler ile; kullanıcı adı ve şifresi kullanılarak giriş yapılan
            sayfalardaki tercihleri, gerçekleştirilen işlemlerin IP kayıtları,
            tarayıcı tarafından toplanan çerez verileri ile gezinme süre ve
            detaylarını içeren veriler, konum verileri şeklinde;
          </p>

          <p>
            {" "}
            Herkesduysun.com ile ticari ilişki kurmak, iş başvurusu yapmak,
            teklif vermek gibi amaçlarla, kartvizit, özgeçmiş (cv), teklif
            vermek ve sair yollarla kişisel verilerini paylaşan kişilerden
            alınan, fiziki veya sanal bir ortamda, yüz yüze ya da mesafeli,
            sözlü veya yazılı ya da elektronik ortamdan;
          </p>

          <p>
            {" "}
            Ayrıca farklı kanallardan dolaylı yoldan elde edilen, web sitesi,
            blog, yarışma, anket, oyun, kampanya ve benzeri amaçlı kullanılan
            (mikro) web sitelerinden ve sosyal medyadan elde edilen veriler,
            e-bülten okuma veya tıklama hareketleri, kamuya açık veri
            tabanlarının sunduğu veriler, sosyal medya platformları (Facebook,
            Twitter, Google, Instagram vs) gibi sosyal paylaşım sitelerinden
            paylaşıma açık profil ve verilerden; işlenebilmekte ve
            toplanabilmektedir.
          </p>

          <p>
            <strong> Kişisel Verilerinizin Aktarılması</strong>
          </p>

          <p>
            {" "}
            Türkiye’de işlenerek veya Türkiye dışında işlenip muhafaza edilmek
            üzere, yukarıda sayılan yöntemlerden herhangi birisi ile toplanmış
            kişisel verileriniz KVKK kapsamında kalmak kaydıyla ve sözleşme
            amaçlarına uygun olarak yurtdışında bulunan (Kişisel Veriler Kurulu
            tarafından akredite edilen ve kişisel verilerin korunması hususunda
            yeterli korumanın bulunduğu ülkelere) hizmet aracılarına da
            aktarılabilecektir.
          </p>

          <p> Kişisel Verileriniz;</p>

          <p>
            {" "}
            Ürün ve hizmetlerin sunulması ve tanıtılması için işbirliği yapılan
            ve/veya hizmet alınan iş ortaklarımız,
          </p>

          <p>
            {" "}
            Acil yardım çağrısı halinde konumunuzu tespit edecek olan yetkili
            mercilere,
          </p>

          <p>
            {" "}
            Düzenleyici ve denetleyici kurumlar ile mahkeme ve icra müdürlükleri
            gibi sair resmi kurumlara, kişisel verilerinizi talep etmeye yetkili
            olan diğer kamu kurum veya kuruluşlarına,
          </p>

          <p>
            {" "}
            Herkesduysun.net ile ticari ilişki içinde bulunan ve telefon
            numaranıza sahip tüzel kişilere,
          </p>

          <p> Gerekli görüldüğü durumlarda aktarılabilecektir.</p>

          <p>
            <strong> Kişisel Verilerin Saklanması Ve Korunması</strong>
          </p>

          <p>
            {" "}
            Herkesduysun.com, kişisel verilerinizin barındığı sistemleri ve veri
            tabanlarını, KVKK’nun 12. Maddesi gereği kişisel verilerin hukuka
            aykırı olarak işlenmesini önlemekle, yetkisiz kişilerin erişimlerini
            engellemekle; muhafazalarını sağlamak amacıyla hash, şifreleme,
            işlem kaydı, erişim yönetimi gibi yazılımsal tedbirleri ve fiziksel
            güvenlik önlemleri almakla mükelleftir. Kişisel verilerin yasal
            olmayan yollarla başkaları tarafından elde edilmesinin öğrenilmesi
            halinde durum derhal, yasal düzenlemeye uygun ve yazılı olarak
            Kişisel Verileri Koruma Kurulu’na bildirilecektir.
          </p>

          <p>
            <strong> Kişisel Verilerin Güncel Ve Doğru Tutulması</strong>
          </p>

          <p>
            {" "}
            KVKK’nun 4. maddesi uyarınca Herkesduysun.com’un kişisel
            verilerinizi doğru ve güncel olarak tutma yükümlülüğü bulunmaktadır.
            Bu kapsamda Herkesduysun.com’un yürürlükteki mevzuattan doğan
            yükümlülüklerini yerine getirebilmesi için üyelerimizin doğru ve
            güncel verilerini paylaşması veya web sitesi / mobil uygulama
            üzerinden güncellemesi gerekmektedir.
          </p>

          <p>
            <strong>
              {" "}
              6698 Sayılı Kvkk Uyarınca Kişisel Veri Sahibinin Hakları
            </strong>
          </p>

          <p>
            {" "}
            6698 sayılı KVKK 11.maddesi 07 Ekim 2016 tarihinde yürürlüğe girmiş
            olup ilgili madde gereğince, Kişisel Veri Sahibi’nin bu tarihten
            sonraki hakları aşağıdaki gibidir:
          </p>

          <p>
            {" "}
            Kişisel Veri Sahibi, Herkesduysun.com’a (veri sorumlusu) başvurarak
            kendisiyle ilgili;
          </p>

          <p> Kişisel veri işlenip işlenmediğini öğrenme,</p>

          <p> Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</p>

          <p>
            {" "}
            Kişisel verilerin işlenme amacını ve bunların amacına uygun
            kullanılıp kullanılmadığını öğrenme,
          </p>

          <p>
            {" "}
            Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü
            kişileri bilme,
          </p>

          <p>
            {" "}
            Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların
            düzeltilmesini isteme,
          </p>

          <p>
            {" "}
            KVKK’nun 7. maddesinde öngörülen şartlar çerçevesinde kişisel
            verilerin silinmesini veya yok edilmesini isteme,
          </p>

          <p>
            {" "}
            Kişisel verilerin düzeltilmesi, silinmesi, yok edilmesi halinde bu
            işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere de
            bildirilmesini isteme,
          </p>

          <p>
            {" "}
            İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz
            edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya
            çıkmasına itiraz etme,
          </p>

          <p>
            {" "}
            Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara
            uğraması hâlinde zararın giderilmesini talep etme, haklarına
            sahiptir.
          </p>

          <p>
            <strong> İletişim ve Başvuru Yöntemi</strong>
          </p>

          <p>
            {" "}
            Herkesduysun.com tarafından atanacak Veri Sorumlusu Temsilcisi,
            yasal altyapı sağlandığında Veri Sorumluları Sicilinde ve bu
            belgenin bulunduğu internet adresinde ilan edilecektir.
          </p>

          <p>
            {" "}
            Kişisel Veri Sahipleri, sorularını, görüşlerini veya taleplerini
            iletisim@herkesduysun.com e-posta adresine yöneltebilirler.
          </p>

          <p>
            {" "}
            Herkesduysun.com iletilen taleplere, gerekçeli olmak ve 30 gün
            içinde cevap vermek kaydıyla olumlu/olumsuz yanıtını, yazılı veya
            dijital ortamdan verebilir. Taleplere ilişkin gerekli işlemlerin
            ücretsiz olması esastır. Ancak işlemlerin bir maliyet gerektirmesi
            halinde, Herkesduysun.com, ücret talebinde bulunma hakkını saklı
            tutar. Bu ücretler, Kişisel Verilerin Korunması Kurulu tarafından,
            Kişisel Verilerin korunması Kanunu’nun 13. maddesine göre belirlenen
            tarife üzerinden belirlenir.
          </p>

          <p>
            {" "}
            Web sayfamızda, uygulamalarımızda ve diğer sair kanallarımızda
            kişisel verilerinizi paylaşarak Kişisel Veriler Politikamızı ve
            politikamızda yer alan işlenme, işlenme yöntemleri, verilerin
            aktarılması, satışı ve diğer ilgili hususlar hakkındaki şartları,
            Bir sosyal medya uygulaması olan Herkesduysun.com ile paylaşılan
            verilerin web sayfasında, uygulamalarda ve sosyal medya kanallarında
            kullanılmasını, bildirimlerde ve önerilerde bulunulmasını, üyelerin
            yararına olması şartıyla ticari anlamda üçüncü kişilerle
            paylaşılabileceğini ve yine bunun için kabulde bulunduğunuzu, yasal
            haklarınızı kullanmadan önce Herkesduysun.com’a başvuruda
            bulunacağınızı KVKK’da büyük öneme haiz, belirli bir konuya ilişkin,
            bilgilendirilmeye dayanan ve özgür iradeyle açıklanan rıza şeklinde
            tanımlanan açık bir rıza ile kabul ettiğinizi beyan etmiş olursunuz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VeriPolitikasi;
