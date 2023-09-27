"use client";
import React, { useEffect, useState } from "react";
// import dynamic from "next/dynamic";
import "./weather.scss";
import axios from "axios";
import { MdSunny } from "react-icons/md";
import {
  WiCloudy,
  WiDayFog,
  WiDayRainMix,
  WiNightThunderstorm,
  WiNightStormShowers,
  WiDayLightning,
  WiSnow,
  WiThunderstorm,
  WiNightAltHail,
} from "react-icons/wi";
import { BsCloudDrizzleFill } from "react-icons/bs";
import { LuCloudDrizzle } from "react-icons/lu";
import { useThemeContext } from "@/context/ThemeContext";

const Weather = () => {

  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weathercode, setweathercode] = useState("");

  // console.log(latitude, longitude);
  // console.log("temperature: ", temperature);
  // console.log("weathercode: ", weathercode);

  const icon =
    weathercode === 0 ? (
      <MdSunny />
    ) : 0 < weathercode < 4 ? (
      <WiCloudy />
    ) : 44 < weathercode < 49 ? (
      <WiDayFog />
    ) : 50 < weathercode < 56 ? (
      <BsCloudDrizzleFill />
    ) : 55 < weathercode < 58 ? (
      <LuCloudDrizzle />
    ) : 60 < weathercode < 66 ? (
      <WiDayRainMix />
    ) : 65 < weathercode < 68 ? (
      <WiRain />
    ) : 70 < weathercode < 76 ? (
      <WiNightThunderstorm />
    ) : weathercode === 77 ? (
      <WiNightStormShowers />
    ) : 79 < weathercode < 83 ? (
      <WiDayLightning />
    ) : 84 < weathercode < 87 ? (
      <WiSnow />
    ) : weathercode === 95 ? (
      <WiThunderstorm />
    ) : 95 < weathercode < 100 ? (
      <WiNightAltHail />
    ) : null;

  const successCallback = (position) => {
    // console.log("position :", position);
    const { latitude, longitude } = position.coords;
    setLatitude(latitude);
    setLongitude(longitude);
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  const date = new Date();
  // const clockTime = date.getHours();
  const dayTime = date.toISOString().substring(0, 10);
  // const dateTime2 = date.toISOString().split("T")[0];

  const fakeFetch = async () => {
    try {
      const res = await axios.get(
        `https://api.open-meteo.com/v1/dwd-icon?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&current_weather=true&timezone=auto&start_date=${dayTime}&end_date=${dayTime}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(res.data);
      // const temp = res.data.hourly.temperature_2m[clockTime];
      const currentTemp = res.data.current_weather.temperature;
      const code = res.data.current_weather.weathercode;
      setweathercode(code);
      setTemperature(currentTemp);
      // setTemperature(temp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
    // console.log("latitude: ", latitude)
    // console.log("longitude: ", longitude);
    if (latitude && longitude) fakeFetch();
    // if (latitude && longitude) fetchWeather();
  }, [latitude, longitude]);

  // const data = {
  //   lat: String(latitude),
  //   long: String(longitude),
  //   startDate: dayDate,
  //   endDate: dayDate,
  // };

  // const fetchWeather = async () => {
  //   try {
  //     const res = await axios.get("https://payment.onlinekesif.com/weather", {
  //       params: data,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className={`weather ${modeStatus ? "dark" : ""}`}>
      {icon}
      <div className="weather-info">
        <span>{Math.round(temperature)} °C</span>
        <span>Bursa, Türkiye</span>
      </div>
    </div>
  );
};

export default Weather;
