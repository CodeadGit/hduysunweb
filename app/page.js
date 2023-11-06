"use client";
import { useThemeContext } from "@/context/ThemeContext";
import HomePage from "../components/homePage";
import NewsStories from "@/components/newsStories/NewsStories";
import "./page.scss";
import { useAdsContext } from "@/context/AdsContext";

export default function Home() {

  const { mode } = useThemeContext();
  const { storyModall } = useAdsContext();
  const modeStatus = mode === "dark";

  return (
    <div className={`wrapper ${modeStatus ? "dark" : "light"}`}>
      {!storyModall ? (
        <HomePage />
      ) : (
        <NewsStories />
      )}
    </div>
  );
};
