import { newEl, forecastBox } from "../../dom_helper";

const forecastDay = (forecast, i) => {
  const box = forecastBox('day', forecast.day.condition.icon, 'div'),
    foredate = newEl('', 'forecast-date', 'span'),
    foretext = newEl('', 'forecast-text', 'span');

  foredate.innerHTML = new Date(forecast.date).toDateString()
  foretext.innerHTML = forecast.day.condition.text

  box.append(foredate, foretext)

  return box
};

export {forecastDay}
