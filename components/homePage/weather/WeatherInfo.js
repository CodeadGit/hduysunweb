"use client";
import React, { useEffect, useState } from "react";
import "./weatherInfo.scss";
import Link from "next/link";
import axios from "axios";
import SingleWeather from "./SingleWeather";
import { useThemeContext } from "@/context/ThemeContext";

const citiesInfo = [
  {
    cityName: "İstanbul",
    latitude: 41.0082,
    longitude: 28.9784,
  },
  {
    cityName: "Ankara",
    latitude: 39.9334,
    longitude: 32.8597,
  },
  {
    cityName: "İzmir",
    latitude: 38.4192,
    longitude: 27.1287,
  },
  {
    cityName: "Bursa",
    latitude: 40.1824,
    longitude: 29.0671,
  },
  {
    cityName: "Antalya",
    latitude: 36.8969,
    longitude: 30.7133,
  },
];

const WeatherInfo = () => {

  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  const date = new Date();
  // const clockTime = date.getHours();
  const dayTime = date.toISOString().substring(0, 10);
  // const dateTime2 = date.toISOString().split("T")[0];

  const [citiesWeatherInfo, setCitiesWeatherInfo] = useState([]);

  const getCityWeatherFromCoordinates = async (lat, lon) => {
    const res = await axios.get(
      `https://api.open-meteo.com/v1/dwd-icon?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto&start_date=${dayTime}&end_date=${dayTime}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(res.data);
    const { temperature, weathercode: weatherCode } = res.data.current_weather;
    const maxTemp = res.data.daily.temperature_2m_max[0];
    const minTemp = res.data.daily.temperature_2m_min[0];
    return { temperature, weatherCode, maxTemp, minTemp };
  };

  // console.log(citiesWeatherInfo);

  const fetchWeatherData = async() => {
    const arr = [];
    for (let city of citiesInfo) {
      const weatherInfo = await getCityWeatherFromCoordinates(
        city.latitude,
        city.longitude,
      );
      city = {...city, ...weatherInfo};
      // console.log(city);
      // setCitiesWeatherInfo((prevState) => [...prevState, city]);
      arr.push(city);
    };
    // console.log(arr);
    setCitiesWeatherInfo(arr);
  };

  // console.log("citiesWeatherInfo: ", citiesWeatherInfo);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className="weatherContainer">
      <div className="info-section">
        { citiesWeatherInfo?.map((city,idx) => {
           return (
            <div className="wrapper" key={idx}>
                <SingleWeather key={new Date().getTime()} {...city} modeStatus={modeStatus} />
                <div className="rightLine"></div>
            </div>
          )
        })}
      </div>
      <div className="link-section">
        <div className="link-section-weather">HAVA DURUMU</div>
      </div>
    </div>
  );
};

export default WeatherInfo;
