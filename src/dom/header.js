import { newEl, currForecast, clear } from './dom_helper';

export const header = (() => {
  const container = newEl('header');
  const city = newEl('city');

  const newCityLink = (() => {
    const newCity = newEl('change-city', 'form-toggle');
    newCity.innerHTML = 'Change City';

    const cont = newEl('new-city');
    cont.appendChild(newCity);

    return cont;
  })();

  function cityData(currData) {
    const cont = newEl('curr-forecast', '');

    cont.append(
      currForecast('temp', `${currData.feelslike_c} &#8451 | ${currData.feelslike_f} &#8457`),
      currForecast('wind', `${currData.wind_kph} kph`),
      currForecast('humidity', currData.humidity),
    );

    return cont;
  }

  function cityName(name) {
    const cont = newEl('city-name');
    cont.innerHTML = name;

    return cont;
  }

  PubSub.subscribe('data_ready', (_, data) => {
    clear(city);

    city.append(
      cityName(data.location.name),
      cityData(data.current),
    );
  });

  container.append(city, newCityLink);

  return container;
})();
