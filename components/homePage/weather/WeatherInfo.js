"use client";
import React, { useEffect, useState } from "react";
import "./weatherInfo.scss";
import Link from "next/link";
import axios from "axios";
import SingleWeather from "./SingleWeather";
import { useThemeContext } from "@/context/ThemeContext";

// const weatherArray = [
//   {
//     id: 1,
//     city: "Londra",
//     country: "Birleşik Krallık",
//     minTemp: "4°C",
//     maxTemp: "13°C",
//     icon: <BsFillCloudSunFill />,
//   },
//   {
//     id: 2,
//     city: "Paris",
//     country: "Fransa",
//     minTemp: "4°C",
//     maxTemp: "14°C",
//     icon: <BsFillCloudRainFill />,
//   },
//   {
//     id: 3,
//     city: "Berlin",
//     country: "Almanya",
//     minTemp: "6°C",
//     maxTemp: "11°C",
//     icon: <BsFillCloudFill />,
//   },
//   {
//     id: 4,
//     city: "Roma",
//     country: "İtalya",
//     minTemp: "9°C",
//     maxTemp: "17°C",
//     icon: <BsFillCloudSunFill />,
//   },
//   {
//     id: 5,
//     city: "Madrid",
//     country: "İspanya",
//     minTemp: "8°C",
//     maxTemp: "19°C",
//     icon: <BsFillCloudSunFill />,
//   },
// ];

const citiesInfo = [
  {
    cityName: "Londra",
    countryName: "Birleşik Krallık",
    latitude: 51.5085,
    longitude: -0.1257,
  },
  {
    cityName: "Paris",
    countryName: "Fransa",
    latitude: 48.8534,
    longitude: 2.3488,
  },
  {
    cityName: "Berlin",
    countryName: "Almanya",
    latitude: 52.5244,
    longitude: 13.4105,
  },
  {
    cityName: "Roma",
    countryName: "İtalya",
    latitude: 41.8919,
    longitude: 12.5113,
  },
  {
    cityName: "Madrid",
    countryName: "İspanya",
    latitude: 40.4165,
    longitude: -3.7026,
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
        <Link href="/video">HAVA DURUMU</Link>
      </div>
    </div>
  );
};

export default WeatherInfo;
