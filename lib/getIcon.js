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
import { MdSunny } from "react-icons/md";
import { BsCloudDrizzleFill } from "react-icons/bs";
import { LuCloudDrizzle } from "react-icons/lu";

export function getSuitableIcon(weatherCode) {
    if ( weatherCode === 0 ) return <MdSunny />
    if ( 0 < weatherCode < 4) return <WiCloudy />
    if (44 < weatherCode < 49) return <WiDayFog />
    if (50 < weatherCode < 56) return <BsCloudDrizzleFill />
    if (55 < weatherCode < 58) return <LuCloudDrizzle />
    if (60 < weatherCode < 66) return <WiDayRainMix />
    if (65 < weatherCode < 68) return <WiRain />
    if (70 < weatherCode < 76) return <WiNightThunderstorm />
    if ( weatherCode === 77) return <WiNightStormShowers />
    if (79 < weatherCode < 83) return <WiDayLightning />
    if (84 < weatherCode < 87) return <WiSnow />
    if ( weatherCode === 95 ) return <WiThunderstorm />
    if (95 < weatherCode < 100) return <WiNightAltHail />
    else return null;
};
