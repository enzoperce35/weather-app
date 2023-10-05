import { newEl } from "../../dom_helper";
import { forecastDay } from "./forecast_days";
import { forecastHours } from "./forecast_hours";

const mainContent = (() => {
  const cont = newEl('main-content'),
        days = newEl('forecast-days'),
       hours = newEl('forecast-hours');

  PubSub.subscribe('data_ready', (_, data) => {
    data.forecast.forecastday.forEach( (forecast_day, i) => {
      days.appendChild(forecastDay(forecast_day, i))

      hours.appendChild(forecastHours(forecast_day.hour, i))
    })
  })

  cont.append(days, hours)

  return cont
})();

export {mainContent}