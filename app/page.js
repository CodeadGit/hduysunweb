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
    
    <div className={`wrapper ${mode}`}>
      {!storyModall ? (
        <HomePage />
      ) : (
          <NewsStories/>
      )}
    </div>
    
  );
}