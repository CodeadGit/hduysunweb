import React from "react";
import Stories from "../homePageStories/Stories";
import HomePage from "./HomePage";
import Caption from "./caption/Caption";
import Category from "./homeCategory/HomeCategory";
import AllCategories from "./allCategories/AllCategories";
import Register from "./register/Register";
import WeatherInfo from "./weather/WeatherInfo";
import Currency from "./currency/Currency";
import Video from "./video/Video";
import TrialComp from "./trialcomp/TrialComp";
import MenuUnderAds from "../ads/adsComponents/MenuUnder";
import Masthead from "../ads/adsComponents/Masthead";
import Health from "../health/Health";
import HomeCategory from "./homeCategory/HomeCategory";
import TagsSlider from "./tagsSlider/tagsSlider";

const Home = () => {
  return (
    <div>
      <Stories />
      <HomePage />
      <TagsSlider/>
      {/* <Tags /> */}
      {/* <CenterHomeAds /> */}
      <MenuUnderAds />
      <Caption title="Gündem" link="gundem" />
      <HomeCategory category="gundem" />
      <Caption title="Tüm Kategori Haberleri" link="tumkategoriler" /> 
      <AllCategories />
      {/* <Authors /> */}
      {/* <Arcelik /> */}
      <Masthead />
      <Currency />
      <Caption title="Sağlık" link="saglik" />
      <HomeCategory category="saglik" />
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
