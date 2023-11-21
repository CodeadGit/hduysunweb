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

  const API_KEY = process.env.NEXT_PUBLIC_OPEN_METEO_API_KEY;

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
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

  // const errorCallback = (error) => {
  //   console.log(error);
  // };

  const date = new Date();
  // const clockTime = date.getHours();
  const dayTime = date.toISOString().substring(0, 10);
  // const dateTime2 = date.toISOString().split("T")[0];

  const fakeFetch = async () => {
    try {
      const res = await axios.get(
        `https://api.open-meteo.com/v1/dwd-icon?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&current_weather=true&timezone=auto&start_date=${dayTime}&end_date=${dayTime}&apikey=${API_KEY}`,
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

  const fetchCityName = async () => {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3001/cityfinder",
      data: {
        lat: latitude,
        long: longitude,
      },
    };

    try {
      const res = await axios(config);
      const fetchedCityName = res.data.result.results[0].name;
      setCityName(fetchedCityName);
    } catch (error) {
       console.log(error);
    }
  };

  const fetchCountryName = async () => {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3001/countryfinder",
      data: {
        lat: latitude,
        long: longitude,
      },
    };

    try {
      const res = await axios(config);
      // console.log(res);
      const addressComponents = res.data.result.results[0].address_components;
      for (const component of addressComponents) {
        if (component.types.includes("country")) {
          setCountryName(component.long_name);
        }
      }
    } catch (error) {
       console.log(error);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      navigator.geolocation.getCurrentPosition(successCallback);
    }
    if (latitude && longitude) {
      fakeFetch();
      fetchCityName();
      fetchCountryName();
    }
  }, [latitude, longitude]);

  return (
    <div
      className={`weather ${modeStatus ? "dark" : ""}`}
    >
      {icon}
      <div className="weather-info">
        <span>{Math.round(temperature)} °C</span>
        <span>
          {cityName} {countryName}
        </span>
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
