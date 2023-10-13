import { newEl, clear} from '../../dom_helper';
import { forecastDay } from './forecast_days';
import { forecastHours } from './forecast_hours';

const mainContent = (() => {
  const container = newEl('main-content');

  PubSub.subscribe('data_ready', (_, data) => {
    clear(container)

    const daysCont = newEl('forecast-days');
    const hourCont = newEl('forecast-hours');

    data.forecast.forecastday.forEach((day, i) => {
      daysCont.appendChild(forecastDay(day, i))
      hourCont.appendChild(forecastHours(day.hour, i))
    });

    container.append(daysCont, hourCont);
  });

  return container;
})();

export { mainContent };
