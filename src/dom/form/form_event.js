// import { displayWeather } from '../../async_function/fetch_then';
import { displayWeather } from '../../async_function/async_await';

export const formEvent = (() => {
  const form = document.getElementById('form');

  // form submission
  form.onsubmit = (e) => {
    e.preventDefault();

    const city = () => {
      let name = '';

      new FormData(form).forEach((data) => {
        name += `${data} `;
      });

      return name;
    };

    displayWeather(city());
  };
})();
