import PubSub from "pubsub-js";
import { newEl, currForecast } from "./dom_helper";

const header = (() =>{
  const head = newEl('header'),
        city = newEl('city'),
    cityName = newEl('city-name'),
forecastCont = newEl('curr-forecast', '');

  PubSub.subscribe('data_ready', (_, data) => {
    cityData(data.current)

    cityName.innerHTML = data.location.name
  })

  function cityData(currData) {
    let temp = currForecast('temp', `${currData.feelslike_c} &#8451 | ${currData.feelslike_f} &#8457`),
        wind = currForecast('wind', `${currData.wind_kph} kph`),
    humidity = currForecast('humidity', currData.humidity);

    forecastCont.append(temp, wind, humidity);
  }

  city.append(cityName, forecastCont)
  head.append(city)

  return head
})();

export { header }
