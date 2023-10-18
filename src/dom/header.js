import { newEl, currForecast, clear } from './dom_helper';

export const header = (() => {
  const container = newEl('header');
  const city = newEl('city');

  function formLink() {
    const link = newEl('form-link', 'form-toggle', 'img');
    link.src = '/src/icons/chevron-right.svg';

    const cont = newEl('link-cont');
    cont.appendChild(link)

    return cont;
  };

  function cityData(currData) {
    const cont = newEl('curr-forecast', '');

    cont.append(
      currForecast('temp', `${currData.feelslike_c} &#8451 | ${currData.feelslike_f} &#8457`),
      currForecast('wind', `${currData.wind_kph} kph`),
      currForecast('humidity', currData.humidity),
    );

    return cont;
  }

  function cityLocation(location) {
    const loc1 = document.createElement('p');
    loc1.innerHTML = `${location.region}, ${location.country}`;

    const loc2 = document.createElement('p');
    loc2.innerHTML = location.name

    const cont = newEl('city-loc');
    cont.append(loc1, loc2)

    return cont;
  }

  function newCityForecast(_, data) {
    clear(city);

    city.append(
      cityLocation(data.location),
      cityData(data.current),
    );
  }

  PubSub.subscribe('data_ready', newCityForecast)

  container.append(city, formLink());

  return container;
})();
