import { Poppins } from "next/font/google";
import "../sass/main.scss";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
// import PageSkinLeft from "@/components/ads/adsComponents/PageSkinLeft";
import { AdsContextProvider } from "@/context/AdsContext";
// import PageSkinRight from "@/components/ads/adsComponents/PageSkinRight";
import BaseWrapper from "@/components/BaseWrapper";
import { AuthenticationProvider } from "@/context/AuthenticationContext";
import { CategoriesProvider } from "@/context/CategoriesContext";
import { TagContextProvider } from "@/context/TagContext";
import { FetchAssetsContextProvider } from "@/context/FetchAssetsContext";
import Head from "next/head";
import Script from "next/script";
import BikHeader from "@/components/BikHeader";
// import LogoNext from "@/components/ads/adsComponents/LogoNext";
// import MiniNavbar from '@/components/miniNavbar/MiniNavbar';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata = {
  title: "Herkes Duysun",
  description: "Türkiye'nin yeni medyası. Tüm haberler, en son haberler bu platformda. Tarafsız ve objektif haber kuruluşu.",

};


export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <Head>
        <title>Herkes Duysun</title>
        
        <meta
          name="description"
          content="Türkiye'nin yeni medyası. Tüm haberler, en son haberler bu platformda. Tarafsız ve objektif haber kuruluşu."  
        />

        <meta name="datePublished" content="2019-09-27T11:55:00+0300"/>
        <meta name="dateModified" content="2019-09-27T12:13:52+0300"/>
        <meta name="articleSection" content="video"/>

        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '875651633516102'); 
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=875651633516102&ev=PageView&noscript=1"
          />
        </noscript>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-205477047-35"
        />

        {/* Google Tag Manager noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=UA-205477047-35"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* Google Analytics (gtag.js) Script */}

        {/* Google Analytics (gtag.js) Config */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-205477047-35');
              gtag('config', 'G-1VGJWF7CKL');
            `,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(93595743, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
              });
            `,
          }}
        />

        {/* Yandex.Metrika noscript */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/93595743"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>

        {/* Yandex.Metrika Verification Meta Tag */}
        <meta name="yandex-verification" content="47b73cadef9785d0" />
        
       
        <Script
          language="javascript"
          type="text/javascript"
          src={`https://cdn.p.analitik.bik.gov.tr/tracker`}
          data-website-id="657f41c4-4e9d-405a-95e8-84eb9ec7719a"
          data-host-url='//657f41c4-4e9d-405a-95e8-84eb9ec7719a.collector.p.analitik.bik.gov.tr'
        />
        
      </Head>
      <body className={poppins.className} suppressHydrationWarning={true}>
      
      <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KV964JN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* Google Analytics (gtag.js) Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D5B1PJ9VKP"
        ></script>

        {/* Google Analytics (gtag.js) Config */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D5B1PJ9VKP');
            `,
          }}
        />
        <AuthenticationProvider>
          <FetchAssetsContextProvider>
            <CategoriesProvider>
              <ThemeProvider>
                <TagContextProvider>
                  <AdsContextProvider>
                    <Navbar />
                    {/* <MiniNavbar /> */}
                    {/* <LogoNext /> */}
                    <BaseWrapper>{children}</BaseWrapper>
                    <Footer />
                  </AdsContextProvider>
                </TagContextProvider>
              </ThemeProvider>
            </CategoriesProvider>
          </FetchAssetsContextProvider>
        </AuthenticationProvider>
        
    </body>
    </html>
  );
}
