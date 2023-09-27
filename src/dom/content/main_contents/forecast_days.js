import { newContainer } from "../../dom_helper";

const forecastDay = (day, i) => {
  const cont = newContainer(`day${i}`, 'days')

  cont.innerHTML = day.condition.text

  return cont
};

export {forecastDay}
