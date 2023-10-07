import { newEl, currForecast } from './dom_helper';

const header = (() => {
  const head = newEl('header');
  const city = newEl('city');
  const cityName = newEl('city-name');
  const forecastCont = newEl('curr-forecast', '');

  function cityData(currData) {
    const temp = currForecast('temp', `${currData.feelslike_c} &#8451 | ${currData.feelslike_f} &#8457`);
    const wind = currForecast('wind', `${currData.wind_kph} kph`);
    const humidity = currForecast('humidity', currData.humidity);

    forecastCont.append(temp, wind, humidity);
  }

  PubSub.subscribe('data_ready', (_, data) => {
    cityData(data.current);

    cityName.innerHTML = data.location.name;
  });

  city.append(cityName, forecastCont);
  head.append(city);

  return head;
})();

export { header };
