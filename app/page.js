"use client";
//import HomePage from "../components/homePage";
//import NewsStories from "@/components/newsStories/NewsStories";
import "./page.scss";
import { useAdsContext } from "@/context/AdsContext";
import { useModeContext } from "@/context/ModeContext";
import BikHeader from "@/components/BikHeader";
import FacebookPixel from "@/components/FacebookPixel";
import Head from "next/head";
import Script from "next/script";
import * as gtag from '../lib/gtag'
import { useRouter } from "next/router";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const HomePage = dynamic(
  () => import("../components/homePage"),
  { ssr: false }
);
const NewsStories = dynamic(
  () => import("@/components/newsStories/NewsStories"),
  { ssr: false }
);


export default function Home() {

  const { mode } = useModeContext();
  const { storyModall } = useAdsContext();
  const modeStatus = mode === "dark";
  return (
    <>
    <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-205477047-35', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <BikHeader/>
        <FacebookPixel/>
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-205477047-35`}
      />
      <Script
        src="https://cdn.p.analitik.bik.gov.tr/tracker.js"
        strategy="lazyOnload"
        data-website-id="657f41c4-4e9d-405a-95e8-84eb9ec7719a"
        data-host-url="//657f41c4-4e9d-405a-95e8-84eb9ec7719a.collector.p.analitik.bik.gov.tr"
      />
      
    <div className={`wrapper ${mode}`}>
      
      {!storyModall ? (
        <HomePage />
      ) : (
          <NewsStories/>
      )}
    </div>
    </>
  );
}