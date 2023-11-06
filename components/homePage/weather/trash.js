  // const getCoordinates = async (cityName) => {
  //   try {
  //     const res = await axios.get(
  //       `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`
  //     );
  //     const { lat, lon } = res.data[0];
  //     const info = await getCityWeatherFromCoordinates(lat, lon);
  //     // console.log(info)
  //     const currentTemperature = info.current_weather.temperature;
  //     const dailyMinTemp = info.daily.temperature_2m_min[0];
  //     const weatherCode = info.current_weather.weathercode;
  //     const city = info.timezone.split("/")[1];
  //     const country = getCountryName(city);
  //     // console.log(country);
  //     // console.log(info);
  //     const countryInfo = { currentTemperature, dailyMinTemp, country, weatherCode, city };
  //     setCitiesWeatherInfo((prevState) => [...prevState, countryInfo]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };