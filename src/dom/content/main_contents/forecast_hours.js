import { newEl, forecastBox } from '../../dom_helper';

const forecastHours = (hours, i) => {
  let cont = newEl('', 'hours');

  for(let hr_i=0; hr_i<hours.length; hr_i++) {
    const hour = forecastBox('hour', hours[hr_i].condition.icon);

    hour.innerHTML = hours[hr_i].temp_c;

    cont.appendChild(hour);
  }

  return cont;
};

export { forecastHours };
