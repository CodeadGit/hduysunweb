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
import { useModeContext } from "@/context/ModeContext";

const Weather = ({ showSearchBar }) => {
  const { mode } = useModeContext();
  const modeStatus = mode === "dark";

  const API_KEY = process.env.NEXT_PUBLIC_OPEN_METEO_API_KEY;

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weathercode, setweathercode] = useState("");
  const [weather, setWeather] = useState({});

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

  const date = new Date();

  const dayTime = date.toISOString().substring(0, 10);

  const fetchCityName = async () => {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://docapi.herkesduysun.com/cityfinder",
      data: {
        lat: latitude,
        long: longitude,
      },
    };

    try {
      const res = await axios(config);
      const fetchedCityName = res.data.result.results[0]?.name;
      await fetchWeather(fetchedCityName)
      setCityName(fetchedCityName);
    } catch (error) {
      console.log(error);
    }
  };

  const successCallback = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const fetchWeather = async (fetchCityName) => {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://docapi.herkesduysun.com/wf",
      data: {
        city: fetchCityName
      },
    };

    try {
      const res = await axios(config);
      const fetchedCityName = res.data
      setWeather(fetchedCityName);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(weather)

  useEffect(() => {
    if (typeof window !== "undefined") {
      navigator.geolocation.getCurrentPosition(successCallback);
    }
    if (latitude && longitude) {
      //fakeFetch();
      fetchCityName();
    }
  }, [latitude, longitude]);

  // if (!window.Geolocation) {
  //   return null;
  //
  // }

  return (
    <div
      className={`weather ${showSearchBar ? "none" : ""} ${
        modeStatus ? "dark" : ""
      }`}
    >
      {icon}
      <div className="weather-info">
        {
          weather?.result?.main?.temp === undefined ? "9 °C Bursa" :  <span>{Math.round(weather?.result?.main?.temp)} °C</span>
        }
        <span>{cityName}</span>
      </div>
    </div>
  );
};

export default Weather;

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
