import React from "react";
import Stories from "../homePageStories/Stories";
import HomePage from "./HomePage";
import Slider from "./slider/Slider";
// import Tags from "./tags/Tags";
// import CenterHomeAds from "./CenterHomeAds";
import Caption from "./caption/Caption";
import Category from "./category/Category";
import AllCategories from "./allCategories/AllCategories";
// import Authors from "./authors/Authors";
// import Arcelik from "./ads/Arcelik";

// CATEGORIES IMAGES FOR GUNDEM SECTION

// import cat1 from "./assets/cat1.png";
// import cat2 from "./assets/cat2.png";
// import cat3 from "./assets/cat3.png";
// import cat4 from "./assets/cat4.png";
// import cat5 from "./assets/cat5.png";
// import cat6 from "./assets/cat6.png";

// CATEGORIES IMAGES FOR SAGLIK SECTION

// import cat7 from "./assets/cat7.png";
// import cat8 from "./assets/cat8.png";
// import cat9 from "./assets/cat9.png";
// import cat10 from "./assets/cat10.png";
// import cat11 from "./assets/cat11.png";
// import cat12 from "./assets/cat12.png";

import Register from "./register/Register";
import WeatherInfo from "./weather/WeatherInfo";
import Currency from "./currency/Currency";
import Video from "./video/Video";
import TrialComp from "./trialcomp/TrialComp";
import MenuUnderAds from "../ads/adsComponents/MenuUnder";
import Masthead from "../ads/adsComponents/Masthead";
import Health from "../health/Health";
// import Login from "../login/Login";

// const arr1 = [
//     {
//       title:
//         "Rusya’nın baskısı devam ederken Putin konuştu: “Yapılanlar karşılıksız…",
//       id: "01",
//       image: cat1,
//     },
//     {
//       title: "Ekonomi gündemden düşsede halkın yakasından düşmüyor",
//       id: "02",
//       image: cat2,
//     },
//     {
//       title: "Meclis’te seçimden önce son toplantı yapıldı",
//       id: "03",
//       image: cat3,
//     },
//     {
//       title:
//         "Saray’dan gelen haberler,milletvekili adaylarının değişeceğini belirtiyor",
//       id: "04",
//       image: cat4,
//     },
//     {
//       title: "Anıtkabire askeri tören sürprizi",
//       id: "05",
//       image: cat5,
//     },
//     {
//       title:
//         "Kadınların sesi olan Gül Keskin; “Çalışma hayatındaki baskılar ve mobingler…”",
//       id: "06",
//       image: cat6,
//     },
//   ];

// const arr2 = [
//     {
//       title:
//         "Rusya’nın baskısı devam ederken Putin konuştu: “Yapılanlar karşılıksız…",
//       id: 7,
//       image: cat7,
//     },
//     {
//       title: "Ekonomi gündemden düşsede halkın yakasından düşmüyor",
//       id: 8,
//       image: cat8,
//     },
//     {
//       title: "Meclis’te seçimden önce son toplantı yapıldı",
//       id: 9,
//       image: cat9,
//     },
//     {
//       title:
//         "Saray’dan gelen haberler,milletvekili adaylarının değişeceğini belirtiyor",
//       id: 10,
//       image: cat10,
//     },
//     {
//       title: "Anıtkabire askeri tören sürprizi",
//       id: 11,
//       image: cat11,
//     },
//     {
//       title:
//         "Kadınların sesi olan Gül Keskin; “Çalışma hayatındaki baskılar ve mobingler…”",
//       id: 12,
//       image: cat12,
//     },
//   ];

const Home = () => {

  return (
    <div>
      <Stories />
      <HomePage />
      <Slider />
      {/* <Tags /> */}
      {/* <CenterHomeAds /> */}
      <MenuUnderAds />
      <Caption title="Gündem" link="gundem" />
      <Category category="gundem" />
      <Caption title="Tüm Kategori Haberleri" link="spor" /> 
      <AllCategories />
      {/* <Authors /> */}
      {/* <Arcelik /> */}
      <Masthead />
      <Currency />
      <Caption title="Sağlık" link="saglik" />
      <Category category="saglik" />
      <Health />
      <WeatherInfo /> 
      <TrialComp />
      <Video />
      <Register /> 
      {/* <Login/> */}
    </div>
  );
};

export default Home;
