import { newContainer } from "../../dom_helper";

const forecastHours = (hours, i) => {
  let cont = newContainer('', 'hours')

  for(let hr_i=0; hr_i<hours.length; hr_i++) {
    const icon = document.createElement('img')
    icon.id = `day${i}-icon${hr_i}`
    icon.className = 'icon'
    icon.src = hours[hr_i].condition.icon

    cont.append(icon)
  }

  return cont
};

export {forecastHours}
