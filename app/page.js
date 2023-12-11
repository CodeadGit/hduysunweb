"use client";
import { useThemeContext } from "@/context/ThemeContext";
import HomePage from "../components/homePage";
import NewsStories from "@/components/newsStories/NewsStories";
import "./page.scss";
import { useAdsContext } from "@/context/AdsContext";
import Script from "next/script";
import BikHeader from "@/components/BikHeader";

export default function Home() {

  const { mode } = useThemeContext();
  const { storyModall } = useAdsContext();
  const modeStatus = mode === "dark";

  return (
    <div className={`wrapper ${modeStatus ? "dark" : "light"}`}>
      <BikHeader/>
      {!storyModall ? (
        <HomePage />
      ) : (
        <NewsStories />
      )}
    </div>
  );
};
