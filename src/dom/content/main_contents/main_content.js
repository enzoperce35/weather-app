import { newEl } from '../../dom_helper';
import { forecastDay } from './forecast_days';
import { forecastHours } from './forecast_hours';

const mainContent = (() => {
  const cont = newEl('main-content');
  const days = newEl('forecast-days');
  const hours = newEl('forecast-hours');

  PubSub.subscribe('data_ready', (_, data) => {
    data.forecast.forecastday.forEach((day, i) => {
      days.appendChild(forecastDay(day, i));

      hours.appendChild(forecastHours(day.hour, i));
    });
  });

  cont.append(days, hours);

  return cont;
})();

export { mainContent };
