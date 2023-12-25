import React from "react";
import dynamic from "next/dynamic";
//import Stories from "../homePageStories/Stories";
//import HomePage from "./HomePage";
//import Caption from "./caption/Caption";
//import Category from "./homeCategory/HomeCategory";
//import AllCategories from "./allCategories/AllCategories";
//import Register from "./register/Register";
//import WeatherInfo from "./weather/WeatherInfo";
//import Currency from "./currency/Currency";
//import Video from "./video/Video";
//import TrialComp from "./trialcomp/TrialComp";
//import MenuUnderAds from "../ads/adsComponents/MenuUnder";
//import Masthead from "../ads/adsComponents/Masthead";
//import Health from "../health/Health";
//import HomeCategory from "./homeCategory/HomeCategory";
//import TagsSlider from "./tagsSlider/tagsSlider";
//import Pharmacy from "./pharmacy/Pharmacy";
import Head from "next/head";
//import HomeHealthCategory from "./homeCategory/HomeHealthCategory";

const HomeHealthCategory = dynamic(
  () => import("./homeCategory/HomeHealthCategory"),
  { ssr: false }
);
const Pharmacy = dynamic(
  () => import("./pharmacy/Pharmacy"),
  { ssr: false }
);
const TagsSlider = dynamic(
  () => import("./tagsSlider/tagsSlider"),
  { ssr: false }
);
const HomeCategory = dynamic(
  () => import("./homeCategory/HomeCategory"),
  { ssr: false }
);
const Health = dynamic(
  () => import("../health/Health"),
  { ssr: false }
);
const Masthead = dynamic(
  () => import("../ads/adsComponents/Masthead"),
  { ssr: false }
);
const MenuUnderAds = dynamic(
  () => import("../ads/adsComponents/MenuUnder"),
  { ssr: false }
);
const TrialComp = dynamic(
  () => import("./trialcomp/TrialComp"),
  { ssr: false }
);
const Video = dynamic(
  () => import("./video/Video"),
  { ssr: false }
);
const Currency = dynamic(
  () => import("./currency/Currency"),
  { ssr: false }
);
const AllCategories = dynamic(
  () => import("./allCategories/AllCategories"),
  { ssr: false }
);
const Register = dynamic(
  () => import("./register/Register"),
  { ssr: false }
);
const WeatherInfo = dynamic(
  () => import("./weather/WeatherInfo"),
  { ssr: false }
);
const Stories = dynamic(
  () => import("../homePageStories/Stories"),
  { ssr: false }
);
const HomePage = dynamic(
  () => import("./HomePage"),
  { ssr: false }
);
const Caption = dynamic(
  () => import("./caption/Caption"),
  { ssr: false }
);
const Category = dynamic(
  () => import("./homeCategory/HomeCategory"),
  { ssr: false }
);

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
      {/* {<Pharmacy /> ? <Pharmacy/> : null} */}
      <Caption title="Sağlık" link="saglik" />
      <HomeHealthCategory category="saglik" />
      {/* <Health /> */}
      {/* {<WeatherInfo /> ? <WeatherInfo/> : null} */}
       {/* <TrialComp />  */}
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
