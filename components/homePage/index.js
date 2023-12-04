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
import Pharmacy from "./pharmacy/Pharmacy";
import Head from "next/head";

const Home = ({ pageTitle, pageDescription }) => {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <Stories />
      <HomePage />
      <TagsSlider />
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
      {/* <Currency />  */}
      <Pharmacy />
      <Caption title="Sağlık" link="saglik" />
      <HomeCategory category="saglik" />
      {/* <Health /> */}
      <WeatherInfo />
      {<TrialComp /> ? <TrialComp /> : null}
      <Video />
      <Register />
      {/* <Login/> */}
    </div>
  );
};
export async function getServerSideProps() {
  // Fetch dynamic data for the page
  const pageTitle = "Herkes Duysun";
  const pageDescription =
    "Türkiye'nin yeni medyası. Tüm haberler, en son haberler bu platformda. Tarafsız ve objektif haber kuruluşu.";

  return {
    props: {
      pageTitle,
      pageDescription,
    },
  };
}
export default Home;
