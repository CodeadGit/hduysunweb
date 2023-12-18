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
import { TagProvider } from "@/context/TagContext";
import { FetchAssetsContextProvider } from "@/context/FetchAssetsContext";
import { GalleryProvider } from "@/context/GalleryContext";
import { ModeProvider } from "@/context/ModeContext";
import Head from "next/head";
import ErrorBoundary from "@/components/ErrorBoundary";
import HomePage from "@/components/homePage/HomePage";
import BikHeader from "@/components/BikHeader";
import FacebookPixel from "@/components/FacebookPixel";
import Script from "next/script";

// import LogoNext from "@/components/ads/adsComponents/LogoNext";
// import MiniNavbar from '@/components/miniNavbar/MiniNavbar';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata = {
  title: "Herkes Duysun",
  description:
    "Türkiye'nin yeni medyası. Tüm haberler, en son haberler bu platformda. Tarafsız ve objektif haber kuruluşu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      {/* <FacebookPixel/> */}
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Head>
          <title>Herkes Duysun</title>

          <meta
            name="description"
            content="Türkiye'nin yeni medyası. Tüm haberler, en son haberler bu platformda. Tarafsız ve objektif haber kuruluşu."
          />

          <meta name="datePublished" content="2019-09-27T11:55:00+0300" />
          <meta name="dateModified" content="2019-09-27T12:13:52+0300" />
          <meta name="articleSection" content="video" />
          
          
          

          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6386087293593832"
     crossorigin="anonymous"></script>

      {/* Google Tag Manager noscript */}
        <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=UA-205477047-35"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>

          {/* Google Analytics (gtag.js) Script */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-1VGJWF7CKL"
          />

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
          {/* Yandex.Metrika Verification Meta Tag */}
          <meta name="yandex-verification" content="47b73cadef9785d0" />

        </Head>
       
        <ErrorBoundary>
          <ModeProvider>
            <AuthenticationProvider>
            <GalleryProvider>
              <FetchAssetsContextProvider>
                  <CategoriesProvider>
                    <ThemeProvider>
                      <TagProvider>
                        <AdsContextProvider>
                          <Navbar />
                          {/* <MiniNavbar /> */}
                          {/* <LogoNext /> */}
                          <BaseWrapper>{children}</BaseWrapper>
                          <Footer />
                        </AdsContextProvider>
                      </TagProvider>
                    </ThemeProvider>
                  </CategoriesProvider>
              </FetchAssetsContextProvider>
              </GalleryProvider>
            </AuthenticationProvider>
          </ModeProvider>
        </ErrorBoundary>
        <FacebookPixel/>

      </body>
    </html>
  );
}
