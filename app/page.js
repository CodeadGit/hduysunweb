"use client";
import HomePage from "../components/homePage";
import NewsStories from "@/components/newsStories/NewsStories";
import "./page.scss";
import { useAdsContext } from "@/context/AdsContext";
import { useModeContext } from "@/context/ModeContext";
import BikHeader from "@/components/BikHeader";
import FacebookPixel from "@/components/FacebookPixel";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  const { mode } = useModeContext();
  const { storyModall } = useAdsContext();
  const modeStatus = mode === "dark";

  return (
    <>
      <Script
        src="https://cdn.p.analitik.bik.gov.tr/tracker.js"
        strategy="lazyOnload"
        data-website-id="657f41c4-4e9d-405a-95e8-84eb9ec7719a"
        data-host-url="//657f41c4-4e9d-405a-95e8-84eb9ec7719a.collector.p.analitik.bik.gov.tr"
      />
    <div className={`wrapper ${mode}`}>
      <BikHeader/>
      <FacebookPixel/>
      {!storyModall ? (
        <HomePage />
      ) : (
          <NewsStories/>
      )}
    </div>
    </>
  );
}